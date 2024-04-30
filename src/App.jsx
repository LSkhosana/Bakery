import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import IngredientsPage from "./Components/IngredientsPage"
import HomePage from "./Components/HomePage.jsx"



function App() {
  return (
     <Router>
     <Routes>
     <Route path="/" exact element={<HomePage />} />
       {/* <Route path="/ingredients" element={<IngredientsPage/>} /> */}
     </Routes>
  </Router> 
  );
}

export default App;