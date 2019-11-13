import React from "react";
import { Tween, Timeline } from "react-gsap";

const TimelineComponent = () => (
  <Timeline duration="2">
    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
    <Tween from={{ x: "-50px" }} to={{ x: "0px" }} />
  </Timeline>
);

export default TimelineComponent;
