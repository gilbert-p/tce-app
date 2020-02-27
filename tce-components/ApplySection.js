import React from "react";

export default function ApplySection() {
  return (
    <section className="jumbotron basic-jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">Apply Today!</h1>
        <p className="lead text-muted">
          Head over to our careers page to begin your search for the right job
          for you.
        </p>
        <a href="./careers.html">
          <div id="CTA" className="btn btn-primary">
            Click here to join now!
          </div>
        </a>
      </div>
    </section>
  );
}
