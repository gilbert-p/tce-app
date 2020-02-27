import React from "react";
import "../assets/scss/temple_culberson/Careers.scss";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import HeaderImage from "./HeaderImage";
import landing_page_img from "../assets/img/landing_page_img.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <HeaderImage source={landing_page_img} />
      <div
        id="header-info"
        className="d-flex p-2 bd-highlight justify-content-between text-center mb-3">
        <div className="col-3">Job Title</div>
        <div className="col-3">Location</div>
        <div className="col-3">Type</div>
        <div className="col-3">Date Posted</div>
      </div>
      <Link to="/apply" className="nav-link">
        <div
          id="dsp-posting"
          className="d-flex p-2 bd-highlight justify-content-between text-center border-bottom border-gray pb-3">
          <div className="col-3">Delivery Driver</div>
          <div className="col-3">DLA3 Commerce</div>
          <div className="col-3">Last Mile Delivery</div>
          <div className="col-3">2/14/2020</div>
        </div>
      </Link>
      <Footer />
    </>
  );
}
