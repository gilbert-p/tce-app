import React, { useState, useEffect } from "react";
import firebase from "../firebase.js";

const ApplyForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    let strippedNumber = removeNonNumericCharacters(phoneNumber);

    let current_date = getDate();

    let status = {
      accept_invitation: false,
      arbitration_agreement: false,
      badge_photo: false,
      drivers_license: false,
      onboarding_videos: false,
      profile: false
    };

    firebase
      .firestore()
      .collection("applicants")
      .doc(email)
      .set({
        firstName,
        lastName,
        email,
        phoneNumber: strippedNumber,
        dateApply: current_date,
        status
      })
      .then(() => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
      })
      .catch(() => {
        console.log("whoops");
      });
  }
  return (
    <div id="apply-form" className="container my-5">
      <form onSubmit={onSubmit} id="apply-submit">
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label for="apply-firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="apply-firstName"
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.currentTarget.value)}
              required
            />
            <div className="invalid-feedback">Please enter a first name.</div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-12 mb-3">
            <label for="apply-lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="apply-lastName"
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.currentTarget.value)}
              required
            />
            <div className="invalid-feedback">Please enter a last name.</div>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-12 mb-3">
            <label for="apply-email">Email</label>
            <input
              type="email"
              className="form-control"
              id="apply-email"
              placeholder="email@example.com"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              required
            />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>

          <div className="col-md-12 mb-3">
            <label for="phone-number">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone-number"
              placeholder="(123) 456-7890"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.currentTarget.value)}
              required
            />
            <div className="invalid-feedback">Please enter a phone number</div>
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>

        <h4>
          Upload Cv <p className="text-muted">(optional)</p>
        </h4>
        <div className="custom-file mb-3">
          <input type="file" className="custom-file-input" id="resume-file" />
          <label className="custom-file-label" for="customFile">
            Choose file
          </label>
        </div>
        <input className="btn btn-primary" type="submit" value="submit" />
      </form>
    </div>
  );
};

const getDate = () => {
  const todayDate = new Date();
  //months start at 0
  let month = todayDate.getMonth() + 1;
  let day = todayDate.getUTCDate();
  let year = todayDate.getUTCFullYear();
  return `${month}/${day}/${year}`;
};

const removeNonNumericCharacters = string => {
  return string.replace(/\D/g, "");
};

export default ApplyForm;
