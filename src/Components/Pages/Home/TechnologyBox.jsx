import React from "react";
import { FaAngleRight } from "react-icons/fa";
import TextTransition, { presets } from "react-text-transition";

export default function TechnologyBox(props) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="flex gap-3 lg:gap-5 mb-4 md:mb-0">
      <div className="space-y-3 lg:space-y-4 border-2 border-white py-4 px-10">
        <h4 className="text-white  text-xl md:text-2xl lg:text-4xl font-switzer font-semibold ">
          <TextTransition springConfig={presets.slow}>
            {props.title[index % props.title.length]}
          </TextTransition>
        </h4>
        <h6 className="text-white text-sm md:text-base font-switzer">
          {props.para}
        </h6>
        <div className="flex items-center gap-2 animate-bounce">
          <p className="text-white text-sm md:text-base font-switzer font-semibold">
            Find out more
          </p>
          <FaAngleRight className="text-sigiYellow" />
        </div>
      </div>
    </div>
  );
}
