import React from "react";
import { useSpring, animated } from "react-spring";

export default function HeaderImage(props) {
  const animatedProps = useSpring({
    from: { transform: "translateY(1em)", opacity: 0.2 },
    to: { transform: "translateY(0px)", opacity: 1 },
    config: { duration: 1300 }
  });
  return (
    <animated.div style={animatedProps}>
      <img className="img-fluid mb-5" src={props.source} alt="" />;
    </animated.div>
  );
}
