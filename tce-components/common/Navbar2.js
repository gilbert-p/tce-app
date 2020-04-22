import React, { useState } from "react";
import nav_logo from "../../assets/img/tce_logo/TCE_LOGO@sm.png";
import "../../assets/scss/temple_culberson/Navbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from "react-router-dom";

const Navbar2 = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="dark" dark expand="lg">
        <NavLink to="/" className="nav-link">
          <img src={nav_logo} alt="tce_logo" />
        </NavLink>
        <NavbarBrand>Temple Culberson Enterprises</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <div id="nav-items" className="d-flex">
              <NavItem>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/company" className="nav-link">
                  Company
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/newsletter" className="nav-link">
                  Newsletter
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/careers" className="nav-link">
                  Careers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navbar2;
