import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/NavImages/bag.jpg'
import nav_profile from '../../assets/NavImages/cart.jpg'

const Navbar = () => {
  return (
    <div className="Navbar">
        <img src={navlogo} alt=""/>
        <div>
            <h1>Shopper</h1>
            <h4>Admin Panel</h4>
        </div>
        <img src={nav_profile} alt="" />
    </div>
  )
}

export default Navbar