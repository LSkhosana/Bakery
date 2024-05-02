import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import IngredientsPage from "./Components/IngredientsPage"
import AboutPage from "./Components/AboutPage.jsx"
import Work from "./Components/Work.jsx"
import Home from "./Components/Home.jsx"



function App() {
  return (
     <Router>
     <Routes>
     <Route path="/" exact element={<Home />} />
       <Route path="/Work" element={<Work/>} />
       <Route path="/About" element={<AboutPage/>} />
     </Routes>
  </Router> 
  );
}

export default App;