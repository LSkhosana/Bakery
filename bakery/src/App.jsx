import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage"
import "./App.css"
 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/item/:id" element={<ItemView />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
