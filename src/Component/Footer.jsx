import React from "react";
import logo from "../Images/devlogo.jpg"
import five from "../Images/footer-back.webp";
import "../styling/Footer.css"

const FooterPage = () => {
  return (
    <div
      className="footer-container"
      style={{ backgroundImage: `url(${five})` }}
    >
      <div className="overlay-text">
        <div id="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", marginBottom: "-20px" }}
          />
          
        </div>
        <div className="contact">
        <h2>KEEP IN TOUCH</h2>
        <ul>
          <li>Website: www.devdigital.com</li>
          <li>E-Mail: devdigital6400@gmail.com</li>
          <li>Contact No: 9355907250</li>
           <li>Office : A142, Sector 63, Noida, 201301</li>
           
        </ul>
        </div>
        

        
      </div>
    </div>
  );
};

export default FooterPage;