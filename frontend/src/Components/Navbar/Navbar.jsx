import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/NavImages/bag.jpg";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContex";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to={'/'} onClick={window.scrollTo(0,0)} >Shop</Link>  {menu === "shop" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link to={'/mens'} onClick={window.scrollTo(0,0)}>Mens</Link> {menu === "men" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            <Link to={'/womens'} onClick={window.scrollTo(0,0)}>Womens</Link> {menu === "women" && <hr />}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to={'/kids'}>Kids</Link> {menu === "kids" && <hr />}
          </li>
        </ul>
        <div className="nav-login-cart">
          {
            localStorage.getItem('auth-token') ? 
            <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
              : <Link to={'/login'}><button>Login</button></Link>
          }  
          <Link to={'/cart'}><FiShoppingCart size={50} /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
