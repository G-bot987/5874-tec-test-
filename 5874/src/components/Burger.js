import React, { useState } from "react";
import styled from "styled-components";
import Rightnav from "./Rightnav";

const BurgerStyle = styled.div`
  div {
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translate(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerStyle
        className="burger-outer"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div className="innner-burger"></div>
        <div className="innner-burger"></div>
        <div className="innner-burger"></div>
      </BurgerStyle>
      <Rightnav open={open} />
    </>
  );
};

export default Burger;
