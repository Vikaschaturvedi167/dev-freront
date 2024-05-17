import React from "react";
import sd from "../Images/sd-box22-removebg-preview.png";
import screen from "../Images/DEV DIGITAL 3.png";
import social from "../Images/social-media-5187243_1920-removebg-preview.png";
import special from "../Images/social-3408791_1920-removebg-preview.png"
import "../styling/Service.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="main-cont">
      <div>
        <div className="sd-box">
          <img src={sd} alt="sb-box" className="sd-image" />
          <p>
            The <span>DevDigital SD-Box</span> is a cutting-edge solution that
            seamlessly integrates modern technology with traditional television
            viewing experiences. Designed to enhance user convenience and
            accessibility, the SD Box delivers a diverse array of digital
            content directly to viewers' screens. Its compact design and
            user-friendly interface make navigating channels and accessing
            premium content effortless. With a focus on affordability and
            reliability, the DevDigital SD Box brings high-quality entertainment
            into homes, offering a rich selection of channels and features to
            cater to every viewer's preferences. Whether enjoying local
            broadcasts or exploring international programs, the SD Box ensures a
            seamless viewing experience, making it a versatile and indispensable
            addition to any home entertainment setup.
          </p>
        </div>
      </div>

      <h1 className="plans-for">CABLE-TV PLANS</h1>

      <div className="container-pack">
        <div className="cable-tv-products">
          <div>
            <h1>FTA Basic Pack</h1>
            <p>@154</p>
            <Link to="/ftaplan">
              <button className="Get-BUTTON">VIEW CHANNELS</button>
            </Link>
            <Link to="/getdevdigital">
              <button className="Get-BUTTON">GET PLAN</button>
            </Link>
          </div>
          <div>
            <h1>DD Silver A</h1>
            <p>@199</p>
            <Link to="/silvera">
              <button className="Get-BUTTON">VIEW CHANNELS</button>
            </Link>
            <Link to="/getdevdigital">
              <button className="Get-BUTTON">GET PLAN</button>
            </Link>
          </div>

          <div>
            <h1>DD Silver B</h1>
            <p>@199</p>
            <Link to="/silverb">
              <button className="Get-BUTTON">VIEW CHANNELS</button>
            </Link>
            <Link to="/getdevdigital">
              <button className="Get-BUTTON">GET PLAN</button>
            </Link>
          </div>

          <div>
            <h1>DD Silver C</h1>
            <p>@199</p>
            <Link to="/silverc">
              <button className="Get-BUTTON">VIEW CHANNELS</button>
            </Link>
            <Link to="/getdevdigital">
              <button className="Get-BUTTON">GET PLAN</button>
            </Link>
          </div>
          <div>
            <h1>DD Gold Pack</h1>
            <p>@299</p>
            <Link to="/gold">
              <button className="Get-BUTTON">VIEW CHANNELS</button>
            </Link>
            <Link to="/getdevdigital">
              <button className="Get-BUTTON">GET PLAN</button>
            </Link>
          </div>
          <div>
            <h1>Special Pack</h1>
            <p>@199</p>
            <Link to="/special">
              <button className="Get-BUTTON">VIEW CHANNELS</button>
            </Link>
            <Link to="/getdevdigital">
              <button className="Get-BUTTON">GET PLAN</button>
            </Link>
          </div>
        </div>

        <div className="tv-img">
          <img src={screen} alt="as" />
        </div>
      </div>
      <h1 className="intra">INTERNET PLANS</h1>

      <div className="Internet-plans">
        <div className="product-internet">
          <div>
          <h1>100mbps </h1>
          <h2>Unlimited Internet</h2>
          <h3>for 30days</h3>
            <p>@449</p>

            <Link to="/getdevdigital">
              <button className="Get-BUTTON">GET PLAN</button>
            </Link>
          </div>

          <div>
          <h1>100mbps </h1>
          <h2>Unlimited Internet</h2>
          <h3>for 30days</h3>
            <p>@599</p>
            <Link to="/getdevdigital">
              <button className="Get-BUTTON">GET PLAN</button>
            </Link>
          </div>
        </div>
        <div className="internet-img">
          <img src={social} alt="media" />
        </div>
      </div>

      <h1 className="intra1">COMBO PLANS</h1>
      <h3 className="combo">Special plans for both Internet & Cable-tv</h3>
      <div className="special-combo">
        <div>
          <img src={special} alt="alt" />
        </div>
        
          <div className="combo1">
        <h1>300+ TV-Channel</h1>
            <h1>100mbps</h1>
            <h1> Unlimited Internet</h1>
            <h3>for 30 days</h3>
            <p>@749</p>
            <Link to="/getdevdigital">
              <button className="Get-BUTTON">GET PLAN</button>
            </Link>
          </div>
          
      </div>

    </div>
  );
};

export default Services;
