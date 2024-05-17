import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../Images/DEV DIGITAL LOGO.png";
import '../styling/nav.css'; // Import CSS file directly in JavaScript

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navRef = useRef(null); // Reference to the navigation container
  const location = useLocation(); // React Router's useLocation hook

  useEffect(() => {
    // Function to close the navigation menu when clicking outside of it
    const closeMenu = (e) => {
      if (!navRef.current.contains(e.target)) {
        setShowLinks(false);
      }
    };

    // Add event listener to the document body
    document.body.addEventListener('click', closeMenu);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.body.removeEventListener('click', closeMenu);
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  useEffect(() => {
    setShowLinks(false); // Close the menu when navigating to a new page
  }, [location.pathname]); // Re-run effect when the pathname changes

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  const links = [
    { title: "About", path: "/about" },
    { title: "Services", path: "/service" },
    { title: "Get Dev Digital", path: "/getdevdigital" },
  ];

  return (
    <div id="navbar" ref={navRef}>
      <div className={`hamburger ${showLinks ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`navlinks ${showLinks ? 'active' : ''}`}>
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            style={{ color: "white", textDecoration: 'none', padding: '10px', fontSize: "30px" }}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
