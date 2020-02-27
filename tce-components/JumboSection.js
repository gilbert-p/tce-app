import React from "react";

export default function JumboSection(props) {
  return (
    <div>
      <section className="jumbotron basic-jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">{props.jumbo_title}</h1>
          <p className="lead text-muted">{props.jumbo_body}</p>
        </div>
      </section>
    </div>
  );
}
