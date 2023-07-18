import React from "react";

export default function WhoWeAre() {
  return (
    <section className="pt-7 lg:pt-14 ">
      <div className="w-[90%] md:w-[85%] 2xl:w-[68%] m-auto">
        <div>
          <h2 className="text-black text-2xl md:text-4xl lg:text-5xl  font-switzer font-semibold">
            Who we are
          </h2>
          <p className="text-black lg:text-xl font-switzer mt-4">
            Sigi Technologies is a boutique software development agency with
            focus on building strategic long-term partnerships.
          </p>
        </div>

        <div className="mt-7 lg:mt-14">
          <img src="/images/video.webp" alt="" />
        </div>

        <div className="md:flex justify-between space-y-6 md:space-y-0 my-5 lg:my-14">
          <div className="flex items-center justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl 2xl:text-[80px] text-sigiYellow font-switzer font-semibold animate-fadeIn">
              100+
            </h2>
            <p className="lg:text-xl font-switzer animate-fadeIn">
              Delivered projects
            </p>
          </div>

          <div className="flex items-center justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl 2xl:text-[80px] text-sigiYellow font-switzer font-semibold animate-fadeIn">
              15+
            </h2>
            <p className="lg:text-xl  font-switzer animate-fadeIn">
              Countries with clients
            </p>
          </div>

          <div className="flex items-center justify-between gap-6">
            <h2 className="text-4xl lg:text-5xl 2xl:text-[80px] text-sigiYellow font-switzer font-semibold animate-fadeIn">
              20+
            </h2>
            <p className="lg:text-xl  font-switzer animate-fadeIn">
              Achievements
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[2px] bg-sigiYellow"></div>

      <div className="w-[90%] md:w-[85%] 2xl:w-[68%] m-auto py-7 lg:py-14 2xl:py-20">
        <div className="grid grid-cols-5 gap-3">
          <img
            src="/images/Goodfirm.webp"
            alt="goodfirm"
            className="w-[100px] h-[78px] object-contain"
          />
          <img
            src="/images/Clutch.webp"
            alt="goodfirm"
            className="w-[100px] h-[78px] object-contain"
          />
          <img
            src="/images/App Future.webp"
            alt="goodfirm"
            className="w-[100px] h-[78px] object-contain"
          />
          <img
            src="/images/Mobile App Daily.webp"
            alt="goodfirm"
            className="w-[100px] h-[78px] object-contain"
          />
          <img
            src="/images/Sortlist.webp"
            alt="goodfirm"
            className="w-[100px] h-[78px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
