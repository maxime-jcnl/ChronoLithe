import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Navbar = ({ hideAuthIcon }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand"><Link to="/">CHRONOLITHE.</Link></div>
      <ul>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/about">À Propos</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      {!hideAuthIcon && (
        <div className="auth-icon" onClick={toggleDropdown}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt="User Icon"
            className="auth-icon-image"
          />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/login">Se connecter</Link>
              <Link to="/signup">Créer un compte</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
