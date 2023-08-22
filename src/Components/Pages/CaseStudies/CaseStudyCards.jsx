import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <h2
              className={`${props.textColor} text-xl font-switzer font-semibold uppercase text-start`}
            >
              {props.title}
            </h2>
            <p
              className={`${props.textColor} text-5xl font-switzer font-semibold text-start`}
            >
              {props.para}
            </p>
          </div>
          <div className="space-y-8">
            <ul className="flex gap-6">
              <li
                className={`${props.textColor} font-switzer border ${props.borderColor} rounded-3xl p-3`}
              >
                App Development
              </li>
              <li
                className={`${props.textColor} font-switzer border ${props.borderColor} rounded-3xl p-3`}
              >
                Flutter
              </li>
              <li
                className={`${props.textColor} font-switzer border ${props.borderColor} rounded-3xl p-3`}
              >
                Android App
              </li>
              <li
                className={`${props.textColor} font-switzer border ${props.borderColor} rounded-3xl p-3`}
              >
                Android App
              </li>
            </ul>
            <ul className="flex gap-6">
              <li
                className={`${props.textColor} font-switzer border ${props.borderColor} rounded-3xl p-3`}
              >
                UI UX Design
              </li>
              <li
                className={`${props.textColor} font-switzer border ${props.borderColor} rounded-3xl p-3`}
              >
                Android App
              </li>
              <li
                className={`${props.textColor} font-switzer border ${props.borderColor} rounded-3xl p-3`}
              >
                Android App
              </li>
            </ul>
          </div>

          <div>
            <Link
              to={props.link}
              className={`flex items-center gap-2 ${props.textColor} text-xl cursor-pointer animate-bounce`}
            >
              <h4 className="font-switzer font-semibold">View case study</h4>
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>

      <div className={`${props.order ? "order-1" : "order-2"}`}>
        <img src={props.imgSrc} alt="pps" className="h-[960px]" />
      </div>

      <div
        className={`absolute ${props.left} -translate-y-1/2 top-1/2 -translate-x-1/2`}
      >
        <img
          src={props.midImgSrc}
          alt="center-img"
          className={`${props.height} ${props.width} object-contain`}
        />
      </div>
    </div>
  );
}
