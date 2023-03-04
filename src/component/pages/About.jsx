
import React from "react";
import Footer from "../inc/Footer";
import Vcm from "./inc/Vcm";



function About() {
  return (
    <div >
        <section className="py-4 bg-info">
          <div className="container">
            <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About me</h4>

            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end"> About Us</h6>

            </div>



            </div>
          </div>
  

        </section>
        <section className="section border-button">
          <div className="container">
            <h5 className="main-heanding">  Our Company</h5>
            <div className="underline"></div>
            <p> Random access memory , main memory , RAM ( random -access memory , main memory ) - the basic type of computer memory . In general, the term RAM refers to the main memory in most computers, more specifically to semiconductor memories SRAM and DRAM .</p>
            
           <h6 className="float-end"> Home/About Us</h6>

            </div>
        </section>
       <Vcm/>
       <Footer/>
    </div>
  )
}

export default About;
