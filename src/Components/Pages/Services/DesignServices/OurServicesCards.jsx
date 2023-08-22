import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function OurServicesCards(props) {
  return (
    <div className="space-y-12  p-5 lg:p-10 border">
      <div className="space-y-4">
        <img
          src={props.imgSrc}
          alt="services-img"
          className="w-14 h-14 object-contain"
        />
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium text-black">
          {props.title}
        </h4>
      </div>

      <div className="space-y-4">
        <p className="text-[#00000099] font-switzer">
          {props.para}
        </p>

        <div className="flex items-center gap-2">
          <p className="text-black text-base font-switzer font-semibold">
            Find out more
          </p>
          <FaAngleRight className="text-sigiYellow text-base" />
        </div>
      </div>
    </div>
  );
}
