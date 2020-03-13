import React from "react";
import "../assets/scss/temple_culberson/HeaderImage.scss";
import SlideText from "./SlideText";
import { useSpring, animated } from "react-spring";

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
            className="header-image img-fluid mb-5"
            src={props.source}
            alt=""
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
