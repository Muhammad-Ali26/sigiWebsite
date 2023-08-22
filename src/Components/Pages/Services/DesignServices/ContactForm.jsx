import React from "react";

export default function ContactForm() {
  return (
    <div className="bg-white p-8 drop-shadow-2xl">
      <div>
        <h4 className="text-xl font-switzer font-semibold">
          Let's hear what you are looking for and we'll help you find the best
          solution!
        </h4>

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
            <input
              type="text"
              className="pt-2 outline-none border-b-[2px] border-formText"
            />
          </div>
          <button className="text-white bg-[#004AEA] flex justify-center items-center gap-x-5 py-3 w-full rounded-sm border border-[#004AEA] hover:bg-transparent hover:text-[#004AEA] duration-200">
            <div className="w-2 h-2 rounded-full bg-white shadow animate-ping"></div>
            <span className="font-medium font-switzer md:text-xl">Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
}
