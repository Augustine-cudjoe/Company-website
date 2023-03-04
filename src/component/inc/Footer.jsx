
import React from 'react';
import { Link } from 'react-router-dom';
//import { Container, Row, Col } from 'react-bootstrap';

function Footer(){
  return (
    <section className="section bg-c-light border-top footer">
        <div className="container">

          <div className="row">
          <div className="col-md-12 mb-5 text-center">

            <div className="underline mx-auto"></div>
       
            </div>
            <div className="col-md-4 ">
              <h6> Company Infomation </h6>
              <hr/>
              <p className='text-white'>
              The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website.

                Basically, this tool is used to create dummy content on the website when it’s new.
              </p>
            </div>
            <div className="col-md-4 ">
              <h6> Quick Links</h6>
              <hr/>
                 <div><Link to="/">Home</Link></div>
                 <div><Link to="/about">About </Link></div>
                 <div><Link to="/contact">Contact</Link></div>
                 <div><Link to="/home">Blog</Link></div>
            </div>
            <div className="col-md-4 ">
              <h6> Contact Information</h6>
            <hr/>
             <div > <p className="text-white ab-1"> ul studenka 15,Ligota Akademki, katowice,Poland</p></div>
             <div > <p className="text-white ab-1">+48511985785</p></div>
             <div > <p className="text-white ab-1"> 00393272077379</p></div>
             <div > <p className="text-white ab-1"> auguscudjoe94@gmail.com</p></div>
            
            </div>
          </div>
        </div>
        </section>

  );
};

export default Footer;
