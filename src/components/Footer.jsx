import React from "react";

function Footer() {
    return (
    <footer>
        <div>
        <div>
            <h3>Quick Links</h3>
            <p>
            <a href="/">Home</a
            >
            </p>
            <p>
            <a href="/blog"
                >Blog</a
            >
            </p>
            <p>
            <a href="/Contact" 
                >Contact Us</a
            >
            </p>
        </div>

        <div>
            <h3>Contact Us</h3>
            <div>
            <div>
                <span>📍</span>
                <p>Sonipat, Haryana</p>
            </div>
            <div>
                <span>📞</span>
                <p>+91 9929xx9x9x</p>
            </div>
            <div>
                <span>✉</span>
                <p>bewise.support@gmail.com</p>
            </div>
            </div>
        </div>

        <div>
            <h3>Get In Touch</h3>
            <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows="3" placeholder="Message"></textarea>
            <button type="submit">Send</button>
            </form>
        </div>
        </div>

        <div>
        <p>&copy; 2025 BeWise. All Rights Reserved.</p>
        </div>
        </footer>
    );
}
export default Footer;