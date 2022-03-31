import React from "react";
import "./Landing.css";
export default function Footer() {
  return (
    <div className="landing-container">
      <div className="intro-container">
        <div className="logo-div"></div>
        <div className="brand-statement-container">
          <p className="key-word"></p>
          <h2 className="title-1"></h2>
          <h2 className="title-2"></h2>
          <p className="brand-statement"></p>
          <a className="talk" href="#">
            lets talk
          </a>
        </div>
      </div>
      <div className="img-container"></div>
    </div>
  );
}
