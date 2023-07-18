import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function JobsCard() {
  return (
    <div className="lg:flex justify-between border-2 border-gray-200 p-5 md:p-6 space-y-6 lg:space-y-0">
      <div className="space-y-7 lg:space-y-14">
        <div className="flex gap-4 items-center">
          <BsBriefcase className="text-2xl" />
          <h4 className="text-lg md:text-xl lg:text-3xl font-switzer font-medium">
            Senior Flutter Developer
          </h4>
        </div>

        <div className="md:flex gap-5 space-y-2 md:space-y-0">
          <button className="bg-[#F4F4F4] px-4 py-1 font-switzer font-medium w-full">
            Full Time
          </button>
          <button className="bg-[#F4F4F4] px-4 py-1 font-switzer font-medium w-full">
            Development
          </button>
          <button className="bg-[#F4F4F4] px-4 py-1 font-switzer font-medium w-full">
            Lahore
          </button>
        </div>
      </div>

      <div className="space-y-7 lg:space-y-14">
        <div className="flex items-center gap-3">
          <AiOutlineDollar className="text-[#004AEA] text-xl" />
          <h4 className="text-lg md:text-xl font-switzer font-medium">
            240k-280k{" "}
            <span className="text-gray-400 text-sm md:text-lg font-normal">
              {" "}
              /month
            </span>
          </h4>
        </div>
        <div className="text-center">
          <Link to="/job_details">
            <button className="bg-[#004AEA] border border-[#004AEA] lg:text-2xl text-center text-white py-3 hover:bg-white hover:text-[#004AEA] duration-200 w-full">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
