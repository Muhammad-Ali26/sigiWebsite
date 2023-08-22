import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HeroSectionData(props) {
  return (
    <div
      className={`bg-headerTexture bg-center bg-cover ${props.bgColor} w-full pt-24 pb-12 md:pt-32 md:pb-14 lg:pt-40 lg:pb-20`}
    >
      <section className="w-[90%] md:w-[85%] 2xl:w-[75%] m-auto">
        <div className="">
          <div className="lg:grid grid-cols-3 lg:gap-10 space-y-10 lg:space-y-0">
            <div className="space-y-6 md:space-y-14 2xl:space-y-20 col-span-2">
              <div className="">
                <h2 className="text-lg md:text-2xl text-white opacity-60 font-normal font-switzer">
                  Featured project
                </h2>
              </div>
              <div className="space-y-6">
                <h1
                  className={`text-2xl md:text-4xl 2xl:text-6xl ${props.color} font-semibold font-switzer`}
                >
                  {props.title}
                </h1>
                <p className="text-xl md:text-4xl 2xl:text-6xl text-white font-switzer font-normal max-w-[300px] md:max-w-[600px] lg:max-w-[800px]">
                  {props.para}
                </p>
              </div>

              <Link
                to="/case_studies"
                className={`flex gap-3 items-center ${props.viewColor} md:text-2xl animate-bounce`}
              >
                <BsArrowDownCircle />
                <p className="mb-0">View more projects</p>
              </Link>
            </div>

            <div>
              <img
                src={props.imgSrc}
                alt="header-img"
                className="w-full h-[380px] md:h-[550px] object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8 lg:mt-0 2xl:mt-16">
            <p className="text-xl md:text-2xl lg:text-4xl text-white text-center font-switzer font-light max-w-[850px] m-auto">
              Sigi Technologies: your partner in custom software solutions,
              tailored to perfection. We combine vision and expertise to bring
              your ideas to life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
