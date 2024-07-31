import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_products from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => {
  const [data_products,setData_products] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/popularwomen")
    .then((res)=>res.json())
    .then((data)=>setData_products(data))
  },[])
  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_products.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price ={item.new_price} old_price = {item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular