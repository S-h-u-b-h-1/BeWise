import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
const [showFeatures, setShowFeatures] = useState(false);
const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
return (
    <header>
    <div>
        <div 
        style={{ cursor: "pointer" }} 
        onClick={() => navigate("/")}
        >
        <img alt="Travel Logo" />
        </div>

        <div
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>

    {/* Nav Links */}
    <div>
        <Link 
        to="/" 
        onClick={() => setMobileMenuOpen(false)}
        >
        Home
        </Link>
        <Link 
        to="/blog" 
        onClick={() => setMobileMenuOpen(false)}
        >
        Blog
        </Link>
        <Link 
        to="/contact" 
        onClick={() => setMobileMenuOpen(false)}
        >
        Contact Us
        </Link>

        <div
        style={{ marginTop: -25, top: "100%" }}
        onMouseEnter={() => setShowFeatures(true)}
        onMouseLeave={() => setShowFeatures(false)}
        >
        <button>Features</button>
        {showFeatures && (
            <div>
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