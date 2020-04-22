import React from "react";
import "../assets/scss/temple_culberson/SlideText.scss";
import { useSpring, animated } from "react-spring";

const SlideText = () => {
  const animatedProps = useSpring({
    from: { transform: "translateX(2em)", opacity: 0 },
    to: { transform: "translateX(0px)", opacity: 1 },
    delay: 1200,
    config: { duration: 1300 }
  });

  return (
    <animated.div style={animatedProps}>
      <div id="slide-text" className="d-flex flex-column">
        <h2 className="banner-text">Trust</h2>
        <h2 className="banner-text">Commitment</h2>
        <h2 className="banner-text">Excellence</h2>
      </div>
    </animated.div>
  );
};

export default SlideText;
