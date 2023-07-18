import React from "react";
import Navbar from "../Home/Navbar";
import JobsCard from "./JobsCard";
import Footer from "../Home/Footer";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";

export default function Jobs() {
  return (
    <section>
      <Navbar />

      <div className="bg-[#F4F4F4] pt-24 md:pt-32 lg:pt-40">
        <div className="md:grid grid-cols-2 gap-10 lg:gap-20 w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto">
          <div className="space-y-4 lg:space-y-6">
            <h4 className="text-sigiYellow md:text-xl font-switzer font-semibold uppercase">
              Working at Sigi Technologies
            </h4>
            <h6 className="text-3xl lg:text-5xl font-switzer font-medium">
              Empower professional journey
            </h6>
            <p className="lg:text-xl 2xl:text-2xl font-switzer mt-2 lg:mt-0 max-w-[570px]">
              Join our thriving community of software pioneers crafting
              exceptional mobile and web app experiences for the world's most
              innovative companies.
            </p>
          </div>
          <div className="flex justify-end">
            <img
              src="/images/careers-two/image 1.webp"
              alt="journey"
              className="w-[480px] mt-6 md:mt-0"
            />
          </div>
        </div>
      </div>
      <div className="py-10 lg:py-20  w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto">
        <div className="md:flex justify-between items-center space-y-4 md:space-y-0">
          <h4 className="text-sigiYellow text-3xl lg:text-4xl font-switzer font-semibold">
            20 <span className="font-normal">Open Jobs</span>
          </h4>

          <div className="md:flex items-center gap-2 lg:gap-5 space-y-4 md:space-y-0">
            <div className="relative">
              <input
                type="search"
                name="search"
                placeholder="Search Jobs"
                className="outline-none border-2 border-gray-200 text-paraText px-4 py-2 w-full"
              />
              <FiSearch className="absolute top-3 right-4 text-xl" />
            </div>
            <div className="">
              <button className="flex items-center justify-between md:gap-6 px-4 py-2 border-2 border-gray-200 text-formText font-switzer font-medium w-full">
                All Divisions
                <span>
                  <FaAngleDown className="text-formText" />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="py-10 space-y-6">
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
          <JobsCard />
        </div>
      </div>

      <Footer />
    </section>
  );
}
