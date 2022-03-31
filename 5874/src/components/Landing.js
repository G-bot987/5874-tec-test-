import React from "react";
import "./Landing.css";
import backdrop from "../imgs/Spaniel01_gradient.png";
import logo from "../imgs/Digital-Spaniel-logo01-01.png";
export default function Footer() {
  return (
    <div className="landing-container">
      <div className="left-container-landing">
        <img src={logo} className="logo" alt="Digital Spaniel Logo" />
        <div className="intro-container">
          <div className="brand-statement-container">
            <p className="key-word"> BRAND, DEV, ECOM, MARKETING</p>
            <h2 className="title-1">We unleash </h2>
            <h2 className="title-2"> business potential</h2>

            <p className="brand-statement">
              We create brand experiences which are memorable and distinct. Our
              experienced team create and develop brands with personality and
              resonance.
            </p>

            <a className="talk" href="#">
              lets talk
            </a>
          </div>
        </div>
      </div>
      <img
        src={backdrop}
        className="backdrop"
        alt="Running Spaniel with a blue backdrop"
      />
    </div>
  );
}
