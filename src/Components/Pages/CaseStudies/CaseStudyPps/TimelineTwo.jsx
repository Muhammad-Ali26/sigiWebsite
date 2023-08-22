import React from "react";
import { BsCheck2 } from "react-icons/bs";

export default function TimelineTwo() {
  return (
    <div className="relative">
      <div className="w-[2px] h-full bg-gray-400 border border-dashed hidden lg:block absolute lg:left-1/2 -translate-x-1/2"></div>
      {/* <div className="border border-gray-400 w-[20px] h-[20px] bg-black absolute rounded-full  lg:left-1/2 -translate-x-1/2"></div> */}
      <div
        className="relative lg:grid grid-cols-2 gap-20 space-y-10 lg:space-y-0 pb-10 lg:pb-20 before:absolute before:bg-white
        before:w-full before:h-[60px] before:bottom-0 z-40"
      >
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-pps/timeline-three.webp"
            alt="timeline"
            className="w-[500px] m-auto object-contain"
          />
        </div>
        <div className="space-y-7 md:space-y-14 lg:space-y-20">
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Scalability and Flexibility
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The DBS Code System, designed by Sigi Technologies, was built to
              accommodate PPS Logistic's evolving needs. As their operations
              expanded, the system effortlessly scaled, accommodating increased
              order volumes and ensuring uninterrupted service.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Scalability and Flexibility
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The DBS Code System, designed by Sigi Technologies, was built to
              accommodate PPS Logistic's evolving needs. As their operations
              expanded, the system effortlessly scaled, accommodating increased
              order volumes and ensuring uninterrupted service.
            </p>
          </div>

          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Results and Benefits
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The implementation of the DBS Code System brought about numerous
              benefits for PPS Logistic. They experienced a considerable
              reduction in delivery delays, improved efficiency, enhanced
              customer satisfaction, and a significant competitive advantage in
              the market. PPS Logistic became synonymous with reliability and
              precision in the courier delivery industry in Panama.
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-pps/timeline-four.webp"
            alt="timeline"
            className="w-[500px] m-auto object-contain"
          />
        </div>
        <div className="space-y-7 md:space-y-14 lg:space-y-20">
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-5">
              <div className="w-[35px] h-[35px] border border-black rounded-full p-[5px]">
                <BsCheck2 className="text-2xl" />
              </div>
              <div className="w-[35px] h-[35px] border border-black rounded-full p-[5px]">
                <BsCheck2 className="text-2xl" />
              </div>
              <div className="w-[35px] h-[35px] border border-black rounded-full p-[5px]">
                <BsCheck2 className="text-2xl" />
              </div>
              <div className="w-[35px] h-[35px] border border-black rounded-full p-[5px]">
                <BsCheck2 className="text-2xl" />
              </div>
              <div className="w-[35px] h-[35px] border border-black rounded-full p-[5px]">
                <BsCheck2 className="text-2xl" />
              </div>
            </div>
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Conclusion:
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The collaboration between My Ace and Sigi Technologies exemplifies
              the power of innovative software solutions in revolutionizing the
              online food delivery industry. By leveraging our expertise in
              software development and user experience, we empowered My Ace to
              provide a seamless, personalized, and delightful food ordering
              experience. At Sigi Technologies, we are committed to partnering
              with businesses to drive success and deliver exceptional customer
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
