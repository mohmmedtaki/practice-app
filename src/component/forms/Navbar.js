import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

import "./navbar.css";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <h3>PracticeApp</h3>
        <nav ref={navRef}>
          <a href="/Home">Home</a>
          <a href="/Compnies">Companies</a>
          <a href="/ShowAllPerson">Show all person</a>
          <a href="/Animal">Animal Img</a>
          <a href="/Profile">Profile</a>
          <a href="/Login">Login</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};
export default Navbar;
