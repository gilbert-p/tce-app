import React from "react";
import "../../assets/scss/temple_culberson/Footer-Dark.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li>
                  <Link to="/careers">Last Mile Delivery</Link>
                </li>
                <li>
                  <Link to="/careers">Relay Delivery</Link>
                </li>
                {/* <li>
                  <Link to="/">Coming Soon...</Link>
                </li> */}
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="/company">Company</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/auth/login">Login</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Temple Culberson Enterprises LLC</h3>
              <h2 id="t-c-e">Trust, Commitment, Excellence</h2>
            </div>
            {/* <div className="col item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div> */}
          </div>
          <p className="copyright">Temple Culberson Enterprises LLC © 2020</p>
        </div>
      </footer>
    </div>
  );
}
