import React from "react";
import "../styles/company_mission.scss";
import mission_image from "../assets/company_mission_img.png";
import InfoSection from "./InfoSection";

const CompanyMission = () => {
  return (
    <div className="company-mission-container">
      <div className="container">
        <div className="row">
          <div className="da-container col-lg-8 col-md-12">
            <div className="mission-img-container">
              <img id="mission_img" src={mission_image} alt="" className="" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="info-section">
              <div className="container">
                <div className="row">
                  <div className="company-mission-block">
                    <div
                      id="info-title"
                      className="col-lg-8 col-md-auto col-sm">
                      <h2>Amazon Delivery Service Partner</h2>
                    </div>
                    <div
                      id="info-body"
                      className="col-lg-12 col-md-auto col-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ex perferendis inventore, assumenda ea blanditiis placeat
                      sequi eos corporis velit minima, aspernatur aliquid sunt
                      dicta natus ipsum eius atque quas nihil!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMission;
