import React from "react";
import "./Header.css";
import { scroller } from "react-scroll";
const Header = () => {
  const scrollToMenu = () => {
    scroller.scrollTo('food-item', {
      smooth: true, 
      duration: 800, 
      offset: -50, 
    });
  };
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favorite Food</h2>
        <p>
          Explore a wide variety of dishes from our menu and have them delivered to your doorstep.
          Whether you're craving pizza, pasta, or desserts, we've got something for everyone!
        </p>
        
        <button onClick={scrollToMenu}>View Menu</button>
       
      </div>
    </div>
  );
};

export default Header;
