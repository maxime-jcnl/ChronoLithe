import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">CHRONOLITHE.</Link>
      </div>
      <ul>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">À Propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
