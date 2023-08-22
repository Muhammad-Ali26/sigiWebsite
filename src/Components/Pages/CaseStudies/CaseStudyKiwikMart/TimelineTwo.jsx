import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheck2 } from "react-icons/bs";

export default function TimelineOne() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <div className="w-[2px] h-full bg-gray-400 border border-dashed hidden lg:block absolute top-0 lg:left-1/2 -translate-x-1/2"></div>

      <div
        className="relative lg:grid grid-cols-2 gap-20 space-y-10 lg:space-y-0 pb-10 lg:pb-20 before:absolute before:bg-white
       before:w-full before:h-[60px] before:bottom-0 z-40"
      >
        <div className="space-y-7 md:space-y-14 lg:space-y-20">
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Real-time order tracking
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The app features real-time order tracking, allowing users to stay
              informed about the status of their grocery delivery. Users can
              track the location of their delivery, receive notifications, and
              have peace of mind knowing when their groceries will arrive.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Secure payment options
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Kwik e Mart ensures secure and reliable payment options within the
              app. Users can conveniently pay for their groceries using various
              payment methods, including credit cards, debit cards, and mobile
              wallets, ensuring a safe and seamless checkout process.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-kiwimart/timeline-img-four.webp"
            alt="timeline"
            className="w-[400px] m-auto object-contain"
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
              Kwik e Mart has revolutionized online grocery shopping in the UK
              by providing a seamless and convenient platform for users to
              purchase a wide range of groceries. With its diverse product
              selection, intuitive ordering process, convenient delivery
              options, real-time tracking, and secure payment options, Kwik e
              Mart offers users a reliable and efficient way to shop for their
              groceries online. Experience the convenience of Kwik e Mart and
              simplify your grocery shopping today.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-kiwimart/timeline-img-five.webp"
            alt="timeline"
            className="w-[500px] m-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
