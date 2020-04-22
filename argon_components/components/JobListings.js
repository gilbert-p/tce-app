import React, { useEffect } from "react";
import firebase from "../../firebase.js";
import { AuthContext } from "../../FirebaseAuth";
import { Redirect } from "react-router";
import JobPosts from "argon_components/components/JobPosts";
import JobPostModal from "../../tce-components/common/JobPostModal";

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

class JobListings extends React.Component {
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
                  <h3 className="mb-0">TCE Careers</h3>
                  <div className="btn btn-primary">Add Job</div>
                </CardHeader>

                <JobPosts />
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default JobListings;
