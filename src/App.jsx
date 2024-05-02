import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import IngredientsPage from "./Components/IngredientsPage"
import HomePage from "./Components/HomePage.jsx"
import Work from "./Components/Work.jsx"
import Home from "./Components/Home.jsx"



function App() {
  return (
     <Router>
     <Routes>
     <Route path="/" exact element={<HomePage />} />
       <Route path="/Work" element={<Work/>} />
       <Route path="/Home" element={<Home/>} />
     </Routes>
  </Router> 
  );
}

export default App;