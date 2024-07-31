import React, { createContext, useEffect, useState } from "react";
// import { all_products_data } from "../Components/Assets/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());
  const [all_products_data, setAll_products_data] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/getproduct")
    .then((res)=>res.json())
    .then((data)=> setAll_products_data(data))
    let token = localStorage.getItem('auth-token')
    if(token){
      fetch("http://localhost:4000/getcartdata",{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':token,
          'Content-Type':'application/json'
        },
        body:''
      }).then((res)=>res.json()).then((data)=>setCartItems(data))
    }
  },[])

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId] : prev[itemId] + 1 }));
    let token = localStorage.getItem('auth-token')
    if(token){
      fetch('http://localhost:4000/addcart',{
        method:"POST",
        headers:{
          Accept:"Application/Form-Data",
          'auth-token': token,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"itemId":itemId})
      })
      .then((res)=>res.json()).then((data)=>console.log(data));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    let token = localStorage.getItem('auth-token')
    if(token){
      fetch('http://localhost:4000/delete',{
        method:"POST",
        headers:{
          Accept:"Application/Form-Data",
          'auth-token': token,
          'Content-Type':'application/json'
        },
        body:JSON.stringify({"itemId":itemId})
      })
      .then((res)=>res.json()).then((data)=>console.log(data));
    }
  };

  const getCartItemsTotal = () => {
    let cartTotalValue = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        console.log(cartItem[item], cartItem);
        let itemInfo = all_products_data.find(
          (product) => product.id === Number(item)
        );
        console.log(itemInfo);
        cartTotalValue += itemInfo.new_price * cartItem[item];
      }
    }
    return cartTotalValue;
  };
  const getTotalCartItems = () => {
    let totalCartItems = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        totalCartItems += cartItem[item];
      }
    }
    return totalCartItems;
  };
  const contextValue = {
    all_products_data,
    cartItem,
    addToCart,
    removeFromCart,
    getCartItemsTotal,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
