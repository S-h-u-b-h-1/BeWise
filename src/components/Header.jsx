import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

import "../styles/header.css";


function Header() {
const [showFeatures, setShowFeatures] = useState(false);
const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
const navigate = useNavigate();


const avatarURL = ""
return (
    <header className="header-container">
    <div className="logo-hamburger">
        <div 
        className="logo-container" 
        style={{ cursor: "pointer" }} 
        onClick={() => navigate("/")}
        >
        <img alt="Travel Logo" />
        </div>


        <div
        className="icon"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
    </div>

    {/* Nav Links */}
    <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <Link 
        to="/" 
        className="nav-btn" 
        onClick={() => setMobileMenuOpen(false)}
        >
        Home
        </Link>
        <Link 
        to="/blog" 
        className="nav-btn" 
        onClick={() => setMobileMenuOpen(false)}
        >
        Blog
        </Link>
        <Link 
        to="/contact" 
        className="nav-btn" 
        onClick={() => setMobileMenuOpen(false)}
        >
        Contact Us
        </Link>

        <div
        className="dropdown"
        style={{ marginTop: -25, top: "100%" }}
        onMouseEnter={() => setShowFeatures(true)}
        onMouseLeave={() => setShowFeatures(false)}
        >
        <button className="nav-btn dropbtn">Features</button>
        {showFeatures && (
            <div className="dropdown-content" >
            <Link to="/planner" onClick={() => setShowFeatures(false)}>
            Plan
            </Link>
            <Link to="/budget" onClick={() => setShowFeatures(false)}>
            Track
            </Link>
            <Link to="/CurrencyConverter" onClick={() => setShowFeatures(false)}>
            Currency Converter
            </Link>
            <Link to="/Goals" onClick={() => setShowFeatures(false)}>
            Budget Goals
            </Link>
            </div>
        )}
        </div>
    </div>

    </header>
);
}

export default Header;