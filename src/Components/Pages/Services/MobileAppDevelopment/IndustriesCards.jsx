import React from "react";

export default function IndustriesCards(props) {
  return (
    <div className="bg-white py-4 px-6 rounded-lg">
      <div className="space-y-4">
        <img
          src={props.imgSrc}
          alt="industries-img"
          className=""
        />
        <h4 className="text-xl md:text-2xl lg:text-3xl font-switzer text-black font-medium text-center max-w-[220px] m-auto">
          {props.title}
        </h4>
      </div>
    </div>
  );
}
