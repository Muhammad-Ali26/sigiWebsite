import React from "react";
import Navbar from "../../Home/Navbar";
import Footer from "../../Home/Footer";
import Slider from "../../Careers/Slider";
import TimelineOne from "./TimelineOne";
import TimelineTwo from "./TimelineTwo";

export default function CaseStudyPps() {
  return (
    <section className="relative">
      <div className="w-[2px] h-[300px] bg-gray-400 border border-black z-10 fixed hidden lg:block lg:left-1/2 -translate-x-1/2"></div>
      <div className="border border-gray-400 w-[20px] h-[20px] bg-black z-10 fixed hidden lg:block top-72 rounded-full lg:left-1/2 -translate-x-1/2"></div>
      <div className="bg-[#F9F9FF] relative lg:h-[980px] z-50">
        <Navbar />

        <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto pt-24 md:pt-32 lg:pt-40">
          <div className="space-y-4 md:space-y-14">
            <div className="space-y-3">
              <h4 className="text-2xl md:text-4xl lg:text-5xl font-switzer font-medium md:text-center">
                Streamlining Operations with DBS Code System
              </h4>
              <p className="md:text-center  md:text-xl lg:text-2xl font-switzer">
                In this case study, we showcase our collaboration with PPS
                Logistic, a leading courier delivery company in Panama, and how
                we revolutionized their address allocation system using our
                cutting-edge DBS Code System.
              </p>
            </div>

            <div className="flex justify-center gap-2 md:gap-10 lg:gap-20">
              <img
                src="images/case-study-pps/banner-one.webp"
                alt=""
                className="object-cover h-[200px] md:h-[400px] lg:h-[500px] mt-14 lg:mt-28"
              />
              <img
                src="images/case-study-pps/banner-two.webp"
                alt=""
                className="object-cover  h-[200px] md:h-[400px] lg:h-[500px]"
              />
              <img
                src="images/case-study-pps/banner-three.webp"
                alt=""
                className="object-cover  h-[200px] md:h-[400px] lg:h-[500px] mt-14 lg:mt-28"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto  py-10 lg:py-20 bg-white relative z-50">
        <div className="space-y-4">
          <h4 className="md:text-2xl font-switzer text-center">
            Introducing the
            <span className="text-[#379465] font-switzer"> Fomino App</span>
          </h4>
          <p className="text-2xl md:text-4xl lg:text-5xl font-switzer font-medium text-center max-w-[1120px] m-auto">
            Enhancing Convenience and Delight for Food Lovers
          </p>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto">
        <TimelineOne />
      </div>

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto py-10 lg:py-20 bg-white relative z-50">
        <div className="space-y-4">
          <h4 className="md:text-2xl font-switzer text-center">
            Introducing address <span className="text-[#202053]">DBS</span>
          </h4>
          <p className="text-2xl md:text-4xl lg:text-5xl font-switzer font-medium text-center max-w-[1120px] m-auto">
            Transforming Address Allocations for
            <span className="text-sigiYellow"> Efficient Courier Delivery</span>
          </p>
        </div>
      </div>

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto">
        <TimelineTwo />
      </div>

      <div className="bg-[#F4F4F4] pt-10  lg:pt-20 relative z-50">
        <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto space-y-4">
          <h4 className="text-2xl md:text-4xl lg:text-5xl font-switzer font-medium text-center">
            Loved by OSS, trusted by Enterprise
          </h4>
          <p className="md:text-2xl font-switzer text-center">
            Cypress is proud to support developers all around the world by
            making it easier to build and test modern applications.
          </p>
        </div>

        {/* <div className="w-[90%] lg:w-[85%] m-auto grid md:grid-cols-2 gap-5 lg:gap-10 2xl:grid-cols-4"></div> */}
        <div className="w-[90%] lg:w-[85%] mx-auto mt-10">
          <Slider />
        </div>
      </div>

      <div className="py-10 lg:py-20 flex flex-col justify-center items-center space-y-5 bg-white relative z-50">
        <h4 className="text-center text-2xl 2xl:text-4xl font-switzer font-medium">
          Ready to transform your operations?
        </h4>
        <p className="text-center lg:text-xl font-switzer text-paraText">
          Contact Sigi Technologies today to explore how our expertise can help
          your business thrive.
        </p>
        <button className="font-switzer font-medium lg:text-xl bg-sigiYellow text-white px-10 py-3 border-2 border-sigiYellow hover:text-sigiYellow hover:bg-white duration-150">
          Contact us today
        </button>
      </div>

      <Footer />
    </section>
  );
}
