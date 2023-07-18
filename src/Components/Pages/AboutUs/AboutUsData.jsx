import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function AboutUsData(props) {
  return (
    <div className="pt-10 2xl:pt-16">
      <div className="md:grid grid-cols-2 gap-x-5 lg:gap-x-14 2xl:gap-x-44">
        <img src={props.imgSrc} alt="about-imgs" />
        <div className="md:flex gap-6 mt-4 md:mt-0">
          <h4 className="text-sigiYellow text-2xl lg:text-3xl 2xl:text-4xl font-switzer font-medium mb-2 md:mb-0">
            {props.keys}
          </h4>
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-black text-xl md:text-2xl 2xl:text-4xl font-switzer font-medium">
              {props.title}
            </h4>
            <h6 className="text-paraText lg:text-xl font-switzer">
              {props.para}
            </h6>

            <div className="flex items-center gap-2">
              <p className="text-black text-sm md:text-base font-switzer font-semibold">
                {props.btn}
              </p>
              <FaAngleRight className="text-sigiYellow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
