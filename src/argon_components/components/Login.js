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
import React, { useCallback, useState, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseApp from "../../firebase.js";
import { AuthContext } from "../../FirebaseAuth";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Label,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await firebaseApp.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [email, password]
  );
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    console.log(currentUser);
    return <Redirect to="/admin/applicants" />;
  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-0">
              <small>Sign in with your account</small>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-4">
            <Form onSubmit={handleLogin}>
              <FormGroup>
                <Label for="email">Email</Label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="email"
                    name="userEmail"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    placeholder="password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button
                  onClick={handleLogin}
                  className="my-4"
                  color="primary"
                  type="button">
                  Login
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default withRouter(Login);
