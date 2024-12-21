import React from 'react';
import './Style.css'; 

const Navbar = () => {
    return (
        <nav style={{ fontFamily: "'Raleway', sans-serif" }} className="navbar">
            <ul>
                <li><a href="#shop it">Shop</a></li>
                <li><a href="#about">À propos</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};


export default Navbar;