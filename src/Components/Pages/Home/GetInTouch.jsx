// @ts-nocheck
import React from "react";

export default function GetInTouch() {
  return (
    <section className="relative py-10 lg:py-20">
      <div className="w-[90%] lg:w-[50%] m-auto">
        <div className="">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-switzer font-medium text-center">
            Get in touch with us!
          </h2>
          <p className="md:text-xl lg:text-2xl font-switzer mt-8 text-center">
            Let's hear what you are looking for and we'll help you find the best
            solution!
          </p>
          <form className="pt-5 md:pt-8 pb-4 space-y-5 md:space-y-10">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-formText text-base font-switzer font-medium uppercase"
              >
                Name<span className="text-[#DA2127]">*</span>
              </label>
              <input
                type="text"
                className="pt-2 outline-none border-b-[2px] border-formText"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="company"
                className="text-formText text-base font-switzer font-medium uppercase"
              >
                Company<span className="text-[#DA2127]">*</span>
              </label>
              <input
                type="text"
                className="pt-2 outline-none border-b-[2px] border-formText"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-formText text-base font-switzer font-medium uppercase"
              >
                Email<span className="text-[#DA2127]">*</span>
              </label>
              <input
                type="email"
                className="pt-2 outline-none border-b-[2px] border-formText"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-formText text-base font-switzer font-medium uppercase"
              >
                Your Message<span className="text-[#DA2127]">*</span>
              </label>
              <textarea
                name="message"
                cols="30"
                rows="5"
                className="mt-10 p-3 outline-none border-2 border-formText"
              ></textarea>
            </div>
            <button className="text-white bg-sigiYellow flex justify-center items-center gap-x-5 py-3 px-12 rounded-sm border border-sigiYellow hover:bg-transparent hover:text-sigiYellow duration-200">
              <div className="w-2 h-2 rounded-full bg-white shadow animate-ping"></div>
              <span className="font-medium font-switzer md:text-xl">
                Send message
              </span>
            </button>
          </form>
        </div>
      </div>

      <div>
        <img
          src="/images/getin-touch-vector.webp"
          alt="getin-touch"
          className="w-[550px] absolute top-0 left-0 lg:block hidden"
        />
        <img
          src="/images/getin-touch-vector-two.webp"
          alt="getin-touch"
          className="w-[400px] absolute top-0 right-0 lg:block hidden"
        />
      </div>
    </section>
  );
}
