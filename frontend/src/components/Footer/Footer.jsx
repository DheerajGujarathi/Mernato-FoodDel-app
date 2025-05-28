import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>"Welcome to Mernato – where every meal is crafted with love and delivered with care. We bring you a delightful mix of fresh ingredients, authentic flavors, and quick service right to your doorstep. Whether you're craving a comforting classic or exploring something new, our menu has something for everyone. At Mernato, we believe good food makes everything better – and we’re here to make your day a little more delicious."</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 912345678</li>
                <li>contact@mernato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Mernato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
