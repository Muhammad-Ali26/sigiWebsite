import React from "react";

export default function TeamCards(props) {
  return (
    <div className="flex gap-6 mb-6">
      <h4 className="text-sigiYellow text-2xl md:text-4xl font-medium font-switzer">
        {props.keys}
      </h4>
      <div className="space-y-6">
        <h6 className="text-white text-2xl md:text-4xl font-medium font-switzer max-w-[250px]">
          {props.title}
        </h6>
        <p className="text-iconColor font-switzer text-base">{props.para}</p>
      </div>
    </div>
  );
}
