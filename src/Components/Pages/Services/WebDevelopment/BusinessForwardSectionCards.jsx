import React from "react";

export default function BusinessForwardSectionCards(props) {
  return (
    <div className="space-y-6">
      <div className={`${props.bgColor}  w-[120px] h-[120px] p-5 rounded-full`}>
        <img
          src={props.imgSrc}
          alt="business-forward-img"
          className="w-[80px] h-[80px] object-contain"
        />
      </div>
      <h4 className="text-xl md:text-2xl lg:text-4xl font-switzer font-medium text-black max-w-xs">
        {props.title}
      </h4>
      <p className="font-switzer font-normal">{props.para}</p>
    </div>
  );
}
