import React from "react";
import Pancake from "../Assets/Pancake.jpg"
import brownie from "../Assets/brownie.webp"
import Cheesecake from "../Assets/cheesecake.jpg"
import Contact from "./Contact";
import Footer from "./Footer";
import Pie from "../Assets/Pie.jpg"
import Muffin from "../Assets/choc muffins.jpg"
import Navbar from "./Navbar";


const Work = () => {
  const workInfoData = [
    {
      image: Pancake,
      title: "Pancake",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: brownie,
      title: "Brownie",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Cheesecake,
      title: "Cheesecake",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },

    
    {
      image: Muffin,
      title: "Chocolate Muffins",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },

    {
      image: Pie,
      title: "Pumpkin Pie",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },

    
    
  ];
  return (
    <>
    <Navbar/>
    <Contact/>
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Dessert</p>
        <h1 className="primary-heading">Our Delicious Desserts </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            <div className="about-buttons-container">
          <button style={{backgroundcolor:'white',}} className="secondary-button">Order Now</button>
          
        </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default Work;
