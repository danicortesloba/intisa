import React from "react";
import SellingList from "./SellingList";
import { Link } from "react-router-dom";
import ExclusiveAgnts from "./ExclusiveAgnts";
import SingleAgent from "./SingleAgent";


const About = () => {
  return (
    <div className="cta-banner bgc-f7 mx-auto maxw1600 pt70 pb140 pb30-md bdrs12 position-relative mx20-lg px20-sm">
      <div className="container">
        <div className="row align-items-start align-items-xl-center">
          <div className="col-md-10 col-lg-7 col-xl-6">
            <div
              className="position-relative mb35 mb0-sm"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <ExclusiveAgnts />
              <SingleAgent />
              <div className="img-box-10 position-relative d-none d-xl-block">
                <img
                 
                  className="img-1 spin-right"
                  src="/images/about/element-3.png"
                  alt="shape"
                />
                <img
                 
                  className="img-2 bounce-x contain"
                  src="/images/about/element-5.png"
                  alt="shape"
                />
                <img
                  
                  className="img-3 bounce-y contain"
                  src="/images/about/element-6.png"
                  alt="shape"
                />
                <img
                 
                  className="img-4 bounce-y"
                  src="/images/about/element-7.png"
                  alt="shape"
                />
                <img
                 
                  className="img-5 spin-right"
                  src="/images/about/element-8.png"
                  alt="shape"
                />
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-md-8 col-lg-5 col-xl-5 offset-xl-1">
            <div
              className="about-box-1 pe-4 mt100 mt0-lg mb30-lg"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2 className="title mb20">
                Let’s find the right selling option for you
              </h2>
              <p className="text mb55 mb30-md fz14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                <br className="d-none d-xl-block" /> eiusmod tempor incididunt.
              </p>
              <SellingList />
              <Link to="#" className="ud-btn btn-dark">
                See More
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
