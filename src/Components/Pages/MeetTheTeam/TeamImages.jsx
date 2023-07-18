import React from "react";

export default function TeamImages(props) {
  return (
    <div>
      <div className={`${props.bg} md:w-full h-full`}>
        <img
          src={props.imgSrc}
          alt="team"
          className="w-full h-[160px] mx-auto object-contain"
        />
      </div>
    </div>
  );
}
