import React from "react";
import "../assets/scss/temple_culberson/Landing-Page.scss";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import HeaderImage from "./HeaderImage";
import landing_page_img from "../assets/img/landing_page_img.png";
import JumboSection from "./JumboSection";
import CompanyMission from "./CompanyMission";
import ApplySection from "./ApplySection";

export default function LandingPage() {
  return (
    <React.Fragment>
      <Navbar />
      <HeaderImage source={landing_page_img} />
      <JumboSection
        jumbo_title="Amazon Delivery Service Partner"
        jumbo_body="Temple Culberson Enterprises is a dedicated DLA3 Amazon Delivery
       Service Partner based out of the city of Commerce. Our routes are
       primarily centered around the neighboring areas of Los Angeles."
      />

      <JumboSection
        jumbo_title="Become a Member"
        jumbo_body="Join our team today! We are driven to provide excellent service for
        our community by ensuring that we deliver packages in a timely manner
        for our customers."
      />

      <CompanyMission />
      <ApplySection />
      <Footer />
    </React.Fragment>
  );
}
