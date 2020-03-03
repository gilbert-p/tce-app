import React from "react";
import "../assets/scss/temple_culberson/Careers.scss";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import HeaderImage from "./HeaderImage";
import landing_page_img from "../assets/img/landing_page_img.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <HeaderImage source={landing_page_img} mb="false" />
      {/* <div
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
          <div className="icon col-1">
            <div id="icon" className="container">
              <i class="gg-file-document"></i>
            </div>
          </div>
          <div className="col-2" style={{ backgroundColor: "navy" }}>
            <h3 style={{ color: "white" }}>Delivery Driver</h3>
          </div>
          <div className="col-2" style={{ backgroundColor: "red" }}>
            <h3 style={{ color: "white" }}>DAX7 SouthGate</h3>
          </div>
          <h3 style={{ color: "white" }}>DAX7 SouthGate</h3>
          <div className="col-2">2/14/2020</div>
          <Button
            className="btn-neutral btn-icon"
            color="default"
            href="#pablo">
            <span className="btn-inner--icon">
              <img
                alt="..."
                src={require("assets/img/icons/common/google.svg")}
              />
            </span>
            <span className="btn-inner--text">Google</span>
          </Button>
        </div>
      </Link> */}
      <div className="table-responsive">
        <Link to="/apply" className="nav-link">
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col">Job Title</th>
                <th scope="col">Location</th>
                <th scope="col">Type</th>
                <th scope="col">Date Posted</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div className="d-inline-flex flex-row">
                    <div className="icon container">
                      <i class="gg-file-document"></i>
                    </div>
                    <div className="icon container">
                      <i class="gg-pen"></i>
                    </div>
                  </div>
                </th>
                <td>Delivery Driver</td>
                <td>DAX 7 South Gate</td>
                <td>Last Mile Delivery</td>
                <td>2/14/2020</td>
                <td>
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo">
                    <span className="btn-inner--text">Apply</span>
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Link>
      </div>

      <Footer />
    </>
  );
}
