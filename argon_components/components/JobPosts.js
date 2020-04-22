import React, { useState, useEffect } from "react";
import firebase from "../../firebase.js";
import JobPostModal from "../../tce-components/common/JobPostModal";

function GetJobListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("job-posts")
      .get()
      .then((snapshot) => {
        const job_listing = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setListings(job_listing);
      });
  }, []);

  return listings;
}

const JobRowListings = (title, location, type, date) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{location}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td>
        <JobPostModal />
      </td>
    </tr>
  );
};

const JobPostings = () => {
  let jobs = GetJobListings();

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Job Title</th>
            <th scope="col">Location</th>
            <th scope="col">Type</th>
            <th scope="col">Date Posted</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0
            ? jobs.map((job) => {
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
  );
};

export default JobPostings;
