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

const ModalExample = (props) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    dateApply,
    status,
  } = props.profile;

  const [modal, setModal] = useState(false);
  const [profile_status, setProfileStatus] = useState(status.profile);
  const [agreement_status, setAgreementStatus] = useState(
    status.arbitration_agreement
  );
  const [badge_status, setBadgeStatus] = useState(status.badge_photo);
  const [license_status, setLicenseStatus] = useState(status.drivers_license);
  const [onboardingVideo_status, setOnboardingVideoStatus] = useState(
    status.onboarding_videos
  );
  const [invitation_status, setInvitationStatus] = useState(
    status.accept_invitation
  );

  const toggle = () => setModal(!modal);

  //Need to update firebase based on values changed upon closing the modal
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
      .orderBy()
      .doc(String(email));

    applicant.delete();

    setModal(!modal);
  };

  return (
    <div>
      <Button color="info" onClick={toggle} style={btn_style}>
        View
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="bg-success">
        <ModalHeader toggle={toggle}>{`${firstName} ${lastName}`}</ModalHeader>
        <ModalBody>
          <h5>Email: {email}</h5>
          <h5>Phone: {phoneNumber}</h5>
          <h5>Applied: {dateApply}</h5>
          <h5>Applicant Status:</h5>
          <Table>
            <tbody>
              <thead>
                <tr>
                  <th>Task</th>
                </tr>
              </thead>
              <tr>
                <th>Profile</th>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                    checked={profile_status ? true : false}
                    onChange={() => {
                      let updated_status = !profile_status;
                      setProfileStatus(updated_status);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="customSwitch1"></label>
                </div>
              </tr>
              <tr>
                <th>Arbitration Agreement</th>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch2"
                    checked={agreement_status ? true : false}
                    onChange={() => {
                      let updated_status = !agreement_status;
                      setAgreementStatus(updated_status);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="customSwitch2"></label>
                </div>
              </tr>
              <tr>
                <th>Badge Photo</th>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch3"
                    checked={badge_status ? true : false}
                    onChange={() => {
                      let updated_status = !badge_status;
                      setBadgeStatus(updated_status);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="customSwitch3"></label>
                </div>
              </tr>
              <tr>
                <th>Driver's License</th>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch4"
                    checked={license_status ? true : false}
                    onChange={() => {
                      let updated_status = !license_status;
                      setLicenseStatus(updated_status);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="customSwitch4"></label>
                </div>
              </tr>
              <tr>
                <th>Onboarding Videos</th>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch5"
                    checked={onboardingVideo_status ? true : false}
                    onChange={() => {
                      let updated_status = !onboardingVideo_status;
                      setOnboardingVideoStatus(updated_status);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="customSwitch5"></label>
                </div>
              </tr>
              <tr>
                <th>Accept Invitation</th>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch6"
                    checked={invitation_status ? true : false}
                    onChange={() => {
                      let updated_status = !invitation_status;
                      setInvitationStatus(updated_status);
                    }}
                  />
                  <label
                    className="custom-control-label"
                    for="customSwitch6"></label>
                </div>
              </tr>
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <Button color="danger" onClick={deleteDoc}>
            Delete
          </Button>

          <Button color="primary" onClick={toggleUpdate}>
            Update
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
