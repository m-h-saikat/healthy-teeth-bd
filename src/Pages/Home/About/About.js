import React from "react";
import image from "../../Images/About.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="  About-Container" id="About">
      <div className=" mb-4 ">
        <div className="row d-flex">
          <div className="col-md-6 ">
            <img src={image} alt="" width="100%" />
          </div>
          <div className="col-md-6  p-5 my-auto mx-auto">
            <h1 className="text-danger mb-2">
              <b>
                
                WELCOME TO <br /> HEALTHY TEETH
              </b>
            </h1>
            <h4 className="p-4">
              Greetings. ‘HEALTHY TEETH’ aims at developing social awareness
              about oral hygiene, preventing dental diseases & ensuring ethical
              dental treatments. We are a RJSC registered organization working
              since 2012 & arranged a lot of Dental Public Health programs is
              both capital & remote areas of Bangladesh. We also regularly
              create & post social awareness videos & articles on social medias.
              On the other hand, we also arrange international conferences &
              hands-on workshops for Dental Surgeons to improve their technical
              skills for ensuring world class up-to-date dentistry in
              Bangladesh.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
