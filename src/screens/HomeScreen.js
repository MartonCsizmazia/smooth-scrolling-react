import React from "react";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <>
      <section id="home" className="center-xy">
        <Link to="/shop">Click Here!!!</Link>
      </section>
      <section id="whats-new" className="center-xy">
        {" "}
        Whats New
      </section>
      <section id="rules-payment" className="center-xy">
        {" "}
        Rules and Payment
      </section>
      <section id="contact" className="center-xy">
        Contact Us
      </section>
    </>
  );
};

export default HomeScreen;
