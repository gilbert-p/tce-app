/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase.js";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../FirebaseAuth";

// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Button,
} from "reactstrap";

import user_logo from "../../assets/img/eric-culberson-profile-pic.png";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setRedirect: false,
    };

    this.Logout = this.Logout.bind(this);
  }

  Logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out!");
        this.setState({ setRedirect: true });
      })
      .catch((error) => {
        console.log("error occurred", error);
      });
  }

  render() {
    return (
      <>
        {this.state.setRedirect ? <Redirect to="/" /> : null}
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/">
              {this.props.brandText}
            </Link>

            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img alt="..." src={user_logo} />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        Eric Culberson
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <Button onClick={this.Logout}>Logout</Button>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
