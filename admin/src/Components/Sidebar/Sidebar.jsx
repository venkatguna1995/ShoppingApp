import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { MdAddShoppingCart } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className="side-bar">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <MdAddShoppingCart size={40} color='red'/>
            <p>Add Product</p>
        </div>
        </Link>  
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebar-item">
            <CiCircleList size={40} color='red'/>
            <p>Product List</p>
        </div>
        </Link> 
    </div>
  )
}

export default Sidebar