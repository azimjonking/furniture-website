import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

const Header = () => {


  // fixed navbar
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header")
    header.classList.toggle("active", window.scrollY > 100)
  })


  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <NavLink to="/">Panto</NavLink>
        </div>
        <nav>
          <ul>
            <li className="nav-link">
              <NavLink activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink activeclassname="active" to="/furniture">
                Furniture
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink activeclassname="active" to="/shop">
                Shop
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink activeclassname="active" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink activeclassname="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="basket">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
