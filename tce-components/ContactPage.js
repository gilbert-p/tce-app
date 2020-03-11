import React, { useState, useEffect } from "react";
import "../assets/scss/temple_culberson/Contact.scss";
import Navbar from "./common/Navbar2";
import Footer from "./common/Footer";
import HeaderImage from "./HeaderImage";
import GoogleMaps from "./Map";
import landing_page_img from "../assets/img/Photo by Ilya Pavlov on Unsplash.png";
import firebase from "../firebase.js";
import Button from "react-bootstrap/Button";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showState, setShowState] = useState();

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("contact-messages")
      .doc(email)
      .set({
        name,
        email,
        message
      })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        console.log("whoops");
      });

    // setShowState(true);
  }

  return (
    <>
      <Navbar />
      <HeaderImage source={landing_page_img} />
      <div id="contact-container" className="container mx-auto">
        <div className="row">
          <div id="contact-detail" className="col-lg-5">
            <h3 id="contact-title">GET IN TOUCH</h3>
            <p>
              We'd love to hear from you! Fill out the form and one of our team
              members will get in touch with you.
            </p>
          </div>
          <div id="form-container" className="col-lg-7 col-md-12 mb-3">
            <form onSubmit={onSubmit} id="contact-form">
              <div className="row">
                <div className="form-group col-lg-6">
                  <label for="inputName">Name</label>
                  <input
                    type="text"
                    id="inputName"
                    className="form-control"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={e => setName(e.currentTarget.value)}
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label for="inputName">Email</label>
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={e => setEmail(e.currentTarget.value)}
                  />
                </div>

                <div className="form-group col-12">
                  <label for="messageInput">Message</label>
                  <textarea
                    className="form-control"
                    id="messageInput"
                    rows="3"
                    required
                    value={message}
                    onChange={e =>
                      setMessage(e.currentTarget.value)
                    }></textarea>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="contact-submit"
                    type="submit"
                    className="cool-btn mt-3"
                    value="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <GoogleMaps />
      {/* <MessageModal setShowState={setShowState} /> */}
      <Footer />
    </>
  );
};

export default ContactPage;
