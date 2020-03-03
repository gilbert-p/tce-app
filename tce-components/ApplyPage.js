import React from "react";
import "../assets/scss/temple_culberson/Apply.scss";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import HeaderImage from "./HeaderImage";
import ApplyForm from "./ApplyForm";
import landing_page_img from "../assets/img/apply-page-img.png";

const ApplyPage = () => {
  return (
    <>
      <Navbar />
      <HeaderImage source={landing_page_img} />
      <div className="container">
        <div className="col-md-12 blog-main">
          <div className="blog-post">
            <h3 className="blog-post-title">What we look for</h3>
            <p id="values-overview" className="mx-5 mb-4 mt-3">
              Temple-Culberson Enterprises (TCE) is seeking individuals who are
              quick learners, motivated and team players to join our growing
              driver network. We offer a safe, comfortable van while using the
              latest technology to deliver Amazon packages. At TCE, we want all
              our employees to have fun while working hard & be successful in
              life not just work. We work as a team to make it happen, all day
              every day. Come join us on this exciting journey with TCE &
              Amazon.
            </p>
            <hr />

            <h3 className="blog-post-title">Job Title</h3>
            <h4 id="job-title" className="mx-5 my-3">
              Delivery Driver
            </h4>

            <h3 className="blog-post-title">Job Description</h3>
            <p className="mx-5">
              Currently, we are looking for delivery drivers to service a
              20-mile radius from the City of Commerce. An average day consists
              of 9 hours driving, 3- 4 days a week (Monday – Sunday). Dedicated
              shifts with same days off if desired. Must be comfortable driving
              high roof cargo vans (company provided vehicle). Full-time
              preferred, Part-time acceptable
            </p>
            <hr />
            <h3 className="blog-post-title">Location</h3>
            <p className="mx-5">City of South Gate</p>
            <hr />

            <h3 className="blog-post-title">Requirements</h3>
            <ul>
              <li>Minimum 21 years old with a valid Driver's License.</li>
              <li>Capable of operating a smartphone device like cell phone.</li>
              <li>Lift & carry packages, sometimes up to 50 lbs.</li>
              <li>
                Follow written & verbal instructions from Dispatcher to ensure
                packages are delivered safely & correctly.
              </li>
              <li>
                Provide feedback to dispatcher on any issues during your day.
              </li>
              <li>
                Complete route in the allotted time while being as safe and
                accurate as possible.
              </li>
            </ul>
            <hr />

            <h3 className="blog-post-title">Experience</h3>
            <ul className="mx-4">
              <li>Delivery Driver: 1 year (Preferred)</li>
            </ul>
            <hr />

            <h3 className="blog-post-title">Compensation and Scheduling</h3>
            <ul>
              <li>
                <strong>
                  Salary: $15/hr. plus monthly bonuses for
                  attendance/safety/on-time & successful deliveries.
                </strong>
              </li>
              <li>Bi-Weekly Pay, Paid Time off (PTO)</li>
              <li>Medical/Dental/401K after 30 days</li>
            </ul>
            <hr />
          </div>
        </div>
      </div>

      <ApplyForm />

      <Footer />
    </>
  );
};

export default ApplyPage;
