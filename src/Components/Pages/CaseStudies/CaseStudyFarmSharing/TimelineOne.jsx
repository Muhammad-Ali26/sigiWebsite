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
        <div className="space-y-7 md:space-y-14 lg:space-y-20">
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Challenges faced by Farm Sharing
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Farmers and agriculture enthusiasts often face challenges in
              accessing reliable sources for purchasing farming materials and
              finding skilled labor. They need a platform that simplifies the
              process, connects them with trusted suppliers, and offers a wide
              range of agricultural products and services.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              The Farm Sharing advantage
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Farm Sharing offers a comprehensive mobile app solution that
              addresses the unique needs of farmers and individuals involved in
              agriculture. With its user-friendly interface and extensive
              network of suppliers and labor, users can easily find, purchase,
              and hire products and services related to farming.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-farmsharing/timeline-img-one.webp"
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
              Extensive product catalog
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Farm Sharing provides a diverse range of farming materials and
              agricultural products. Users can browse through an extensive
              catalog of seeds, fertilizers, pesticides, machinery, tools, and
              other essentials required for farming. The app ensures access to
              quality products from reliable suppliers.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Efficient product purchasing
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              With Farm Sharing, users can conveniently purchase farming
              materials directly through the app. The platform offers secure
              payment options, order tracking, and delivery services, ensuring a
              streamlined and hassle-free purchasing experience.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-farmsharing/timeline-img-two.webp"
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
              Hiring agricultural products:
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Farm Sharing allows users to hire agricultural machinery and
              equipment on-demand. Whether it's tractors, harvesters, irrigation
              systems, or other specialized tools, users can easily find and
              rent the equipment they need for their farming operations, saving
              time and resources.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Skilled labor hiring
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              In addition to products, Farm Sharing also connects users with
              skilled labor in the farming and agriculture sector. Users can
              hire experienced professionals such as farm workers, agricultural
              technicians, and specialized labor to assist them with various
              farming tasks and operations.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-farmsharing/timeline-img-three.webp"
            alt="timeline"
            className="w-[500px] m-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
