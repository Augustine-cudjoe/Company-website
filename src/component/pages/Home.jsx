import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import Vcm from "./inc/Vcm";
import sea from "../images/sea.png";
import Footer from "../inc/Footer";

function Home() {
  return (
    <div>
      <div>
        <Slider />

        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="main-heaning"> Our Company</h3>
                <div className="underline mx-auto"></div>
                <p>
                  It helps the designer plan where the content will sit. It
                  helps in creating drafts of the content on the pages of the
                  website. It originates from the Latin text but is seen as
                  gibberish. sometimes, the reader gets distracted while
                  creating or working on the website. That’s why this language
                  is important. This tool makes the work easier for the
                  webmaster.
                </p>
                <Link to="/about" className="btn btn-warning shadow">
                  {" "}
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our mission , vision and value */}
        <Vcm />
        {/*Our Services */}
        <section className="section border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5 text-center">
                <h3 className="main-heaning"> Service</h3>
                <div className="underline mx-auto"></div>
              </div>
              <div className="col-md-4 ">
                <div className="card shadow">
                  <img
                    src={sea}
                    className="w-100 border-button"
                    alt="service"
                  />
                  <div className="card-body">
                    <h6>Service 1</h6>
                    <div className="underline"></div>
                    <p>
                      The word Lorem Ipsum is derived from the Latin word which
                      means “pain itself”. It is a kind of a text filler tool
                      that is used by the webmaster on the website. Basically,
                      this tool is used to create dummy content on the website
                      when it’s new.
                    </p>
                    <Link to="/services" className="btn btn-link">
                    
                      read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card shadow">
                  <img
                    src={sea}
                    className="w-100 border-button"
                    alt="service"
                  />
                  <div className="card-body">
                    <h6>Service 1</h6>
                    <div className="underline"></div>
                    <p>
                      The word Lorem Ipsum is derived from the Latin word which
                      means “pain itself”. It is a kind of a text filler tool
                      that is used by the webmaster on the website. Basically,
                      this tool is used to create dummy content on the website
                      when it’s new.
                    </p>
                    <Link to="/services" className="btn btn-link">
                    
                      read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="card shadow">
                  <img
                    src={sea}
                    className="w-100 border-button"
                    alt="service"
                  />
                  <div className="card-body">
                    <h6>Service 1</h6>
                    <div className="underline"></div>
                    <p>
                      The word Lorem Ipsum is derived from the Latin word which
                      means “pain itself”. It is a kind of a text filler tool
                      that is used by the webmaster on the website. Basically,
                      this tool is used to create dummy content on the website
                      when it’s new.
                    </p>
                    <Link to="/services" className="btn btn-link">
                    
                      read more
                    </Link>
                   
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
