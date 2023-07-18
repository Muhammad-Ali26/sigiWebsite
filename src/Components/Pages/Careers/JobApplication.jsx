import React from "react";
import Footer from "../Home/Footer";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../Home/Navbar";
import { Link } from "react-router-dom";

export default function JobApplication() {
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
        <div className="md:flex gap-2 md:gap-5 items-center">
          <div className="flex items-center">
            <h4 className="text-sigiYellow text-2xl lg:text-4xl font-switzer font-semibold">
              Open Jobs
            </h4>
            <FaAngleRight className="text-sigiYellow text-xl" />
          </div>
          <div className="flex items-center">
            <h4 className="text-sigiYellow text-2xl lg:text-4xl font-switzer font-semibold">
              Job Details
            </h4>
            <FaAngleRight className="text-sigiYellow text-xl" />
          </div>
          <h4 className="text-sigiYellow text-2xl lg:text-4xl font-switzer font-semibold">
            Job Application
          </h4>
        </div>

        <div className="border-2 border-gray-200 p-5 md:p-10 space-y-4 my-5 md:my-10 ">
          <div className="space-y-2">
            <h4 className="text-2xl lg:text-4xl font-switzer">
              Autofill Application:
            </h4>
            <p className="text-paraText font-switzer">Upload your resume/Cv:</p>
          </div>

          <div>
            <h4 className="text-2xl lg:text-4xl font-switzer ">
              Basic Information:
            </h4>

            <div className="md:grid grid-cols-2 gap-7 py-4 space-y-3 md:space-y-0">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="firstname"
                  className="text-paraText text-sm font-switzer"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="lastname"
                  className="text-paraText text-sm font-switzer"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-paraText text-sm font-switzer"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="phone"
                  className="text-paraText text-sm font-switzer"
                >
                  Phone*
                </label>
                <input
                  type="number"
                  id="phone"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl lg:text-4xl font-switzer ">
              Address Information:
            </h4>

            <div className="md:grid grid-cols-2 gap-7 py-4 space-y-3 md:space-y-0">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="street"
                  className="text-paraText text-sm font-switzer"
                >
                  Street*
                </label>
                <input
                  type="text"
                  id="street"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="zip"
                  className="text-paraText text-sm font-switzer"
                >
                  Zip*
                </label>
                <input
                  type="number"
                  id="zip"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="city"
                  className="text-paraText text-sm font-switzer"
                >
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="country"
                  className="text-paraText text-sm font-switzer"
                >
                  Country*
                </label>
                <input
                  type="text"
                  id="country"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl lg:text-4xl font-switzer ">
              Professional Details:
            </h4>

            <div className="md:grid grid-cols-2 gap-7 py-4">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="skills"
                  className="text-paraText text-sm font-switzer"
                >
                  Skill Set*
                </label>
                <input
                  type="text"
                  id="skills"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-2xl lg:text-4xl font-switzer ">
              Social Networks:
            </h4>

            <div className="md:grid grid-cols-2 gap-7 py-4  space-y-3 md:space-y-0">
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="linkedin"
                  className="text-paraText text-sm font-switzer"
                >
                  Linkedln*
                </label>
                <input
                  type="text"
                  id="linkedin"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="facebook"
                  className="text-paraText text-sm font-switzer"
                >
                  Facebook*
                </label>
                <input
                  type="text"
                  id="facebook"
                  className="outline-none border border-[#0F102C] rounded-md p-3"
                />
              </div>
            </div>
          </div>

          <div className="md:flex justify-center gap-5 space-y-3 md:space-y-0 lg:w-[50%] m-auto">
            <Link to="/job_details">
              <button className="border border-black text-2xl text-center text-black px-10 py-3 hover:bg-black hover:text-white duration-200 w-full">
                Cancel
              </button>
            </Link>
            <Link to="">
              <button className="bg-[#004AEA] border border-[#004AEA] text-2xl text-center text-white px-10 py-3 hover:bg-white hover:text-[#004AEA] duration-200 w-full">
                Submit Application
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
