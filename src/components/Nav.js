import React, { Fragment } from "react";
import logo from "../assets/logo_sm.png";
import "../styles/nav.scss";

const Nav = () => {
  return (
    <Fragment>
      <nav id="tce-nav" className="navbar nav navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">
          <img id="logo" src={logo} alt="company-logo" className="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav-flex">
            <div className="tce-title">
              <h3>Temple Culberson Enterprises</h3>
            </div>
            <div className="nav-link-container">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Our Approach <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Company
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Newsletter
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Careers
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
