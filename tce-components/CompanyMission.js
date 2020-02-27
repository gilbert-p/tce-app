import React from "react";
import company_mission_img from "../assets/img/Photo by VanveenJF on Unsplash.png";

export default function CompanyMission() {
  return (
    <section className="jumbotron basic-jumbotron text-center bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5">
            <img
              src={company_mission_img}
              alt=""
              className="img-fluid"
              sytle="max-width: 50%"
            />
          </div>
          <div className="col-lg-8">
            <h1 className="jumbotron-heading text-white mb-4 text-left">
              Company Mission
            </h1>
            <p className="lead text-white text-left">
              Temple-Culberson Enterprises (TCE) is seeking individuals who are
              quick learners, motivated and team players to join our growing
              driver network. We offer a safe, comfortable van while using the
              latest technology to deliver Amazon packages. At TCE, we want all
              our employees to have fun while working hard & be successful in
              life not just work. We work as a team to make it happen, all day
              every day. Come join us on this exciting journey with TCE &
              Amazon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
