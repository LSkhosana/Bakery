// import background from "../Assets/background.jpg"
import "../CSS/About.css"
import NavBar from "./NavBar";




function About() {
    return (
      <>
      <div className="home-container">
      <NavBar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            About Us
          </h1>
          <p className="primary-text">
          Welcome to Foodie, your ultimate destination for delicious and effortless dinner recipes! At Foodie, we believe that cooking shouldn't be complicated. Our mission is to empower home cooks of all skill levels to create mouthwatering meals without stress or hassle.
          </p></div>
      </div>
      </div>
      </>
    );
  }
  
  export default About;