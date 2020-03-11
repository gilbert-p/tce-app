import React from "react";
import "../assets/scss/temple_culberson/ApplyButton.scss";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function ApplySection() {
  return (
    <section className="jumbotron basic-jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Apply Today!</h1>
        <p className="lead text-muted">
          Head over to our careers page to begin your search for the right job
          for you.
        </p>
        {/* <a href="./careers.html">
          <div id="CTA" className="btn btn-primary">
            Click here to join now!
          </div>
        </a> */}
        <Link to="/careers">
          <Button className="btn-neutral btn-icon" color="default">
            <span className="btn-inner--text">Get Started!</span>
            <i class="gg-enter"></i>
          </Button>
        </Link>
      </div>
    </section>
  );
}
