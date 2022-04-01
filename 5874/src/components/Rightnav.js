import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  @media (max-width: 768px) {
     {
      transform: ${({ open }) => (open ? "translate(0)" : "translateX(100%)")};
    }
  }
`;

const Rightnav = ({ open }) => {
  console.log("open " + open);
  return (
    <Ul open={open} className="navbar-list">
      <li className="navbar-option">Services</li>
      <li className="navbar-option">Work</li>
      <li className="navbar-option">About</li>
      <li className="navbar-option">Blog</li>
      <li className="navbar-option">Contact</li>
    </Ul>
  );
};

export default Rightnav;
