import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            We help students and professionals upskill with quality tech
            courses and job-focused guidance.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#reviews">Testimonials</a></li>
            <li><a href="#explore">Explore</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: support@yourbrand.com</p>
          <p>Phone: +91 0000000000</p>
          <p>Address: Mumbai, India</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2025 Edtech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
