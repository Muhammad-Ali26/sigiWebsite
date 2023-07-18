import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function RecentWorkData(props) {
  return (
    <div
      className={`relative overflow-hidden z-50 ${props.bgImg} bg-cover bg-no-repeat bg-center w-full h-full before:absolute ${props.beforeBg} before:w-full before:h-full before:top-0 before:left-0`}
    >
      <div className="relative flex flex-col justify-center items-center py-14 md:pt-20 space-y-8">
        <div className="">
          <img
            src={props.imgSrc}
            alt="deticated-team"
            className="w-full h-[250px] md:h-[500px] object-contain"
          />
          {props.circle === true ? (
            <>
              <div className="absolute top-1/2 -translate-y-1/2 -right-20 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full bg-[#E13743]"></div>
              <div className="absolute -bottom-40 -left-10 h-[150px] w-[150px] md:w-[200px] md:h-[200px] rounded-full bg-[#FBB811]"></div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="text-center space-y-4 md:space-y-8">
          <h4
            className={`${props.textColor} font-switzer font-semibold uppercase`}
          >
            {props.title}
          </h4>

          <p className={`${props.textColor} font-switzer text-lg md:text-2xl`}>
            {props.para}
          </p>

          <div
            className={`flex items-center justify-center gap-2 ${props.caseStudyColor} cursor-pointer`}
          >
            <h4 className="text-sm md:text-base font-switzer font-semibold">
              View case study
            </h4>
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
}
