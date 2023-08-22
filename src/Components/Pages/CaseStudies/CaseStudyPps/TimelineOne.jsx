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
            src="/images/case-study-pps/timeline-one.webp"
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
              Challenges Faced by PPS Logistic
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Before partnering with Sigi Technologies, PPS Logistic faced
              numerous challenges in delivering packages efficiently across
              Panama. The conventional address allocation system proved to be
              cumbersome, leading to frequent delays, inaccurate deliveries, and
              dissatisfied customers.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              The Sigi Advantage
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Recognizing the need for a scalable and accurate address
              allocation solution, PPS Logistic turned to Sigi Technologies.
              Leveraging our expertise in software development and logistics, we
              introduced the DBS Code System to streamline their operations and
              elevate their courier delivery services.
            </p>
          </div>

          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Implementing the DBS Code System
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Working closely with the PPS Logistic team, we meticulously
              analyzed their existing processes, logistics infrastructure, and
              customer requirements. Based on this comprehensive assessment, we
              customized the DBS Code System to align seamlessly with their
              operations.
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-pps/timeline-two.webp"
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
              Enhancing Efficiency and Accuracy
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              By implementing the DBS Code System, PPS Logistic witnessed a
              significant improvement in their courier delivery operations. The
              system enabled them to allocate precise DBS codes to every
              address, facilitating seamless navigation for their drivers and
              reducing delivery time. With accurate address allocation, PPS
              Logistic achieved higher customer satisfaction and improved their
              overall service quality.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Real-Time Tracking and Notifications
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The DBS Code System introduced real-time tracking and
              notifications, empowering PPS Logistic and their customers to
              monitor package status at every stage of the delivery process.
              This enhanced transparency helped build trust and reliability,
              setting PPS Logistic apart from their competitors.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Real-Time Tracking and Notifications
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The DBS Code System introduced real-time tracking and
              notifications, empowering PPS Logistic and their customers to
              monitor package status at every stage of the delivery process.
              This enhanced transparency helped build trust and reliability,
              setting PPS Logistic apart from their competitors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
