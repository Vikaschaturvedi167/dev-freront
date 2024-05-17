import React, { useEffect,useState } from "react";
import '../styling/home.css'
import AOS from "aos";
import b1 from "../Images/home-back1.mp4";
import wifi from "../Images/wifi-icon.jpg";
import cabel from "../Images/cabletv.jpg";
import brod from "../Images/broadband-icon.jpg";
import express from "../Images/express-internet-icon.jpg"
import internet from "../Images/internet-home-icon.jpg"
import zee from "../Images/zeetv.jpg";
import sony from "../Images/sony-icon.jpg"
import star from "../Images/starPlus.jpg";
import discovery from "../Images/discovery.jpg";
import one from "../Images/one.jpg";
import grid from "../Images/power-grid.jpg";
import play from "../Images/trippleplay.jpg";
import rail from "../Images/express-network.jpg";
import { Link } from "react-router-dom";
import ones from "../Images/pexels-cottonbro-4009409.jpg";
import two from "../Images/pexels-hillaryfox-1595385.jpg"
import three from "../Images/pexels-olly-853151.jpg";
import four from "../Images/tv-select.jpg"

// import skin from "./images/skin-back.jpg"
// import video from "./images/blog19.mp4"



const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true // Animation only happens once
    });
  }, []);

  return (
    <div className="main-container">
      <div className="background-img">
      <video src={b1} controls loop autoPlay muted   className="image" />
        <div className="text-overlay">
        <h1>  WE ARE <span>DEV DIGITAL</span></h1>
          <p>
        
          Dev Digital is a leading provider of connectivity solutions for both businesses and homes. Our mission is to bridge the gap between un-connected and under connected businesses and homes, by offering reliable and efficient connectivity services. Our ultimate goal is to exceed the expectations of our customers by constantly improving and innovating our services. We believe in bringing together the best in media and technology to provide our clients with a seamless and high-quality experience. 

With our expertise in the field and dedication to customer satisfaction, we are committed to helping businesses and homes stay connected, productive, and ahead in the digital age.
         
         
          </p>
        </div>
      </div>


      <div className="navigate">


      <h1 className="reg1">
      REGISTER NOW AND CHOOSE YOUR OWN TV CHANNELS.
      </h1>
      <h3 className="reg2">
ALSO GET SUPERFAST INTERNET FOR YOUR HOME AND BUSINESS
</h3>

<Link to="/getdevdigital">
  <button className="REG-BUTTON">REGISTER NOW</button>
</Link>
      </div>

      <div className="main-service">
        <h1>Our Services</h1>
        <div  className="our-service">
      
      <div className="fadeIn" data-aos="fade-right" >
        <img src={wifi} alt="Image 1"  />
        <h2>WIFI</h2>
      </div>

    
      <div  className="fadeIn" data-aos="fade-left">
        <img src={cabel} alt="Image 2" />
        <h2>CABEL TV</h2>
      </div>

    
      <div  className="fadeIn" data-aos="fade-right">
        <img src={brod} alt="Image 3"  />
        <h2>INTERNET</h2>
      </div>

      
      {/* <div  className="fadeIn"  data-aos="fade-left">
        <img src={internet} alt="Image 4" width="200" height="200" />
        <h2>INTERNET FOR HOME</h2>
      </div> */}

    
      <div  className="fadeIn" data-aos="fade-right">
        <img src={express} alt="Image 5"/>
        <h2>EXPRESS WIFI</h2>
      </div>
    </div>
  </div>

<div className="GET-DEV">
<Link to="/getdevdigital">
  <button className="Get-BUTTON">GET DEV DIGITAL</button>
</Link>
</div>

  <div className="partner">
  <h1>OUR ESTEEMED PARTNERS</h1>
  <h2>We take pride in our associations that extends the purview of the typical client relationships. We believe in partnering with clients in order to maximise productivity to the best of our know how and expertise. The client brands nd the constant trust placed in us by these partners tell the story by itself.</h2>
  <div className="partner-img">
      
      <img src={zee} alt="Image 1" />

    
      <img src={sony} alt="Image 2" />

    
      <img src={discovery} alt="Image 3" />

    
      <img src={star} alt="Image 4" />

    
      <img src={one} alt="Image 5" />

    
      <img src={rail} alt="Image 6" />

      
      <img src={grid} alt="Image 7" />


      
      <img src={play} alt="Image 8" />
    </div>

   </div>

   <div className="images-sec">
    <div className="sec1">
      <img src={ones} alt="digital-tv" />
      <img src={two} alt="dish-tv"/>

    </div>
    <div className="sec1">
    <img src={three} alt="digital-tv" />
      <img src={four} alt="dish-tv"/>

    </div>
   </div>
   <div className="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3223065920733!2d77.37523507383649!3d28.6201007846481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55f5d03b1dd%3A0x61177597ddbda5ab!2sA-142%2C%20Sector%2063%20Rd%2C%20A%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1714045434203!5m2!1sen!2sin"
        
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      </div>
  )
}

export default HomePage