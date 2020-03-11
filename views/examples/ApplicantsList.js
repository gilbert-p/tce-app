import React, { useEffect, useState } from "react";
import firebase from "../../firebase.js";
import ApplicantModal from "../../tce-components/common/MessageModal";
import { Badge, Table } from "reactstrap";
import classNames from "classnames";

const badge_dot = {
  width: "0.58rem",
  height: "0.58rem"
};

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

function CheckApplicantStatus(applicant) {
  const { status } = applicant;

  const useForceUpdate = () => useState()[1];

  let status_count = 0;
  let applicant_status = false;

  for (let status_item in status) {
    if (Boolean(status[status_item])) {
      status_count++;
    }
  }

  if (status_count >= 6) {
    console.log("Status Complete");
    applicant_status = true;
  }

  return applicant_status;
}

const ApplicantsList = props => {
  let applicants = GetApplicants();

  console.log("ApplicantList");

  return (
    <Table className="align-items-center table-flush table-striped" responsive>
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
      <tbody></tbody>
      <tbody>
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
              {Boolean(CheckApplicantStatus(person)) ? (
                <Badge color="" className="badge-dot mr-4">
                  <i style={badge_dot} className="bg-success" />
                  Complete
                </Badge>
              ) : (
                <Badge color="" className="badge-dot">
                  <i style={badge_dot} className="bg-danger" />
                  Incomplete
                </Badge>
              )}
              <ApplicantModal profile={person} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ApplicantsList;
