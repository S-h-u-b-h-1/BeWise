import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
const navigate = useNavigate();
const navigateToStartPlanning = () => navigate("/Planner");
const navigateToTrack = () => navigate("/Budget");
const navigateToBudget = () => navigate("/Goals");
const navigateToCurrencyConverter = () => navigate("/CurrencyConverter");



return (
    <div className="home-container">
<section className="image-fullwidth-section">
<img className="image-fullwidth-bg" src="https://wallpapers.com/images/featured/blue-mountain-9lbfzsxuzjrkpu6c.jpg" alt="hero-image"/>
<div className="image-overlay-text">
    <h2>Travel Moments That Inspire</h2>
    <h3 className="image-overlay-subtitle">
    Watch your travel dreams come to life. From planning to tracking, TripWise supports every step of your journey.
    </h3>
</div>
</section>
    <section className="features">
        <div className="feature-card">
        <img src="https://img.icons8.com/?size=100&id=95015&format=png&color=000000" alt="Plan" />
        <h2>Plan</h2>
        <p>Plan your budget before you travel.</p>
        <button onClick={navigateToStartPlanning} className="cta-button">Start Planning</button>
        </div>

        <div className="feature-card">
        <img src="https://img.icons8.com/?size=100&id=112535&format=png&color=000000" alt="Track" />
        <h2>Track</h2>
        <p>Record and monitor your travel expenses in real-time.</p>
        <button onClick={navigateToTrack} className="cta-button">See Track</button>
        </div>

    </section>

    <section className="features">
        <div className="feature-card">
        <img src="https://img.icons8.com/?size=100&id=7748&format=png&color=000000" alt="Converter" />
        <h2>Currency Converter</h2>
        <p>Convert your expenses in different currencies real-time with accurate exchange rates.</p>
        <button onClick={navigateToCurrencyConverter} className="cta-button">Convert Now</button>
        </div>

        <div className="feature-card">
        <img src="https://img.icons8.com/?size=100&id=55997&format=png&color=000000" alt="Goals" />
        <h2>Budget Goals</h2>
        <p>Set Limits, Stay on Track - Budget Smarter for Every Journey.</p>
        <button onClick={navigateToBudget} className="cta-button">Goals</button>
        </div>
    </section>
    
<section className="reviews">
<h2 className="section-title">What Travelers Say About BeWise</h2>
<div className="review-cards">
    <div className="review-card">
    <p className="review-text">
    "BeWise made our European adventure stress-free. We set realistic savings goals and tracked expenses effortlessly.
        It kept us on budget without sacrificing experiences.
    Highly recommend for anyone wanting to travel smart and enjoy every moment."
    </p>
    <div className="review-rating">⭐⭐⭐⭐⭐</div>
    <div className="review-author">— Sumaan, Eurotrip Enthusiast</div>
    </div>

    <div className="review-card">
    <p className="review-text">
    "Planning our honeymoon was daunting until we found BeWise. 
    It helped us allocate funds for each part of the trip, ensuring we didn't overspend. The peace of mind it provided was invaluable."
    </p>
    <div className="review-rating">⭐⭐⭐⭐⭐</div>
    <div className="review-author">— Ashok, Himachal Backpacker</div>
    </div>

    <div className="review-card">
    <p className="review-text">
    "As a solo traveler, managing finances on the go is crucial. BeWise allowed me to set daily spending limits and monitor my expenses in real-time. 
    It empowered me to make informed decisions and extend my travels."
    </p>
    <div className="review-rating">⭐⭐⭐⭐⭐</div>
    <div className="review-author">— Rishank, Goa Explorer</div>
    </div>

</div>
</section>

    </div>
);
}

export default Home;