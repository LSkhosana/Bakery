import "../App.css";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";


function HomePage() {
    return (
        <div className="App">
          <About />
          <Work />
          <Contact />
          <Footer />
        </div>
      );
};


export default HomePage;
