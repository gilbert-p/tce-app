import React from "react";
import "../assets/scss/temple_culberson/Team-Boxed.scss";
import Navbar from "./common/Navbar2";
import Footer from "./common/Footer";
import JumboSection from "./JumboSection";
import HeaderImage from "./HeaderImage";
import landing_page_img from "../assets/img/tce_team_pic_sm.png";

import ceo_img from "../assets/img/eric-culberson-profile-pic.png";
import test_img1 from "../assets/img/2.jpg";
import test_img2 from "../assets/img/1.jpg";

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <HeaderImage source={landing_page_img} />

      <div className="team-boxed">
        <div className="container">
          <JumboSection
            jumbo_title="The History of Temple Culberson Enterprises"
            jumbo_body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum architecto delectus esse deleniti eaque, deserunt modi, expedita corporis aliquid sequi dolorem eligendi porro magnam eos! Repudiandae, expedita tenetur! Ad facilis non soluta? Voluptatum facere aut, porro repellendus iure blanditiis placeat! Est optio dolores porro deleniti! Deserunt iste aspernatur veritatis officia!"
          />
          <div className="intro">
            <h2 className="text-center">Meet the Team</h2>
          </div>
          <div className="row people">
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <img className="rounded-circle" src={ceo_img} />
                <h3 className="name">Eric Culberson</h3>
                <p className="title">CEO</p>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.
                </p>
                <div className="social">
                  <a href="#">
                    <i className="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <img className="rounded-circle" src={test_img1} />
                <h3 className="name">Emily Clark</h3>
                <p className="title">Artist</p>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.
                </p>
                <div className="social">
                  <a href="#">
                    <i className="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <img className="rounded-circle" src={test_img2} />
                <h3 className="name">Carl Kent</h3>
                <p className="title">Stylist</p>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.
                </p>
                <div className="social">
                  <a href="#">
                    <i className="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
