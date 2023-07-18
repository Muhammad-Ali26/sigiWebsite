import React from "react";
import { FaAngleRight } from "react-icons/fa";


export default function DeticatedTeamData(props) {
  return (
    <section className="bg-cover bg-center bg-[#001235] bg-fixed w-full py-10 md:py-20">
      <div className="w-[90%] md:w-[80%] m-auto bg-cover bg-center bg-[#051941] rounded-3xl">
        <div className="px-4 py-8 flex flex-col justify-center items-center space-y-6">
          <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl lg:text-4xl text-white font-switzer font-semibold text-center">
              {props.titleOne}
            </h4>
            <h6 className="text-4xl lg:text-6xl text-sigiYellow font-switzer font-semibold text-center">
              {props.titleTwo}
            </h6>
            <p className="md:text-2xl text-white text-opacity-60 text-center max-w-[920px]">
              {props.para}
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-sigiYellow text-sm md:text-base font-switzer font-semibold">
              Find out more
            </p>
            <FaAngleRight className="text-sigiYellow" />
          </div>
          <div>
            <img
              src={props.imgSrc}
              alt="deticated-team"
              className="w-full h-[250px] md:h-[350px] lg:h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
