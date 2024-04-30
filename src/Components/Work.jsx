import React from "react";
import Pancake from "../Assets/Pancake.jpg"
import brownie from "../Assets/brownie.webp"
import Cheesecake from "../Assets/cheesecake.jpg"


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
    
    
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Recipes</p>
        <h1 className="primary-heading">The Dessert Guide</h1>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
