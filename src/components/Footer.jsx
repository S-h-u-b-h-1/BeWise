import React from "react";
import "../styles/footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <h4>
          BeWise helps travelers plan, <br/>track, and manage their trip <br/>expenses with ease. From <br/>setting budget goals to monitoring <br/>real-time spending, we make <br/>travel smarter and stress-free.
          </h4>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <p>
          <Link to='/'>Home</Link>
          </p>
          <p>
          <Link to='/blog'>Blog</Link>
          </p>
          <p>
          <Link to='/contact'>Contact</Link>
          </p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span>📍</span>
              <h4>Sonipat, Delhi NCR</h4>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <h4>+91 987654321</h4>
            </div>
            <div className="contact-item">
              <span>📩</span>
              <h4>bewise.support@hmail.com</h4>
            </div>
          </div>
        </div>

      </div>

      <div className="copyright">
        <h4>&copy; BeWise. All Rights Reserved.</h4>
      </div>
    </footer>
  );
}

export default Footer;