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
              Transparent pricing and packages
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Havoc Entertainment ensures transparency in pricing by providing
              detailed information on DJ rates and packages. Users can compare
              pricing options, understand what each package includes, and select
              the best option that fits their budget and requirements.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Ratings and reviews
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The app features ratings and reviews from previous users, helping
              new users assess the quality and reliability of DJs. Users can
              make informed decisions based on authentic feedback and
              experiences shared by others, ensuring a high level of
              satisfaction.
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
              Havoc Entertainment offers secure payment options within the app,
              allowing users to complete their transactions with confidence.
              Users can conveniently make payments for DJ services through
              various methods, ensuring a safe and seamless payment process.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-havoc/timeline-img-four.webp"
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
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Direct communication with DJs
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Users can directly communicate with DJs through the app's
              messaging feature. This enables users to discuss event details,
              music preferences, and any specific requirements, fostering
              effective collaboration and ensuring a tailored DJ performance.
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
            <p className="md:text-xl font-switzer text-paraText">
              Havoc Entertainment has revolutionized the DJ service industry by
              providing a seamless and convenient platform for users to
              discover, explore, and hire DJs for their events.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-havoc/timeline-img-five.webp"
            alt="timeline"
            className="w-[500px] m-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
