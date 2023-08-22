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
            src="/images/case-study-budget/timeline-img-four.webp"
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
              Secure and synchronized data
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Budget App ensures the security of users' financial data by
              employing robust encryption and data protection measures. The app
              also provides seamless data synchronization across multiple
              devices, allowing users to access their budget and goals anytime,
              anywhere.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              User-friendly interface
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Budget App offers a clean and intuitive interface, making it easy
              for users to navigate and interact with the app. The streamlined
              design focuses on delivering a smooth user experience, ensuring
              that managing finances is both efficient and enjoyable..
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-budget/timeline-img-five.webp"
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
              Success stories and testimonials
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Numerous users have experienced positive outcomes with Budget App.
              Their success stories and testimonials highlight how the app has
              helped them gain control over their finances, achieve their
              financial goals, and build a secure financial future.
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
              Conclusion
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Budget App is the ultimate tool for individuals seeking to take
              charge of their financial well-being. With its user-friendly
              interface, streamlined budget creation, expense tracking, goal
              setting, and personalized insights, Budget App empowers users to
              create and manage budgets with ease. Experience the power of
              Budget App and transform your financial management journey today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
