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
              User reviews and ratings
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Farm Sharing provides a platform for users to share their
              experiences and provide feedback on products and services. User
              reviews and ratings help other users make informed decisions when
              selecting suppliers, labor, and products, fostering a transparent
              and trustworthy farming community.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Knowledge sharing and resources
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Farm Sharing serves as a hub for agricultural knowledge and
              resources. The app offers educational content, articles, and
              expert advice on farming practices, crop management, pest control,
              and other relevant topics, empowering users with valuable insights
              and guidance.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-farmsharing/timeline-img-four.webp"
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
              Farm Sharing has revolutionized the farming and agriculture
              industry by providing a convenient mobile app platform for users
              to purchase farming materials, hire agricultural products, and
              access skilled labor. With its extensive product catalog,
              efficient purchasing process, labor hiring options, knowledge
              sharing resources, and community engagement features, Farm Sharing
              empowers individuals in the farming sector to thrive and succeed.
              Experience the benefits of Farm Sharing and take your farming
              endeavors to new heights today.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-farmsharing/timeline-img-five.webp"
            alt="timeline"
            className="w-[500px] m-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
