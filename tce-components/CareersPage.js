import React, { useState, useEffect } from "react";
import "../assets/scss/temple_culberson/Careers.scss";
import Navbar from "./common/Navbar2";
import Footer from "./common/Footer";
import HeaderImage from "./HeaderImage";
import landing_page_img from "../assets/img/landing_page_img_blnk.png";
import firebase from "../firebase.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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

function GetJobListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("job-posts")
      .get()
      .then(snapshot => {
        const job_listing = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setListings(job_listing);
      });
  }, []);

  return listings;
}

const JobRowListings = (title, location, type, date) => {
  return (
    <tr>
      <th scope="row">
        <Link
          to={{ pathname: "/apply", state: { job_type: type } }}
          className="nav-link">
          <Button
            className="btn-apply-list btn-icon"
            color="default"
            href="#pablo">
            <span className="btn-inner--text">Apply</span>
          </Button>
        </Link>
      </th>
      <td>{title}</td>
      <td>{location}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>
        <div className=" d-inline-flex flex-row mt-4">
          <div className="icon container">
            <i class="gg-file-document"></i>
          </div>
          <div className="icon container">
            <i class="gg-pen"></i>
          </div>
        </div>
      </td>
    </tr>
  );
};

const CareersPage = () => {
  let jobs = GetJobListings();

  console.log(jobs);

  return (
    <>
      <Navbar />
      <HeaderImage source={landing_page_img} mb="false" />

      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Job Title</th>
              <th scope="col">Location</th>
              <th scope="col">Type</th>
              <th scope="col">Date Posted</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {jobs.length > 0
              ? jobs.map(job => {
                  return JobRowListings(
                    job.title,
                    job.location,
                    job.type,
                    job.date
                  );
                })
              : null}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default CareersPage;
