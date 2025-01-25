import React from "react";

import Contact from "../components/Contact/Contact";

import GetStarted from "../components/GetStarted/GetStarted";

import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <Residencies />
      <Value />
      <Contact />
    </div>
  );
};

export default Website;