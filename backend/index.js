const port = 4000;
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const cors = require('cors');
const product = require('./model/productModel');
const { type } = require('os');

app.use(express.json())
app.use(cors())



// Database Connection with mongoDb
mongoose.connect('mongodb+srv://venkatguna55:426374@cluster0.zq81fgq.mongodb.net/')
// API Creation
app.get('/',(req,res)=>{
    res.send('express app is running')
})
// Image Storage Engine
const storage = multer.diskStorage({
    destination : './uploads/images',
    filename :(req,file,cb)=>{
        cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage:storage})

//  creating upload end point for images
app.use('/images', express.static('uploads/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
     res.json({
        success : 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
     })
})

const Product = mongoose.model('Product',{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.Now
    },
    available:{
        type:Boolean,
        default:true
    }
})

// Schema for user model

const users = mongoose.model('users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    }, 
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

// Creating End Point USER

app.post('/singup',async(req,res)=>{
    let checkEmail = await users.findOne({email:req.body.email})
    if(checkEmail){
        return res.status(400).json({success:false,error:"Email Id Already Exist!"})
    }
    let cart = {};
    for(let i=0;i<300;i++){
        cart[i]=0
    }
    const user = new users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })
    await user.save()
    // const data = {
    //     user:{
    //         id:users.id
    //     }
    // }
    // const token = jwt.sign(data,'secret_ecom')
    res.json({
        sucess:true,
        message:"Account Created Now Login!"
    })
})

// User Login API

app.post('/login',async(req,res)=>{
    let user = await users.findOne({email:req.body.email})
    if(user){
        const passCompar = req.body.password === user.password
        if(passCompar){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token})
        }else{
            res.json({success:false,error:'Password Wrong'})
        }
    }else{
        res.json({success:false,error:'wrong Email Id'})
    }
})


// Add Product API

app.post('/addproduct',async (req,res)=>{
    let products = await Product.find({})
    let id;
    if(products.length > 0){
        let last_products_array = products.slice(-1)
        let last_products = last_products_array[0]
        id = last_products.id+1
        console.log(id,last_products.id)
    }else{
        id=1
    }
    console.log(products.slice(-1))
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        old_price:req.body.old_price,
        new_price:req.body.new_price,
    })
    await product.save()
    console.log("saved");
    res.json({
        success:true,
        name:req.body.name
    })
})

//  Delete Product API

app.post('/removeproduct',async(req,res)=>{
    await product.findOneAndDelete({id:req.body.id})
    console.log('Removed');
    res.json({
        success:true,
        name:product
    })
})

// Creating API getting all product
app.get('/getproduct',async(req,res)=>{
    let products = await product.find({})
    res.send(products)
})
app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port :  " + port)
    }else{
        console.log('error : ' +error )
    }
})


// Creating API for New Collection Products

app.get('/newcollections',async(req,res)=>{
    let products = await product.find({})
    let newCollection = products.slice(-8);
    res.send(newCollection)
})

// Popular Womens Category API
app.get('/popularwomen',async(req,res)=>{
    let products = await product.find({});
    let popularWomen = []
    for(let cat of products){
        if(cat.category==='women'){
            popularWomen.push(cat)
        }
    }   
    res.send(popularWomen.slice(-4))
})

// middleware for user Authanication
const fetchUser = async(req,res,next)=>{
    const token = req.header("auth-token")
    if(!token){
        res.status(401).send({error : "user authantication failed"})
    }else{
        try{
            const data = jwt.verify(token,'secret_ecom')
            req.user = data.user
            next()
        }catch{
            res.status(401).send({error:"user authantication failed"})
        }
    }
}
// Add Cart Items
app.post('/addcart',fetchUser,async(req,res)=>{
    let userData = await users.findOne({_id:req.user.id})
    userData.cartData[req.body.itemId] += 1;
    await users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send({message:"Added"})
})

// Remove Product From DB
app.post('/delete',fetchUser,async(req,res)=>{
    let userData = await users.findOne({_id:req.user.id})
    userData.cartData[req.body.itemId] -= 1;
    await users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send({message:"Remove"})
})

// Get CatData for loggedIn User

app.post('/getcartdata',fetchUser,async(req,res)=>{
    let userData = await users.findOne({_id:req.user.id})
    res.json(userData.cartData)
})