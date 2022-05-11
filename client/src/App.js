import "./App.css";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="teams" element={<Teams />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
