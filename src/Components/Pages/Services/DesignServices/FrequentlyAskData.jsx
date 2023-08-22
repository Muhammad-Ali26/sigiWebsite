import React from "react";

export default function FrequentlyAskData(props) {
  return (
    <div className="flex gap-4">
      <div>
        <img
          src={props.imgSrc}
          alt="faq-img"
          className="w-52 border border-solid p-2"
        />
      </div>
      <div className="space-y-3 lg:space-y-6">
        <h4 className="text-xl md:text-2xl font-switzer font-semibold text-black">
          {props.title}
        </h4>
        <p className="md:text-xl font-switzer text-[#00000099]">
          {props.para}
        </p>
      </div>
    </div>
  );
}
