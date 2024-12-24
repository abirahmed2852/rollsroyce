import React from "react";
import Pagetransition from "../PageTransition/Pagetransition";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Pagetransition>
        {" "}
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>About page
      </Pagetransition>
    </div>
  );
}

export default About;
