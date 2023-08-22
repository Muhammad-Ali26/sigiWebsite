import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-gray-800 relative z-40 before:content[''] before:absolute before:w-full before:h-full before:bg-texture before:bg-center before:bg-cover ">
      <div className="md:grid grid-cols-3 lg:grid-cols-5 border-b border-gray-600 relative">
        <div className="space-y-4 lg:border-r border-gray-600 py-3 md:py-5 lg:py-10  2xl:py-14  px-5 md:px-10 2xl:px-20">
          <h4 className="text-white text-opacity-40 font-switzer uppercase">
            Company
          </h4>
          <ul className="space-y-4">
            <li className="text-white font-switzer font-medium text-sm lg:text-base">
              <Link to="/about_us">About us</Link>
            </li>
            <li className="text-white font-switzer font-medium text-sm lg:text-base">
              <Link to="/why_choose_us">Why Sigi Tech</Link>
            </li>
            <li className="text-white font-switzer font-medium text-sm lg:text-base">
              <Link to="/team">Meet the Team</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4 lg:border-r border-gray-600 py-3 md:py-5 lg:py-10  2xl:py-14  px-5 md:px-10  2xl:px-20 col-span-2">
          <div>
            <h4 className="text-white text-opacity-40 font-switzer uppercase">
              Services
            </h4>
          </div>
          <div className="md:flex gap-10 lg:gap-20 space-y-4 md:space-y-0">
            <ul className="space-y-4">
              <li className="text-white font-switzer font-medium text-sm lg:text-base">
                <Link to="">Dedicated Development Team</Link>
              </li>
              <li className="text-white font-switzer font-medium text-sm lg:text-base">
                <Link to="/ui_ux_design_services">
                  Custom Software Development
                </Link>
              </li>
              <li className="text-white font-switzer font-medium text-sm lg:text-base">
                <Link to="/mobile_app_services">Mobile App Development</Link>
              </li>
            </ul>

            <ul className="space-y-4">
              <li className="text-white font-switzer font-medium text-sm lg:text-base">
                <Link to="/web_development_services">
                  Front End Development
                </Link>
              </li>
              <li className="text-white font-switzer font-medium text-sm lg:text-base">
                <Link to="">POS Development</Link>
              </li>
              <li className="text-white font-switzer font-medium text-sm lg:text-base">
                <Link to="">ERP Development</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4 lg:border-r border-gray-600 py-3 md:py-5 lg:py-10 2xl:py-14  px-5 md:px-10  2xl:px-20">
          <h4 className="text-white text-opacity-40 font-switzer uppercase">
            Success Stories
          </h4>
          <ul className="space-y-4">
            <li className="text-white font-switzer font-medium text-sm lg:text-base">
              <Link to="/case_studies">Case Studies</Link>
            </li>
            <li className="text-white font-switzer font-medium text-sm lg:text-base">
              <Link to="">Testimonials</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4  border-gray-600 py-3 md:py-5 lg:py-10  2xl:py-14 px-5 md:px-10 2xl:px-20 md:col-span-2 lg:col-span-1">
          <h4 className="text-white text-opacity-40 font-switzer uppercase">
            Main Office
          </h4>
          <ul className="space-y-4">
            <li className="text-white font-switzer font-medium text-sm lg:text-base">
              Sher Ali Road, Kiberia Town, <br /> Raiwind Road Lahore
            </li>
          </ul>
          <Link
            to="/contact_us"
            className="text-white bg-sigiYellow flex justify-center items-center gap-x-5 py-2 px-6 rounded-sm border border-sigiYellow hover:bg-transparent hover:text-sigiYellow duration-200"
          >
            <div className="w-2 h-2 rounded-full bg-white shadow animate-ping"></div>
            <span className="font-medium font-switzer md:text-xl">
              Get in touch
            </span>
          </Link>
        </div>
      </div>

      <div className="py-3 md:py-10 relative">
        <div className="md:flex justify-between items-center w-[90%] lg:w-[80%] 2xl:w-[68%] mx-auto space-y-4 md:space-y-0">
          <div className="flex gap-5 justify-center">
            <Link
              to="/blogs"
              className="text-white font-switzer font-medium text-sm lg:text-base"
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className="text-white font-switzer font-medium text-sm lg:text-base"
            >
              Careers
            </Link>
          </div>

          <div>
            <p className="text-white text-center font-switzer font-medium text-xs tracking-wider">
              ©2020-2023 Sigi Technologies. All rights reserved.{" "}
              <span className="underline cursor-pointer">Privacy policy.</span>{" "}
            </p>
          </div>

          <div>
            <ul className="flex space-x-4 justify-center">
              <Link to="https://www.facebook.com">
                <FaFacebookF className="text-gray-400 text-xl cursor-pointer" />
              </Link>
              <Link to="https://twitter.com">
                <FaTwitter className="text-gray-400 text-xl cursor-pointer" />
              </Link>
              <Link to="https://instagram.com">
                <AiFillInstagram className="text-gray-400 text-xl cursor-pointer" />
              </Link>
              <Link to="https://youtube.com">
                <FaYoutube className="text-gray-400 text-xl cursor-pointer" />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
