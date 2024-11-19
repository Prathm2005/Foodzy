import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";  // Ensure this path is correct

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo"> Foodzy</h1>
      <img className="profile" src={assets.profile_image} alt="Profile" />
    </div>
  );
};

export default Navbar;
