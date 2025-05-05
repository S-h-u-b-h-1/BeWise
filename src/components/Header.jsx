import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/header.css";
import { useAuth } from "../firebase/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

function Header() {
  const [showFeatures, setShowFeatures] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user } = useAuth() || {}
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  };


  const avatarURL = user
    ? `https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || user.email}`
    : ""

  return (
    <header className="header-container">
      <div className="logo-b">
        <div 
          className="logo-container" 
          style={{ cursor: "pointer" }} 
          onClick={() => navigate("/")}
          >
          <img src="https://img.icons8.com/?size=100&id=110881&format=png&color=000000" alt="logo"/>
        </div>

        <div
          className="b"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

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
              Plan Your Trip
              </Link>
              <Link to="/Goals" onClick={() => setShowFeatures(false)}>
              Set Budget Goals
              </Link>
              <Link to="/budget" onClick={() => setShowFeatures(false)}>
              Track Expenses
              </Link>
              <Link to="/CurrencyConverter" onClick={() => setShowFeatures(false)}>
              Currency Converter
              </Link>

            </div>
          )}
        </div>
      </div>

      <div className="auth-links">
        {!user ? (
          <>
            <Link to="/signup" className="auth-btn">Sign Up</Link>
            <Link to="/login" className="auth-btn">Login</Link>
          </>
        ) : (
          <>
            <img
              src={avatarURL}
              alt="User Avatar"
              className="profile-avatar pt"
              onClick={() => navigate("/profile")}
              style={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
            <button onClick={handleLogout} className="auth-btn pt">Logout</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;