import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Service from "./Services/Service";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Team></Team>
    </div>
  );
};

export default Home;
