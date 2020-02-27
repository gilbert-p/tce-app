import React, { useEffect, useState } from "react";
import firebase from "../../firebase.js";
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
  UncontrolledTooltip
} from "reactstrap";

function GetApplicants() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("applicants")
      .get()
      .then(snapshot => {
        const applicant = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setApplicants(applicant);
      });
  }, []);

  return applicants;
}

const ApplicantsList = () => {
  const applicants = GetApplicants();

  return (
    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Position</th>
          <th scope="col">Date Applied</th>
          <th scope="col">Status</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <th scope="row">
            <h3>John Doe</h3>
          </th>
          <td>
            <h5>JohnDoe@email.com</h5>
          </td>
          <td>
            <h5>(123)-456-7890</h5>
          </td>
          <td>
            <h5>Last Mile Delivery</h5>
          </td>
          <td>
            <h5>1/01/2020</h5>
          </td>
          <td>
            <Badge color="" className="badge-dot mr-4">
              <i className="bg-danger" />
              Incomplete
            </Badge>
          </td>
        </tr> */}
        {applicants.map(person => (
          <tr>
            <td>
              <h5>{person.firstName + " " + person.lastName}</h5>
            </td>
            <td>
              <h5>{person.email}</h5>
            </td>
            <td>
              <h5>{person.phoneNumber}</h5>
            </td>
            <td>
              <h5>Last Mile Delivery</h5>
            </td>
            <td>
              <h5>{person.dateApply}</h5>
            </td>
            <td>
              <Badge color="" className="badge-dot mr-4">
                <i className="bg-warning" />
                pending
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ApplicantsList;
