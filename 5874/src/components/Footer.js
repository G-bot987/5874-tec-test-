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
          <p className="header">We're a brands best Friend</p>
        </div>

        <a className="talk-div" href="#">
          Let's talk
        </a>

        <p className="copywrite">
          Copyright © Digital Spaniel 2019. All rights reserved.
        </p>
      </div>

      <div className="footer-menu">
        <div className="top">
          <div className="drop-down">
            <p className="no-margin">Explore</p>

            <p className="menu-styling">Services</p>
            <p className="menu-styling">Work</p>
            <p className="menu-styling">About</p>
            <p className="menu-styling">Blog</p>
            <p className="menu-styling">Careers</p>
          </div>
          <div className="drop-down">
            <p className="no-margin"> Services</p>

            <p className="menu-styling">Brand</p>
            <p className="menu-styling">Development</p>
            <p className="menu-styling">Marketing</p>
          </div>
          <div className="drop-down">
            <p className="no-margin">Questions?</p>

            <p className="menu-styling">Call Us</p>
            <p className="menu-styling">0121 345 678</p>
            <p className="menu-styling">Email Us</p>
            <a className="menu-styling" href="mailto:info@digitalspaniel.co.uk">
              info@digitalspaniel.co.uk
            </a>
          </div>
        </div>
        <div className="btm">
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
      </div>
    </div>
  );
}
