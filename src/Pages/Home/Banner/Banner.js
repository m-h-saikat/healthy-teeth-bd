import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "../../Images/Slider/Slider-1.jpg";
import Slider2 from "../../Images/Slider/Slider-2.jpg";
import Slider3 from "../../Images/Slider/Slider-3.jpg";
const Banner = () => {
  return (
    <div id="Home">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={Slider1}
            alt="First slide"
            height="600"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            height="600"
            src={Slider2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            height="600"
            src={Slider3}
            alt="Third slide"
          />

          <Carousel.Caption>
        
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
