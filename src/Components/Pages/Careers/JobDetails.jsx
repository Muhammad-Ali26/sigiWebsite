import React from "react";
import Footer from "../Home/Footer";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../Home/Navbar";
import { AiOutlineDollar } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function JobDetails() {
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
        <div className="flex gap-2 md:gap-5 items-center">
          <h4 className="text-sigiYellow text-2xl lg:text-4xl font-switzer font-semibold">
            Open Jobs
          </h4>
          <FaAngleRight className="text-sigiYellow text-xl" />
          <h4 className="text-sigiYellow text-2xl lg:text-4xl font-switzer font-semibold">
            Job Details
          </h4>
        </div>

        <div className="border-2 border-gray-200 p-5 md:p-6 space-y-5 md:space-y-6 my-5 md:my-10 ">
          <h4 className="text-2xl lg:text-4xl font-switzer font-semibold">
            Job information:
          </h4>
          <div className="space-y-5 lg:space-y-10 ">
            <div className="flex gap-4 items-center">
              <BsBriefcase className="text-2xl" />
              <h4 className="text-lg md:text-xl lg:text-3xl font-switzer font-medium">
                Senior Flutter Developer
              </h4>
            </div>

            <div className="space-y-5 lg:space-y-10">
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
        </div>

        <div className="border-2 border-gray-200 p-5 md:p-10">
          <h4 className="text-2xl lg:text-4xl font-switzer font-semibold">
            Job Description:
          </h4>

          <div className="mt-5">
            <div className="md:max-w-[700px] space-y-5 md:space-y-10">
              <p className="text-sm md:text-base font-switzer">
                We are looking for a Front-end developer to join our Frontend
                Department. If you’re interested in creating a user-friendly
                environment by writing code and moving forward in your career,
                then this job is for you. At our company, you will be working
                with the latest technology, you will have the chance to advance
                and grow your career.
              </p>

              <div>
                <h4 className="text-lg md:text-xl lg:text-2xl font-switzer font-semibold">
                  Responsibilities:
                </h4>
                <ul className="list-disc mt-5 px-4 space-y-2">
                  <li className="text-sm md:text-base  font-switzer ">
                    Use markup languages like HTML to create user-friendly web
                    pages
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Maintain and improve website
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Optimize applications for maximum speed
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Design mobile-based features
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Collaborate with back-end developers and web designers to
                    improve the usability
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Stay up-to-date on emerging technologies
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Help back-end developers with coding and troubleshooting
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg md:text-xl lg:text-2xl font-switzer font-semibold">
                  Requirements:
                </h4>
                <ul className="list-disc mt-5 px-4 space-y-2">
                  <li className="text-sm md:text-base  font-switzer ">
                    Proven work experience as a Front-end Engineer
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    3+ years of experience in Front-end Engineering
                  </li>
                  <li className="text-sm md:text-base font-switzer ">
                    Hands-on experience with markup languages
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Experience with HTML, CSS, SCSS, JavaScript
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Experience with responsive web pages using media queries
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Experience with Bootstrap
                  </li>
                  <li className="font-switzer text-sm md:text-base">
                    Any experience with Angular/React will be a plus
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Familiarity with browser testing and debugging
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Understanding of the entire web development process (design,
                    development, and deployment)
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Understanding of layout aesthetics
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Knowledge of SEO principles
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Must have knowledge of Git, (branching, merging, pull
                    requests, rebasing, etc)
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    BSc degree in Computer Science or relevant field
                  </li>
                  <li className="text-sm md:text-base  font-switzer ">
                    Must have good communication (English)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-end mt-10">
          <Link to="/job_application">
            <button className="bg-[#004AEA] border border-[#004AEA] lg:text-2xl text-center text-white px-10 py-3 hover:bg-white hover:text-[#004AEA] duration-200">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
}
