import React, { useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import firebase from "../../firebase";
const handleLogout = () => {
  try {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("successfully signed out");
        return <Redirect to="/" />;
      });
  } catch (error) {
    console.log("An error has occurred while signing out");
  }
};
const Logout = () => {
  return <>{this.handleLogout}</>;
};

export default Logout;
