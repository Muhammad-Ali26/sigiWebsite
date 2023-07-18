// @ts-nocheck
import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Benefites from "./Benefites";
import Swiper from "./Slider";
import { Link } from "react-router-dom";
import GetInTouch from "../Home/GetInTouch";

export default function Careers() {
  return (
    <section>
      <Navbar />

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto pt-24 md:pt-32 lg:pt-40">
        <div className="">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-switzer font-medium">
            Empower professional journey
          </h2>
        </div>

        <div className="lg:grid grid-cols-2 gap-x-10 py-10 ">
          <div>
            <div className="w-[100%] h-[2px] bg-black"></div>
            <h4 className="text-lg text-sigiYellow font-switzer font-semibold uppercase mt-2">
              Achieve.Learn.Evolve
            </h4>
          </div>

          <div className="space-y-10">
            <p className="lg:text-xl 2xl:text-2xl font-switzer mt-2 lg:mt-0">
              Join our thriving community of software pioneers crafting
              exceptional mobile and web app experiences for the world's most
              innovative companies.
            </p>
            <div className="mt-6">
              <Link
                to="/jobs"
                className="font-switzer font-medium lg:text-xl bg-sigiYellow text-white px-10 py-3 border-2 border-sigiYellow hover:text-sigiYellow hover:bg-white duration-150"
              >
                Check out our latest job openings
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-9 md:grid-cols-5 sm:grid-cols-3 gap-3 lg:my-10 sm:w-full w-[90%] mx-auto">
        <div className="lg:col-span-2 md:row-span-3">
          <img
            src="/images/careers/image 1.webp"
            alt="careers"
            className="sm:h-full h-60 w-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 md:row-span-2">
          <img
            src="/images/careers/image 2.webp"
            alt="careers"
            className="sm:h-52 h-60 w-full object-cover"
          />
        </div>
        <div className="md:row-span-2">
          <img
            src="/images/careers/image 3.webp"
            alt="careers"
            className="sm:h-52 h-60 w-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 md:row-span-3">
          <img
            src="/images/careers/image 4.webp"
            alt="careers"
            className="sm:h-full h-60 w-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 md:row-span-2">
          <img
            src="/images/careers/image 5.webp"
            alt="careers"
            className="sm:h-52 h-60 w-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 md:row-span-2 md:col-start-1">
          <img
            src="/images/careers/image 6.webp"
            alt="careers"
            className="sm:h-52 h-60 w-full object-cover"
          />
        </div>
        <div className="lg:col-span-3 md:col-span-2 md:row-span-3 md:row-start-3 lg:col-start-3 md:col-start-2">
          <img
            src="/images/careers/image 7.webp"
            alt="careers"
            className="sm:h-full h-60 w-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 md:row-span-2">
          <img
            src="/images/careers/image 8.webp"
            alt="careers"
            className="sm:h-52 h-60 w-full object-cover"
          />
        </div>
        <div className="lg:col-span-2 md:row-span-3 md:row-start-3 lg:col-start-8 md:col-start-5">
          <img
            src="/images/careers/image 9.webp"
            alt="careers"
            className="sm:h-full h-60 w-full object-cover"
          />
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto">
        <div className="pt-10 pb-10 lg:pb-20">
          <div className="flex flex-col justify-center items-center gap-5 text-center">
            <h4 className="text-sigiYellow md:text-xl font-switzer font-semibold uppercase">
              Working at Sigi Technologies
            </h4>
            <h6 className="text-3xl lg:text-5xl font-switzer font-medium">
              Freedom to innovate at every level
            </h6>
            <p className="lg:text-xl 2xl:text-2xl font-switzer text-center">
              Our people are at the heart of what we do, and every role is
              critical in delivering the world-class products and services that
              we are known for. Bring your ingenuity and determination to make
              an impact, and we will push beyond the boundaries of payments and
              banking together.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 bg-[#F4F4F4]">
        <div className="w-[90%] lg:w-[85%] m-auto">
          <div>
            <h4 className="text-3xl lg:text-5xl font-switzer font-medium">
              Employee testimonials
            </h4>
            <p className="lg:text-xl 2xl:text-2xl font-switzer mt-2">
              Hear why people love Sigi Technologies
            </p>
          </div>

          <div className="mt-10 space-y-4 md:space-y-0">
            <Swiper />
          </div>
        </div>
      </div>

      <div className="py-0 md:py-10">
        <div className="w-[90%] lg:w-[85%] m-auto">
          <div className="lg:grid grid-cols-2 gap-x-10 pt-10 md:pt-0">
            <div>
              <div className="w-[100%] h-[2px] bg-black"></div>
              <h4 className="text-lg text-sigiYellow font-switzer font-semibold uppercase mt-2">
                Our values
              </h4>
            </div>

            <div>
              <p className="lg:text-xl 2xl:text-4xl font-switzer mt-2 lg:mt-0 font-medium max-w-[700px]">
                Sigi’s culture is based on a set of shared values that drive our
                decisions and purpose
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto pb-5 md:pb-10 2xl:py-10">
        <div className="md:grid grid-cols-3">
          <div className="flex flex-col items-center p-5 lg:p-10 text-center md:border-b-2 md:border-r-2 border-formText space-y-2">
            <img
              src="/images/careers/integrity 1.webp"
              alt="values"
              className="w-[80px] h-[80px]"
            />
            <h4 className="text-2xl font-switzer font-semibold">Integrity</h4>
            <p className="font-switzer">
              We are committed to the highest ethical standards.
            </p>
          </div>
          <div className="flex flex-col items-center p-5 lg:p-10 text-center md:border-b-2 md:border-r-2 border-formText space-y-2">
            <img
              src="/images/careers/innovation 1.webp"
              alt="values"
              className="w-[80px] h-[80px]"
            />
            <h4 className="text-2xl font-switzer font-semibold">Innovation</h4>
            <p className="font-switzer">
              We question the status quo and look at challenges in new ways. Our
              curiosity drives creativity, new ideas and innovation.
            </p>
          </div>
          <div className="flex flex-col items-center p-5 lg:p-10 text-center md:border-b-2 border-formText space-y-2">
            <img
              src="/images/careers/excellence 1.webp"
              alt="values"
              className="w-[80px] h-[80px]"
            />
            <h4 className="text-2xl font-switzer font-semibold">Excellence</h4>
            <p className="font-switzer">
              We challenge ourselves to do our best work and commit to continual
              improvement and excellence.
            </p>
          </div>
          <div className="flex flex-col items-center p-5 lg:p-10 text-center md:border-r-2 border-formText space-y-2">
            <img
              src="/images/careers/fun.webp"
              alt="values"
              className="w-[80px] h-[80px]"
            />
            <h4 className="text-2xl font-switzer font-semibold">Have fun</h4>
            <p className="font-switzer">
              We believe and promote a collaborative work environment as the
              best work is done when everyone works together.
            </p>
          </div>
          <div className="flex flex-col items-center p-5 lg:p-10 text-center md:border-r-2 border-formText space-y-2">
            <img
              src="/images/careers/collaboration 1.webp"
              alt="values"
              className="w-[80px] h-[80px]"
            />
            <h4 className="text-2xl font-switzer font-semibold">Collaborate</h4>
            <p className="font-switzer">
              We question the status quo and look at challenges in new ways. Our
              curiosity drives creativity, new ideas and innovation.
            </p>
          </div>
          <div className="flex flex-col items-center p-5 lg:p-10 text-center  space-y-2">
            <img
              src="/images/careers/community 1.webp"
              alt="values"
              className="w-[80px] h-[80px]"
            />
            <h4 className="text-2xl font-switzer font-semibold">Community</h4>
            <p className="font-switzer">
              We challenge ourselves to do our best work and commit to continual
              improvement and excellence.
            </p>
          </div>
        </div>
      </div>

      <div className="py-7 md:py-10 lg:py-14 bg-[#F4F4F4]">
        <div className="flex flex-col justify-center items-center gap-5 text-center 2xl:max-w-[47%] m-auto">
          <h4 className="text-sigiYellow md:text-xl font-switzer font-semibold uppercase">
            Competitive Benefits & Perks
          </h4>
          <h6 className="text-3xl lg:text-5xl font-switzer font-medium">
            Committed to supporting the health and wealth of our employees
          </h6>
          <p className="lg:text-xl 2xl:text-2xl font-switzer text-center">
            Sigi Technologies provides market competitive, employee programs and
            benefits that strive to attract and retain top talent. We offer
            tailored benefit programs, to meet the specific market driven needs
            of employees, of our offices around the world.
          </p>
        </div>

        <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto py-5 lg:py-10">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 space-y-4 md:space-y-0">
            <Benefites />
            <Benefites />
            <Benefites />
            <Benefites />
            <Benefites />
            <Benefites />
            <Benefites />
            <Benefites />
          </div>
        </div>
        {/* 
        <div className="">
          <div className="py-0 md:py-5 flex flex-col justify-center items-center space-y-5">
            <h4 className="text-2xl 2xl:text-4xl font-switzer font-medium">
              Join the team
            </h4>
            <p className="text-center lg:text-xl font-switzer text-paraText">
              We would love to hear from you! <br /> Contact us now and we will
              answer you today
            </p>
            <button className="font-switzer font-medium lg:text-xl bg-sigiYellow text-white px-10 py-3 border-2 border-sigiYellow hover:text-sigiYellow hover:bg-white duration-150">
              See opportunities
            </button>
          </div>
        </div> */}
      </div>
      <div>
        <GetInTouch />
      </div>
      <Footer />
    </section>
  );
}
