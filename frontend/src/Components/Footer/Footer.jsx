import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa6'
import logo from '../../Components/Assets/NavImages/bag.jpg'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <FaInstagram/>
                <FaFacebook/>
                <FaWhatsapp/>
                <FaPinterest/>
            </div>
            <div className="footer-copyrights">
                <hr />
                <p>All Copyright recived @2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer