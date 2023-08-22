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
            src="/images/case-study-fomino/timeline-four.webp"
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
              Real-Time Order Tracking and Notifications
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              We integrated a robust order tracking system into the platform,
              providing real-time updates to customers about their order status
              and estimated delivery time. This feature increased transparency
              and allowed customers to stay informed throughout the entire
              delivery process.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Secure Payment Options
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              To ensure a secure and seamless payment experience, we integrated
              trusted and convenient payment gateways into the Fomino platform.
              This provided customers with multiple options to pay for their
              orders, enhancing overall user satisfaction.
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-fomino/timeline-five.webp"
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
              Customer Reviews and Ratings
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              To ensure a secure and seamless payment experience, we integrated
              trusted and convenient payment gateways into the Fomino platform.
              This provided customers with multiple options to pay for their
              orders, enhancing overall user satisfaction.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Benefits of Partnering with
              <span className="text-[#379465]"> Fomino </span>
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              To ensure a secure and seamless payment experience, we integrated
              trusted and convenient payment gateways into the Fomino platform.
              This provided customers with multiple options to pay for their
              orders, enhancing overall user satisfaction..
            </p>
          </div>
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
            <div className="grid grid-cols-5"></div>
            <p className="md:text-xl font-switzer text-paraText">
              The collaboration between Fomino and Sigi Technologies showcases
              the power of advanced software solutions in revolutionizing the
              online food ordering industry. Through our partnership, Fomino was
              able to enhance their platform, providing customers with a
              seamless and convenient way to discover, order, and enjoy their
              favorite meals. At Sigi Technologies, we are committed to
              delivering innovative solutions that drive success and elevate
              customer experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
