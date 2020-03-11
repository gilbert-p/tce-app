import React from "react";
import "../../assets/scss/temple_culberson/Navbar.scss";
import nav_logo from "../../assets/img/tce_logo/TCE_LOGO.png";
import Dropdown from "react-bootstrap/Dropdown";
// import CompanyPage from "../CompanyPage.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/auth" className="nav-link">
        <img src={nav_logo} alt="tce_logo" />
      </NavLink>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarsExample03">
        <h3 id="title_name" className="mx-5">
          Temple Culberson Enterprises
        </h3>
        <ul className="">
          <li className="nav-item">
            <NavLink to="/tce" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/company" className="nav-link">
              Company
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/newsletter" className="nav-link">
              Newsletter
            </NavLink>
          </li>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Careers
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/careers">Last Mile Delivery</Link>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Relay Driver</Dropdown.Item>
              <Dropdown.Item href="#/action-3">All Jobs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
