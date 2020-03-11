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
import React from "react";

// reactstrap components
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

import { Link, Redirect } from "react-router-dom";
import firebase from "../../firebase.js";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setRedirect: false
    };
  }

  googleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        console.log("Successfully signed in");

        this.setState({ setRedirect: true });
      })
      .catch(console.log);
  };

  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
                {/* <Link to="/admin/tables"> */}
                {!this.state.setRedirect ? null : (
                  <Redirect to="/admin/tables" />
                )}
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href=""
                  onClick={this.googleLogin}>
                  <span className="btn-inner--icon">
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/google.svg")}
                    />
                  </span>
                  <span className="btn-inner--text">Google</span>
                </Button>
                {/* </Link> */}
              </div>
            </CardHeader>
          </Card>
          <Row className="mt-3"></Row>
        </Col>
      </>
    );
  }
}

export default Login;
