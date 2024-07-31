import React, { useState } from "react";
import "./Addproduct.css";
import upload from "../../assets/upload-icon.png";

const Addproduct = () => {
  const [image, setImage] = useState();
  const [productDetails, setProductDetails] = useState({
    name: "",
    category: "",
    old_price: "",
    new_price: "",
    image: "",
  });
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails
    let formData = new FormData()
    formData.append('product',image)
    await fetch('http://localhost:4000/upload',{
        method:'POST',
        headers:{
            Accept: 'Application/json',
        },
        body:formData
    }).then((res)=>res.json().then((data)=>{responseData = data}));
    if(responseData.success){
        product.image = responseData.image_url
        await fetch('http://localhost:4000/addproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product),
        }).then((res)=>res.json()).then((data)=>{
            data.success ? alert("product added") : alert("Failed")
        })
    }
  };
  return (
    <div className="add-product">
      <div className="add-product-item">
        <div className="add-product-tittle">
          <p>Product Tittle</p>
          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            placeholder="Type Here..."
          />
        </div>
        <div className="add-product-price">
          <div className="add-product-itemfield">
            <p>Price</p>
            <input
              type="text"
              value={productDetails.old_price}
              onChange={changeHandler}
              name="old_price"
              placeholder="Type Here..."
            />
          </div>
          <div className="add-product-itemfield">
            <p>Offer Price</p>
            <input
              type="text"
              value={productDetails.new_price}
              onChange={changeHandler}
              name="new_price"
              placeholder="Type Here..."
            />
          </div>
        </div>
      </div>
      <div className="add-product-itemfield">
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          type="text"
          name="category"
          className="add-product-selector"
        >
          <option value="">Select</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="add-product-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload}
            alt="Image"
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          type="file"
          onChange={handleImage}
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        className="addproduct-button"
        onClick={() => {
          addProduct();
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default Addproduct;
