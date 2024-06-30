import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div></div>
            <h4>ABOUT ZOMATO</h4>
            <br />
            <ul>
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Work With Us</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Report Fraud</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>ZOMAVERSE</h4>
            <br />
            <ul>
              <li><a href="#">Zomato</a></li>
              <li><a href="#">Blinkit</a></li>
              <li><a href="#">Feeding India</a></li>
              <li><a href="#">Hyperpure</a></li>
              <li><a href="#">Zomaland</a></li>
              <li><a href="#">Weather Union</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>FOR RESTAURANTS</h4>
            <br />
            <ul>
              <li><a href="#">Partner With Us</a></li>
              <li><a href="#">Apps For You</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>LEARN MORE</h4>
            <br />
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="social-links">
              <h4>SOCIAL LINKS</h4>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="app-download">
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={assets.app_store} alt="App Store" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src={assets.play_store} alt="Google Play" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 Zomato™ Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;