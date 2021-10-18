import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Images/Logo.png";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-container text-center">
                <img src={Logo} alt="" width="100" height="100" />
                <h1>HEALTHY TEETH</h1>

                <p className="mt-4 ">
                  <small>
                    These statements have not been evaluated by DENTIST Company.
                  </small>
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input text-center"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <button className="btn btn-primary">Subscribe</button>
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div>
                    <h5>
                      <FontAwesomeIcon icon={faPhoneAlt} />
                      +88 01961-264444
                    </h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> 230 Dhaka,
                      Bangladesh, 1236,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="p-2">
            <small>©HEALTHY TEETH. All rights reserved,saikat-2022</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
