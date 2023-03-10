import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadom">
  <div className="container-fluid">
    
    <Link to="/" className="navbar-brand"> Web Guru</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse col-sm-6 " id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          
          <Link to="about" className="nav-link active">About</Link>
        </li>
        <li className="nav-item">
          
          <Link to="/contact" className="nav-link active">Contact</Link>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>
  )
}

export default Navbar