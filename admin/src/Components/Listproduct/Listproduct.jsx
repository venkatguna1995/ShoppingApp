import React, { useEffect, useState } from "react";
import "./Listproduct.css";
import { CiCircleRemove } from "react-icons/ci";

const Listproduct = () => {
  const [allPoducts, setAllProducts] = useState([]);
  const fetchProducts = async (req, res) => {
    await fetch("http://localhost:4000/getproduct")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };
  console.log(allPoducts)
  useEffect(()=>{
    fetchProducts()
  },[])

  const removeProduct = async (id)=>{
    await fetch("http://localhost:4000/removeproduct",{
        method:'POST',
        headers:{
            Accept:'Application/json',
            'Content-Type':'Application/json',
        },
        body:JSON.stringify({id:id})
    })
    await fetchProducts()
  }
  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="list-products-main">
        <p>Product</p>
        <p>Tittle</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="list-products">
        {
            allPoducts.map((item,index)=>{
                return <>
                <div key={index} className="list-product-formate-main list-product-formate">
                    <img src={item.image} className="list-product-img" alt="" />
                    <p>{item.name}</p>
                    <p>{item.old_price}</p>
                    <p>{item.new_price}</p>
                    <p>{item.category}</p>
                    <CiCircleRemove size={30} onClick={()=>{removeProduct(item.id)}}/>
                </div>
                <hr />
                </>
            })
        }
      </div>
    </div>
  );
};

export default Listproduct;
