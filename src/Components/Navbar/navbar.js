import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  return (
    // Navbar

    <>
      <nav
        className={
          navbar
            ? "navbar scroll navbar-expand-sm fixed-top"
            : "navbar navbar-expand-sm fixed-top"
        }
      >
        <a href="https://example.com" className="navbar-brand">
          <span>F</span>aree Car's
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="https://example.com" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="https://example.com" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="https://example.com" className="nav-link">
                Brands
              </a>
            </li>
            <li className="nav-item">
              <a href="https://example.com" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="https://example.com" className="nav-link">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
