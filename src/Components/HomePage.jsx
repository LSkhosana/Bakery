import "../App.css";
import About from "./About";
import Footer from "./Footer";
import Testimonial from "./Testimonial";


function HomePage() {
    return (
        <div className="App">
          <About />
        <Testimonial/>
          <Footer />
        </div>
      );
};


export default HomePage;
