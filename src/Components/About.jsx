import React from "react";
import AboutBackground from "../Assets/about-background.png";
// import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";
import Cookies from "../Assets/chocolate.png"




const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={Cookies} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Sugar Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
        At Sweet Treats, our journey began with a humble oven and a passion for baking. What started as a small home kitchen venture has blossomed into a beloved neighborhood bakery
        </p>
        <p className="primary-text">
        With every confection crafted from the heart, we strive to bring joy to your taste buds, one delectable treat at a time. Welcome to our sweet world of homemade goodness.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
