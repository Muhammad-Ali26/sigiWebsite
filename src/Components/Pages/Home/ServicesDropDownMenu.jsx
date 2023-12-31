// @ts-nocheck
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { sData } from "./ServicesDropDownData";
import { Link } from "react-router-dom";

export default function ServicesDropDownMenu() {
  return (
    <div className="dropdown-menu w-[65%] bg-transparent m-auto bg-white absolute top-52 left-72 rounded-md p-4 ">
      <div className="md:grid md:grid-cols-2">
        {sData?.map((data, index) => (
          <div className="flex gap-5  hover:bg-[#F4F4F4] p-4">
            <div className="">
              <h3 className="text-sigiYellow text-3xl font-switzer font-medium">
                0{index + 1}
              </h3>
            </div>
            <div className="space-y-3 lg:space-y-6">
              <h4 className="text-black text-xl font-switzer font-semibold md:max-w-[250px] lg:max-w-[350px]">
                {data?.title}
              </h4>
              <h6 className="text-paraText text-base font-switzer max-w-[500px] font-medium">
                {data?.para}
              </h6>
              <Link to={data?.link} className="">
                <div className="flex items-center gap-2 mt-4 animate-bounce">
                  <p className="text-black text-base font-switzer font-semibold">
                    Find out more
                  </p>
                  <FaAngleRight className="text-sigiYellow text-base" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
