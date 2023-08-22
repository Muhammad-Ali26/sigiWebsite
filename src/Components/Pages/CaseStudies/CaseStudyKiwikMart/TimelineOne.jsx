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
              Challenges faced by Kwik e Mart
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Consumers often face challenges when it comes to grocery shopping,
              such as limited time, long queues, and crowded stores. They need a
              convenient solution that offers a diverse selection of products,
              easy ordering, and timely delivery to their doorstep.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              The Kwik e Mart advantage
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Kwik e Mart offers a comprehensive mobile app solution that caters
              to the unique needs of online grocery shoppers. With its
              user-friendly interface, extensive product range, and reliable
              delivery services, users can easily find and order their groceries
              with convenience.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-kiwimart/timeline-img-one.webp"
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
              Diverse product selection
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Kwik e Mart provides a wide range of grocery products to meet the
              diverse needs of its users. From fresh produce, pantry staples,
              dairy products, beverages, snacks, and household essentials, users
              can find everything they need in one place.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Easy and intuitive ordering
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              With Kwik e Mart, users can effortlessly browse through the app,
              add items to their virtual cart, and proceed to checkout with just
              a few taps. The app ensures a smooth and intuitive ordering
              process, saving users valuable time and effort.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-kiwimart/timeline-img-two.webp"
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
              Personalized shopping experience
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Kwik e Mart offers personalized recommendations and shopping
              suggestions based on users' preferences and past purchases. This
              feature allows users to discover new products and enjoy a tailored
              shopping experience that matches their unique needs.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Convenient delivery options
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Kwik e Mart provides flexible delivery options, including
              scheduled deliveries to accommodate users' preferred time slots.
              Users can choose the most convenient delivery window, ensuring
              their groceries arrive at their doorstep when it suits them best.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-kiwimart/timeline-img-three.webp"
            alt="timeline"
            className="w-[500px] m-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
