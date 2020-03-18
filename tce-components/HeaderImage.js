import React from "react";
import "../assets/scss/temple_culberson/HeaderImage.scss";
import SlideText from "./SlideText";
import { useSpring, animated } from "react-spring";
import smallImgTest from "../assets/img/landing_page_img_blnk.png";
import otherImg from "../assets/img/Photo by Aaron Burden on Unsplash.png";

export default function HeaderImage(props) {
  const animatedProps = useSpring({
    from: { transform: "translateY(1em)", opacity: 0.2 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { duration: 1300 }
  });

  switch (props.page) {
    case "home":
      return (
        <animated.div style={animatedProps}>
          <SlideText />
          <img
            className="header-image  mb-5"
            src={smallImgTest}
            srcset={`${otherImg} 2000w,${smallImgTest} 1000w`}
            sizes="(min-width: 960px) 960px, 100vw"
            alt="van fleet"
          />
        </animated.div>
      );
    default:
      return (
        <animated.div style={animatedProps}>
          <img className="img-fluid mb-5" src={props.source} alt="" />
        </animated.div>
      );
  }
}
