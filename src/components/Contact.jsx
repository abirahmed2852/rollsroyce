import React from "react";
import Pagetransition from "../PageTransition/Pagetransition";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Pagetransition>
        {" "}
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>Contact page
      </Pagetransition>
    </div>
  );
}

export default Contact;
