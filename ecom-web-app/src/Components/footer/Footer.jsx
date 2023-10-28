import React from "react";
import './footer.scss'
import footer_logo from '../assets/logo.png'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Creatify</p>
        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-icons">
            <div className="footer-icon-container">
                <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className="footer-icon-container">
                <i class="fa-brands fa-github"></i>
            </div>
            <div className="footer-icon-container">
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @NavneetShahi - All right reserved</p>
            </div>
      </div>
    </>
  );
};

export default Footer;
