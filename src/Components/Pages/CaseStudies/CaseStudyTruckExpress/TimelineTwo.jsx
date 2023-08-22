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
      <div className="w-[2px] h-[96%] bg-gray-400 border border-dashed hidden lg:block absolute top-0 lg:left-1/2 -translate-x-1/2"></div>
      <div
        className="relative lg:grid grid-cols-2 gap-20 space-y-10 lg:space-y-0 pb-10 lg:pb-20 before:absolute before:bg-white
       before:w-full before:h-[60px] before:bottom-0 z-40"
      >
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-truckexpress/timeline-img-four.webp"
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
              Job posting and management
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Companies can easily post delivery jobs on the Truck Express
              platform. They can specify job requirements, delivery locations,
              and other relevant details. Companies have full control over
              managing their posted jobs and selecting suitable drivers for each
              assignment.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Verified driver network
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Truck Express maintains a network of verified drivers to ensure
              reliability and security. Companies can have confidence in the
              drivers they hire through the platform, knowing that they have
              gone through a rigorous vetting process.
            </p>
          </div>

          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Seamless communication
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Truck Express facilitates seamless communication between drivers
              and companies through in-app messaging. This feature allows
              drivers and companies to coordinate effectively, address any
              queries, and ensure a smooth delivery process.
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-truckexpress/timeline-img-five.webp"
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
              Performance feedback and ratings
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Truck Express encourages companies and drivers to provide feedback
              and ratings based on their experience. This feedback helps
              maintain a high level of service quality, fosters accountability,
              and enhances the overall user experience.
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
              Truck Express has revolutionized the bulk parcel delivery industry
              by providing a seamless and convenient platform for drivers to
              pick up and deliver bulk parcels, while companies can efficiently
              manage their delivery needs. ss and simplify your bulk parcel
              deliveries today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
