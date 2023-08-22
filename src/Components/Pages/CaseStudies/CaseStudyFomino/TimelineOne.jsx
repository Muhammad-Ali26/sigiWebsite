import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CustomTimeline() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <div className="w-[2px] h-full bg-gray-400 border border-dashed hidden lg:block absolute top-0 lg:left-1/2 -translate-x-1/2"></div>

      <div className="lg:grid grid-cols-2 gap-20 space-y-10 lg:space-y-0">
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-fomino/timeline-one.webp"
            alt="timeline"
            className="w-[500px] m-auto  object-contain"
          />
        </div>
        <div className="space-y-7 md:space-y-14 lg:space-y-20">
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Challenges faced by <span className="text-[#379465]">Fomino</span>
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Before partnering with Sigi Technologies, Fomino encountered
              various challenges in the highly competitive food delivery
              industry. The existing delivery processes were often
              time-consuming, leading to delays and dissatisfied customers.
              Fomino sought a solution that would streamline their operations
              and deliver a superior user experience.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              The <span className="text-[#FF8C1D]">Sigi</span> advantage
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Partnering with Sigi Technologies provided Fomino with a distinct
              advantage. Our expertise in software development and user
              experience allowed us to revamp their platform and address their
              unique challenges, resulting in a more efficient and
              customer-centric food delivery service.
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-fomino/timeline-two.webp"
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
              Enhancing the User Experience
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Fomino's success hinged on delivering a delightful user
              experience. We redesigned their platform to provide intuitive and
              user-friendly navigation, ensuring that customers could
              effortlessly browse restaurants, explore menus, and place orders
              with ease.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              User-Friendly Interface and Navigation
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              We focused on creating a visually appealing and intuitive
              interface that made ordering food a breeze. From seamless
              navigation to clear categorization and filtering options, we
              ensured that Fomino's customers could find their desired meals
              quickly and easily.
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-fomino/timeline-three.webp"
            alt="timeline"
            className="w-[500px] m-auto  object-contain"
          />
        </div>
        <div className="space-y-7 md:space-y-14 lg:space-y-20">
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Streamlined Ordering Process
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              We optimized the ordering process to be swift and hassle-free.
              Fomino's customers could customize their orders, specify dietary
              preferences, and add special instructions, all through a seamless
              and intuitive interface.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Wide Variety of{" "}
              <span className="text-[#379465]">Restaurants and Menus</span>
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Fomino aimed to provide an extensive selection of restaurants and
              menus to cater to diverse customer preferences. We worked closely
              with Fomino to onboard a wide range of culinary establishments,
              offering customers an expansive choice of cuisines and dishes.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Personalized Recommendations and Offers
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Understanding the importance of personalization, we implemented
              intelligent algorithms that analyzed user preferences and order
              history. This enabled Fomino to offer personalized recommendations
              and exclusive deals to enhance customer engagement and
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
