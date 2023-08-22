import React from "react";

export default function WhySigiData(props) {
  return (
    <div className="py-5 md:py-10 2xl:py-12">
      <div className="md:grid grid-cols-2 gap-x-5 lg:gap-x-14 2xl:gap-x-44">
        <div
          className={`md:flex flex gap-6 mt-4 md:mt-0 ${
            props.order ? "order-2" : "order-1"
          }`}
        >
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
          </div>
        </div>
        <div className={`mt-4 md:mt-0 ${props.order ? "order-1" : "order-2"}`}>
          <img src={props.imgSrc} alt="about-imgs" />
        </div>
      </div>
    </div>
  );
}
