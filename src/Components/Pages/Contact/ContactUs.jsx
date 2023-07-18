// @ts-nocheck
import React from "react";
import Navbar from "../Home/Navbar";
import { FaAngleRight } from "react-icons/fa";
import Footer from "../Home/Footer";
export default function ContactUs() {
  return (
    <section>
      <Navbar />
      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto pt-24 md:pt-32 lg:pt-40">
        <div className="lg:grid grid-cols-2 2xl:gap-40 relative space-y-6 lg:space-y-0">
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-sigiYellow font-switzer font-semibold uppercase">
              Get in Touch
            </h2>
            <h4 className="text-3xl md:text-5xl 2xl:text-7xl font-switzer font-medium">
              Let’s Talk
            </h4>
            <p className="text-lg md:text-2xl font-switzer font-normal">
              Tell us about you and your project to start the conversation! You
              can also send us an email at
              <span className="text-[#004AEA]"> info@sigitechnolgies.com </span>
              or call us at
              <span className="text-[#004AEA]"> +92 123 4567890</span>.
            </p>
          </div>

          <div className="bg-white p-8 shadow-2xl">
            <div>
              <h4 className="text-xl font-switzer font-normal text-center">
                Let's hear what you are looking for and we'll help you find the
                best solution!
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
                <button className="text-white bg-sigiYellow flex justify-center items-center gap-x-5 py-3 w-full rounded-sm border border-sigiYellow hover:bg-transparent hover:text-sigiYellow duration-200">
                  <div className="w-2 h-2 rounded-full bg-white shadow animate-ping"></div>
                  <span className="font-medium font-switzer md:text-xl">
                    Submit
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="-mt-10 md:-mt-20 lg:-mt-40">
          <img
            src="/images/contact-us/contact-us-hero.webp"
            alt="contact-us"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-8 pt-10 lg:pt-20">
          <h2 className="text-sigiYellow font-switzer font-semibold uppercase text-center">
            Working Globally With all kind Businesses
          </h2>
          <h4 className="text-3xl md:text-5xl 2xl:text-7xl font-switzer font-medium text-center">
            Find as at..
          </h4>
          <p className="text-lg md:text-2xl font-switzer font-normal text-center max-w-4xl m-auto">
            Well … on second thought … it’s not that we don’t like having
            guests… We do! We love and miss our beautiful workspaces and
            collaborating live and in-person with our peers and partners but
            let’s wait the visits out, just for a little bit longer.
          </p>
        </div>

        <div className="lg:grid grid-cols-2 gap-x-10 py-10 lg:py-20 space-y-6 lg:space-y-0">
          <div className="">
            <div className="bg-officeOne bg-center bg-cover h-[440px] flex justify-center items-center">
              <div className="">
                <h4 className="text-white text-4xl font-switzer font-medium">
                  Lahore
                </h4>
                <p className="text-white text-lg font-switzer font-medium text-center">
                  Pakistan
                </p>
              </div>
            </div>
            <div className="space-y-3 mt-4">
              <h4 className="text-formText text-xl md:text-2xl 2xl:text-4xl font-switzer font-medium">
                Lahore, Pakistan
              </h4>
              <h6 className="text-black text-xl md:text-2xl 2xl:text-4xl font-switzer font-medium">
                Main Office
              </h6>
              <div className="flex items-center gap-2">
                <p className="text-black text-sm md:text-base font-switzer">
                  Show on map
                </p>
                <FaAngleRight className="text-sigiYellow" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-officeTwo bg-center bg-cover h-[440px] flex justify-center items-center">
              <div className="">
                <h4 className="text-white text-4xl font-switzer font-medium">
                  London
                </h4>
                <p className="text-white text-lg font-switzer font-medium text-center">
                  United Kingdom
                </p>
              </div>
            </div>
            <div className="space-y-3 mt-4">
              <h4 className="text-formText text-xl md::text-2xl 2xl:text-4xl font-switzer font-medium">
                London, United Kingdom
              </h4>
              <h6 className="text-black text-xl md:text-2xl 2xl:text-4xl font-switzer font-medium">
                International Office
              </h6>
              <div className="flex items-center gap-2">
                <p className="text-black text-sm md:text-base font-switzer">
                  Show on map
                </p>
                <FaAngleRight className="text-sigiYellow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
