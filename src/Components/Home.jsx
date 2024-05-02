import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Choc from  "../Assets/delicious-muffins-transparent-background-png.webp"
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            About Us
          </h1>
          <p className="primary-text">
          Welcome to SweetTreats, your ultimate destination for delicious and effortless dessert recipes! At SweetTreats, we believe that baking shouldn't be complicated. Our mission is to empower home bakers of all skill levels to create mouthwatering desserts without stress or hassle.
          </p>
          <button className="secondary-button">
            <Link to="/ingredients">More info <FiArrowRight /></Link>
          </button>
        </div>
        <div className="home-image-section">
        <img src={Choc} alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
