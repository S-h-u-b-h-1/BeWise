import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";


function Home() {
const navigate = useNavigate();
const navigateToReports = () => navigate("/reports");
const navigateToStartPlanning = () => navigate("/Planner");
const navigateToTrack = () => navigate("/Budget");
const navigateToBudget = () => navigate("/Goals");
const navigateToCurrencyConverter = () => navigate("/CurrencyConverter");

<video className='videoTag' autoPlay loop muted>
<source type='0418.mp4' />
</video>

return (
    <div className="home-container">
    {/* HERO SECTION WITH VIDEO BACKGROUND */}
    {/* <div className="hero">
        <h1 className="title">Travel Budget Planner</h1>
        <p className="subtitle">
        Plan smart, travel far. Manage your travel expenses with ease.
        </p>
        
    </div> */}
    {/* VIDEO SECTION */}
<section className="video-fullwidth-section">
<video className="video-fullwidth-bg" autoPlay loop muted>
    <source type="video/mp4" />
    Your browser does not support the video tag.
</video>
<div className="video-overlay-text">
    <h2>Travel Moments That Inspire</h2>
    <p>
    Watch your travel dreams come to life. From planning to tracking, TripWise supports every step of your journey.
    </p>
</div>
</section>
    {/* FEATURE CARDS SECTION 1 */}
    <section className="features">
        <div className="feature-card">
        <img alt="Plan" />
        <h2>Plan</h2>
        <p >Set your budget goals before you travel.</p>
        <button onClick={navigateToStartPlanning} className="cta-button">Start Planning</button>
        </div>

        <div className="feature-card">
        <img alt="Track" />
        <h2>Track</h2>
        <p>Record and monitor your travel expenses in real-time.</p>
        <button onClick={navigateToTrack} className="cta-button">See Track</button>
        </div>

       
    </section>

    {/* FEATURE CARDS SECTION 2 */}
    <section className="features">
        <div className="feature-card">
        <img alt="Converter" />
        <h2>Currency Converter</h2>
        <p>Convert your expenses in real-time with accurate exchange rates.</p>
        <button onClick={navigateToCurrencyConverter} className="cta-button">Convert Now</button>
        </div>

        <div className="feature-card">
        <img alt="Goals" />
        <h3>Budget Goals</h3>
        <p>Set Limits, Stay on Track - Budget Smarter for Every Journey.</p>
        <button onClick={navigateToBudget} className="cta-button">Goals</button>
        </div>
    </section>
    

    {/* MAP SECTION */}
    {/* REVIEWS SECTION */}
<section className="reviews">
<h2 className="section-title">What Travelers Say About TripWise</h2>
<div className="review-cards">
    <div className="review-card">
    <p className="review-text">
        “BeWise completely transformed the way we planned our travel budget. 
        From pre-trip planning to real-time expense tracking, everything was seamless. 
        The charts were incredibly helpful in identifying where we could cut costs.”
    </p>
    <div className="review-rating">⭐⭐⭐⭐⭐</div>
    <div className="review-author">— Sumaan, Goa Explorer</div>
    </div>

    <div className="review-card">
    <p className="review-text">
        “We were a group of five and the collaborative budgeting feature helped us stay coordinated without the usual money confusion. 
        Splitting bills and managing shared expenses was super easy. Loved it!”
    </p>
    <div className="review-rating">⭐⭐⭐⭐⭐</div>
    <div className="review-author">— Ashok, Himachal Backpacker</div>
    </div>

    <div className="review-card">
    <p className="review-text">
        “While traveling across Europe, the built-in currency converter saved us so much time. 
        No more Googling rates or doing manual calculations. And the interface? Super clean and intuitive.”
    </p>
    <div className="review-rating">⭐⭐⭐⭐⭐</div>
    <div className="review-author">— Rishank, Eurotrip Enthusiast</div>
    </div>

</div>
</section>

    </div>
);
}

export default Home;