import React from "react";
import "../styles/info_section.scss";

const InfoSection = () => {
  return (
    <div className="p-2 info-section">
      <div className="d-flex flex-column">
        <div id="info-title" className="p-2">
          <h2>Amazon Delivery Service Partner</h2>
        </div>
        <div id="info-body" className="p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          perferendis inventore, assumenda ea blanditiis placeat sequi eos
          corporis velit minima, aspernatur aliquid sunt dicta natus ipsum eius
          atque quas nihil!
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
