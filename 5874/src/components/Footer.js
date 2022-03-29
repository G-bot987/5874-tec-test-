import React from "react";
import "./Footer.css";
import linkin from "../imgs/linkedin-32.png";
import insta from "../imgs/instagram-6-32.png";
import twitter from "../imgs/twitter-32.png";
import facebook from "../imgs/facebook-32.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="left-container">
        <div className="header-container">
          <p>We're a brands best Friend</p>
        </div>
        <div className="talk-div">Let's talk</div>
        <p className="copywrite">
          Copyright © Digital Spaniel 2019. All rights reserved.
        </p>
      </div>

      <div className="footer-menu">
        <div className="explore">
          <p>Explore</p>
          <p>Services</p>
          <p>Work</p>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
        <div className="services">
          <p>Services</p>
          <p>Brand</p>
          <p>Development</p>
          <p>Marketing</p>
        </div>
        <div className="questions">
          <p>Questions</p>
          <p>Call Us</p>
          <p>0121 345 678</p>
          <p>Email Us</p>
          <a href="mailto:info@digitalspaniel.co.uk">
            info@digitalspaniel.co.uk
          </a>
        </div>
      </div>

      <div className="icon-box">
        <a href="#">
          <img src={facebook} className="icon" alt="our twitter" />
        </a>
        <a href="#">
          <img src={twitter} className="icon" alt="our twitter" />
        </a>
        <a href="#">
          <img src={linkin} className="icon" alt="our linked in" />
        </a>
        <a href="#">
          <img src={insta} className="icon" alt="our instagram" />
        </a>
      </div>
    </div>
  );
}
