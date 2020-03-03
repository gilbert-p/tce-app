import React from "react";
import "../assets/scss/temple_culberson/HeaderImage.scss";
import { useSpring, animated } from "react-spring";

export default function HeaderImage(props) {
  const animatedProps = useSpring({
    from: { transform: "translateY(1em)", opacity: 0.2 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { duration: 1300 }
  });

  if (props.mb) {
    return (
      <animated.div style={animatedProps}>
        <img className="img-fluid" src={props.source} alt="" />;
      </animated.div>
    );
  } else {
    return (
      <animated.div style={animatedProps}>
        <img className="img-fluid mb-5" src={props.source} alt="" />
      </animated.div>
    );
  }
}
