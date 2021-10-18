import React from "react";
import contactImg from "../Images/Contact/ContactBanner.jpg";
import faq from "../Images/Contact/AskFrequent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
const Contact = () => {
  return (
    <div className=" ">
      <div>
        <img src={contactImg} alt="" className="img-fluid w-100" />
      </div>

      {/* Contact Information Start    */}

      <div className="row row-cols-1 row-cols-md-4  container mx-auto mb-5  mt-5 justify-content-center">
        <div className="card  h-60 shadow p-3  me-5  contact border border-light rounded">
          <h4>
            Email Here <hr />
            <FontAwesomeIcon icon={faEnvelope} /> saikat@gmail.com
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4>
            Location Here <hr />
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Dhanmondi , Dhaka-1630
          </h4>
        </div>
        <div className="card h-60 shadow p-3  me-5 contact border border-light rounded">
          <h4>
            Call Here <hr />
            <FontAwesomeIcon icon={faPhoneAlt} /> +880196-12644444
          </h4>
        </div>
      </div>

      {/* Contact Information End    */}

      {/*FAQ Start    */}

      <div className="container">
        <h2 className="my-5 text-center text-danger">
          {" "}
          <strong>Frequently Asked Questions</strong>{" "}
        </h2>
        <div className="container d-lg-flex">
          <div className="mb-3 col-md-6">
            <img src={faq} width="100%" height="90%" alt="" />
          </div>

          <div className="my-auto col-md-6 ms-4 ">
            <div className="accordion" id="accordionExample">
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Does a rinse or mouthwash help?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Mouthwashes for cavity protection, sensitivity, and fresh
                      breath may help when you use them with regular brushing
                      and flossing -- but not instead of daily cleanings. Your
                      dentist can recommend the best type for you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What are early signs of dental trouble?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Visit a dentist if you have any of these issues or see
                      your child having trouble chewing or complaining of
                      soreness:
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Do teeth need fluoride?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Fluoride helps make teeth strong and prevents decay. The
                      American Academy of Pediatrics, the American Dental
                      Association (ADA), and the CDC all agree that kids should
                      use fluoride toothpaste for brushing, taking care not to
                      swallow it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3 accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What's the best way to whiten my teeth?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Stores sell many whitening products, and you can get
                      take-home gels and trays from your dentist, but neither is
                      as strong as procedures done in a dental office
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*FAQ End    */}
    </div>
  );
};

export default Contact;
