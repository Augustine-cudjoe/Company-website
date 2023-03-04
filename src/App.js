import "./App.css"
import React from "react";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/inc/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
