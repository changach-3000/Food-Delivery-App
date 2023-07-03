import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 footer-links ">
          <h4>About Us</h4>
          <ul>
            <li><i class="chevron right"></i>What Our Customers say about us</li>
            <li><i className="chevron right"></i>What we offer</li>
          
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 footer-links">
          <h4>Quick Links</h4>
          <ul>
         
            <li><i className="chevron right"></i>Location services</li>
            <li><i className="chevron right"></i>Community Services</li>
            <li><i className="chevron right"></i>Job Offers!</li>
          </ul>
        </div>
       
        <div className="col-lg-4 col-md-6 footer-info">
          <h3>SOCIALS</h3>
          <p>
           Get in touch with us through any of these platforms
          </p>
          <div className="social-links mt-3">
            <a className="twitter" target="_blank"><i class="twitter icon"></i></a>
            <a className="facebook" target="_blank"><i class="facebook f icon"></i></a>
            <a className="instagram" target="_blank"><i class="instagram icon"></i></a>
            <a className="linkedin" target="_blank"><i class="linkedin icon"></i></a>
            <a className="youtube" target="_blank"><i class="youtube icon"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="footer-bottom row">
      <div className="col-md-6 footer-links text-center">
        Copyright 2023 &copy;
        <strong><span>Made with ❤️ by Glowvo Team</span></strong>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer