import React from "react";
import Timeline from "./Timeline";
import TimelineTwo from "./TimelineTwo";

export default function DesignProcess() {
  return (
    <div className="bg-texture bg-center bg-cover  bg-[#001235] py-10 lg:py-20">
      <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-switzer font-semibold text-center">
        Our Development Process
      </h2>

      <Timeline />
      <TimelineTwo />
    </div>
  );
}
