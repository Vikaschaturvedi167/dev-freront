import React from "react";
import about from "../Images/medium-shot-women-with-remote_23-2149266803.jpg";
import devd2h from "../Images/d2222.png";
import hd from "../Images/hd-720.png";
import setting from "../Images/gear.png";
import recording from "../Images/video.png";
import pendrive from "../Images/pendrive.png";
import channel from "../Images/television.png";
import sound from "../Images/sound.png";
import poster from "../Images/DEV DIGITAL 2.jpg";
import "../styling/About.css";
const About = () => {
  return (
    <div className="main-cont">
    <div className="poster">
      <img src={poster} alt="poster" />
    </div>

      <div className="upper">
        <div className="img-cont">
          <img src={about} alt="about" />
        </div>
        <div className="content">
          <h1>Introducing DEV DIGITAL – Your Gateway to Digital Delight!</h1>
          <p>
            {" "}
            <span>Join us</span> on an extraordinary journey where entertainment
            meets innovation. At DEV DIGITAL, we're all about crafting
            unforgettable digital experiences tailored just for you. Immerse
            yourself in a world of endless possibilities with our dynamic blend
            of cable TV, OTT entertainment, and lightning-fast broadband
            services. With our curated selection of content from top
            broadcasters across genres, there's something for everyone in the
            family to enjoy. Experience the future of entertainment with DEV
            DIGITAL. Whether you're at home or on the move, our intuitive app
            brings your favorite shows and movies to your fingertips, ensuring
            you never miss a moment of excitement.
          </p>
          <p className="pp">
            Welcome to DEV DIGITAL – Where Entertainment Knows No Limits!
          </p>
        </div>
      </div>
      <div className="d2h">
        <h1>DEV vs D2H</h1>
        <img src={devd2h} alt="dev" />
      </div>
      <div>
        <div className="enjoy">
          <h1>Enjoy watching TV like never before.</h1>
        </div>
        <div className="our-servi">
          <div>
            <img src={hd} alt="Image 1"  />
            <h2>HD clarity</h2>
          </div>

          <div>
            <img src={sound} alt="Image 2" />
            <h2>Dolby Sound</h2>
          </div>

          <div>
            <img src={channel} alt="Image 3"  />
            <h2>350+ Channels</h2>
          </div>

          <div>
            <img src={setting} alt="Image 4"  />
            <h2>Free and safe installation</h2>
          </div>

          <div>
            <img src={recording} alt="Image 5"  />
            <h2>Safe Recording</h2>
          </div>

          <div>
            <img src={pendrive} alt="Image 5"  />
            <h2>Play videos from pendrive</h2>
          </div>


        </div>
       </div>
       <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3223065920733!2d77.37523507383649!3d28.6201007846481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55f5d03b1dd%3A0x61177597ddbda5ab!2sA-142%2C%20Sector%2063%20Rd%2C%20A%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1714045434203!5m2!1sen!2sin"
        
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  );
};

export default About;
