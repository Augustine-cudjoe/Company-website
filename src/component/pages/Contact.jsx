
import React from "react";
import Footer from "../inc/Footer";



function Contact() {
  return (
    <div>
    <section className="py-4 bg-info">
          <div className="container">
            <div className="row">
            <div className="col-md-4 my-auto">
              <h4>Contact Us</h4>

            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end"> Home/About Us</h6>

            </div>



            </div>
          </div>
  

        </section>

     <section className="section">
     <div className="container">
        <div className="card shadow">
            <div className="card-body">
            <div className="row">
              <div className="col-md-6 ">
               <h6>Contact form</h6>
               <hr/>
                  <div className="form-group">
                    <label className="mb-1"> full Name</label>
                    <input type="text" className="form-control" placeholder="Enter full name"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1">  Email</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1"> Phone number</label>
                    <input type="number" className="form-control" placeholder="Enter phone number"/>
                  </div>
                  <div className="form-group">
                    <label className="mb-1"> Message</label>
                    <textarea rows="3" className="form-control" placeholder="Type your message....."></textarea>
                  </div>
                  <div className="form-group py-3">
              
                    <button  type="button" className="btn btn-primary shadow w-100" > Send Message</button>
                  </div>
              </div>
              <div className="col-md-6 border-start">
                <h5 className="main-heading">Address Information</h5>
                <div className="underline"></div>
                <p>
                  Address: ul ,studenka 12 ,katowice, Poland
                </p>
                <p>
                 phone:+393272077379
                </p>
                <p>
                  Email:auguscudjoe94@gmail.com
                </p>
              </div>
            </div>
            </div>
        </div>
      
    </div>
     </section>
    <Footer/>
    </div>
  )
}

export default Contact;
