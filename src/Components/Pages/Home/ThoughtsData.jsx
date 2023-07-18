import React from "react";

export default function ThoughtsData(props) {
  return (
    <div
      className={`relative ${props.bgImg} bg-center bg-cover w-full h-[380px] before:absolute before:bg-thoughtsLinear before:w-full before:h-full before:top-0 before:left-0 flex flex-col justify-between`}
    >
      <h4 className="text-white text-4xl font-switzer font-medium relative p-5">
        {props.title}
      </h4>
      <p className="text-white text-2xl font-switzer font-medium relative p-5">
        {props.para}
      </p>
    </div>
  );
}
