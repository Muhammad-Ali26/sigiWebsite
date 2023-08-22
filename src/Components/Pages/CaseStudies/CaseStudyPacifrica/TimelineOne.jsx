import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TimelineOne() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <div className="w-[2px] h-full bg-gray-400 border border-dashed hidden lg:block absolute top-0 lg:left-1/2 -translate-x-1/2"></div>

      <div className="lg:grid grid-cols-2 gap-20 space-y-10 lg:space-y-0 lg:pl-0">
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-pacifrica/timeline-img-one.webp"
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
              Challenges faced by Truck Express
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Drivers often struggle to find reliable opportunities for picking
              up and delivering bulk parcels efficiently. They need a platform
              that connects them with companies seeking reliable drivers for
              their delivery needs.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              The Truck Express advantage:
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Truck Express offers a comprehensive mobile app solution that
              addresses the unique requirements of drivers and companies
              involved in bulk parcel delivery. With its user-friendly interface
              and efficient features, drivers can easily find and fulfill
              delivery jobs, while companies can manage their delivery
              operations seamlessly.
            </p>
          </div>

          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Bulk parcel pickup and delivery
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Truck Express enables drivers to pick up and deliver bulk parcels
              efficiently. Drivers can browse available jobs, view details, and
              accept jobs that suit their availability and location, ensuring a
              streamlined and optimized delivery process.
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-pacifrica/timeline-img-two.webp"
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
              Real-time job tracking
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The app provides real-time job tracking, allowing drivers and
              companies to monitor the progress of each delivery. Drivers can
              update the status of their deliveries, providing transparency and
              peace of mind for both drivers and companies.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Efficient route planning
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Truck Express offers intelligent route planning features to
              optimize the delivery process. Drivers can access real-time
              traffic updates, plan the most efficient routes, and save time and
              fuel while ensuring timely parcel deliveries.
            </p>
          </div>

          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Transparent payment system
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Truck Express provides a transparent payment system for drivers,
              ensuring fair compensation for their services. Drivers can track
              their earnings, view payment details, and receive secure and
              timely payments through the app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
