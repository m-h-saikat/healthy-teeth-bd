import React from 'react';
import image from '../../Images/About.jpg'
import './About.css'
const About = () => {
    return (
        <div className="  About-Container" id="About">
                  <div className=" mb-4 Home-Section">
        <div className="row d-flex">
          <div className="col-md-6 ">
            <img src={image} alt="" width="100%" />
          </div>
          <div className="col-md-6 container p-5 my-auto mx-auto">
            <h1 className="text-danger mb-5 ">
              <b>
                WELCOME TO <br /> HEALTHY TEETH
              </b>
            </h1>
            <h4>
            HEALTHY TEETH & Dental Council (BM&&DC) is a statutory body with the responsibility of establishing and maintaining high standards of medical education and recognition of medical qualifications in Bangladesh. It registers doctors to practice in Bangladesh, in order to protect and promote the health and safety of the public by ensuring proper standards in the practice of medicine.


            </h4>
          </div>
        </div>
      </div>
        </div>
    );
};

export default About;