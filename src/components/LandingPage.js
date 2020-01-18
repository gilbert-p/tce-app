import React from "react";
import "../styles/landing_page.scss";
import landing_img from "../assets/landing_page_img.png";
import InfoSection from "./InfoSection";
import CompanyMission from "./CompanyMission";
import Apply from "./Apply";

const LandingPage = () => {
  return (
    <div className="d-flex flex-column align-items-center text">
      <div className="p-2 landing-img-container">
        <img id="landing-img" src={landing_img} alt="" className="" />
      </div>
      <InfoSection />
      <InfoSection />
      <CompanyMission />
      <Apply />
    </div>
  );
};

export default LandingPage;
