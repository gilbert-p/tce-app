import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "../../assets/scss/temple_culberson/Custom_Checkbox.scss";
import firebase from "../../firebase.js";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

const btn_style = {
  padding: "0.3rem 1.7rem",
};

const JobPostModal = (props) => {
  const toggle = () => setModal(!modal);
  const [modal, setModal] = useState(false);

  //Need to update firebase based on values changed upon closing the modal
  /*
  const toggleUpdate = () => {
    let updatedStatus = {
      profile: profile_status,
      arbitration_agreement: agreement_status,
      badge_photo: badge_status,
      drivers_license: license_status,
      onboarding_videos: onboardingVideo_status,
      accept_invitation: invitation_status,
    };

    let applicant = firebase
      .firestore()
      .collection("applicants")
      .doc(String(email));

    applicant.update({ status: updatedStatus });
    setModal(!modal);
  };

  const deleteDoc = () => {
    let applicant = firebase
      .firestore()
      .collection("applicants")
      .doc(String(email));

    applicant.delete();

    setModal(!modal);
  };
  */

  return (
    <div>
      <Button color="info" onClick={toggle} style={btn_style}>
        View
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="bg-success">
        <ModalHeader toggle={toggle}>Modal Header</ModalHeader>
        <ModalBody>
          <h5>Email:</h5>
          <h5>Phone:</h5>
          <h5>Applied</h5>
          <h5>Applicant Status:</h5>
          <Table>
            <tbody>
              <thead>
                <tr>
                  <th>Task</th>
                </tr>
              </thead>
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <Button color="danger">Delete</Button>

          <Button color="primary">Update</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default JobPostModal;
