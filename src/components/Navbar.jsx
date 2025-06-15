import React, { useState } from "react";
import icon from '../assets/images/image.png';
import userIcon from '../assets/images/user.png';
import '../css/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClickHome = () => navigate('/');

  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        <div className="nav-left-section">
          <img
            className="nav-logo"
            src={icon}
            alt="logo"
            onClick={onClickHome}
          />
          <h1 className="title" onClick={onClickHome}>
            EdTech
          </h1>
        </div>

        <div className="nav-right-section">
          {/* Hamburger */}
          <button
            className="menu-btn"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            &#9776;
          </button>

          {/* Links */}
          <ul className={`nav-links${isOpen ? ' open' : ''}`}>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li>
              <Link to="/account">
                <img
                  className="user-icon"
                  src={userIcon}
                  alt="user profile"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;