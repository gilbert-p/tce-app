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
import React, { useEffect } from "react";
import firebase from "../../firebase.js";
import { Redirect } from "react-router";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import ApplicantsList from "./ApplicantsList.js";
import { AuthContext } from "../../FirebaseAuth";

class Applicants extends React.Component {
  constructor(props) {
    super(props);

    this.applicant_length = 0;
    this.count = 0;
    this.state = {
      number_of_applicants: 0,
      loggedIn: false,
    };
  }

  static contextType = AuthContext;

  componentWillMount() {
    //Authenticating Route
    let authUser = this.context;

    if (authUser.currentUser !== null) {
      this.setState({ loggedIn: true });
    }
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("applicants")
      .orderBy("dateApply", "desc")
      .get()
      .then((snapshot) => {
        this.setState({ number_of_applicants: snapshot.docs.length });
        const applicant = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
  }

  render() {
    return (
      <>
        {!this.state.loggedIn ? <Redirect to="/" /> : null}
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Applicants</h3>
                </CardHeader>

                <ApplicantsList />
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Applicants;
