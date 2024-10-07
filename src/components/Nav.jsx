import React, { useState } from "react";
import "../css/nav.css";
import {
  CardChecklist,
  Heart,
  MenuApp,
  MenuUp,
  Person,
  Search,
} from "react-bootstrap-icons";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin:"0px 20px"
        }}
      >
       <div style={{display:"flex"}}>
       <div
          className="menu-icon"
          onClick={toggleMenu}
          style={{ fontSize: "20px", marginTop: "-27px" }}
        >
          <h2>&#9776;</h2>
        </div>
        <div
          className="flower-icon"
          style={{ fontSize: "35px", marginTop: "-7.5px" }}
        >
          &#10047;
        </div>
       </div>
        <div className="logo-container" style={{ marginTop: "-10px" }}>
          <h1>LOGO</h1>
        </div>
        <div
          className="cart-container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "19px",
           
          }}
        >
          <div className="icon">
            <Search size={20} />
          </div>
          <div className="icon">
            <Heart size={20} />
          </div>
          <div className="icon">
            <CardChecklist size={20} />
          </div>
          <div className="iconp">
            <Person size={20} />
          </div>
          <div className="language" style={{ marginTop: "-20px" }}>
            <h4>ENG<span>▼</span></h4>
          </div>
        </div>
      </div>
      <nav style={{ marginTop: "-40px" }} className="nav">
        <ul
          className="menu"
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            margin:"10px 90px"
          }}
        >
          <li className="menu-items">
            <h3>SHOP</h3>
          </li>
          <li className="menu-items">
            <h3>SKILLS</h3>
          </li>
          <li className="menu-items">
            <h3>STORIES</h3>
          </li>
          <li className="menu-items">
            <h3>ABOUT</h3>
          </li>
          <li className="menu-items">
            <h3>CONTACT US</h3>
          </li>
        </ul>
      </nav>
      <hr style={{ marginTop: "-20px" }} />
      {isMenuOpen && (
        <div className="fullscreen-menu">
          <div className="menu-close" onClick={toggleMenu}>
            &times;
          </div>
          <ul className="fullscreen-menu-items">
            <li className="fullscreen-menu-item" onClick={toggleMenu}>
              SHOP
            </li>
            <li className="fullscreen-menu-item" onClick={toggleMenu}>
              SKILLS
            </li>
            <li className="fullscreen-menu-item" onClick={toggleMenu}>
              STORIES
            </li>
            <li className="fullscreen-menu-item" onClick={toggleMenu}>
              ABOUT
            </li>
            <li className="fullscreen-menu-item" onClick={toggleMenu}>
              CONTACT US
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
