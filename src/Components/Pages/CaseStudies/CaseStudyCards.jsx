import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function CaseStudyCards(props) {
  return (
    <div className="grid grid-cols-2 h-[960px] relative">
      <div
        className={`${props.color} flex flex-col justify-center ${
          props.order ? "order-2" : "order-1"
        }`}
      >
        <div className="w-[58%] m-auto space-y-16">
          <div className="space-y-8">
            <h2 className="text-white text-xl font-switzer font-semibold uppercase text-start">
              {props.title}
            </h2>
            <p className="text-white text-5xl font-switzer font-semibold text-start li">
              {props.para}
            </p>
          </div>
          <div className="space-y-8">
            <ul className="flex gap-6">
              <li className="text-white font-switzer border border-white rounded-3xl p-3">
                App Development
              </li>
              <li className="text-white font-switzer border border-white rounded-3xl p-3">
                Flutter
              </li>
              <li className="text-white font-switzer border border-white rounded-3xl p-3">
                Android App
              </li>
              <li className="text-white font-switzer border border-white rounded-3xl p-3">
                Android App
              </li>
            </ul>
            <ul className="flex gap-6">
              <li className="text-white font-switzer border border-white rounded-3xl p-3">
                UI UX Design
              </li>
              <li className="text-white font-switzer border border-white rounded-3xl p-3">
                Android App
              </li>
              <li className="text-white font-switzer border border-white rounded-3xl p-3">
                Android App
              </li>
            </ul>
          </div>

          <div
            className={`flex items-center gap-2 text-white text-xl cursor-pointer`}
          >
            <h4 className="font-switzer font-semibold">View case study</h4>
            <FaAngleRight />
          </div>
        </div>
      </div>

      <div className={`${props.order ? "order-1" : "order-2" }`}>
        <img src={props.imgSrc} alt="pps" className="h-[960px]" />
      </div>

      <div className={`absolute ${props.left} -translate-y-1/2 top-1/2 -translate-x-1/2`}>
        <img
          src={props.midImgSrc}
          alt=""
          className="h-[700px] w-full object-contain" 
        />
      </div>
    </div>
  );
}
