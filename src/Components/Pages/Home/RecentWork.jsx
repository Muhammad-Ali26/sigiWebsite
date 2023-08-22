// @ts-nocheck
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import RecentWorkData from "./RecentWorkData";
import { Link } from "react-router-dom";

export default function RecentWork() {
  return (
    <section className="lg:grid grid-cols-2 space-y-8 lg:space-y-0 h-screen">
      <div className="pt-10 md:pt-14 lg:pt-28 flex justify-center items-start">
        <div className="space-y-4 md:space-y-8 w-[90%] lg:w-[70%] m-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-switzer font-semibold">
            Recent work
          </h2>
          <p className="md:text-xl lg:text-2xl font-switzer font-light">
            We build software solutions that solve our clients' business
            challenges. By diving into our case studies, you'll discover the
            innovative solutions we have developed and implemented to address
            complex business problems. Our collaborative approach, coupled with
            a deep understanding of industry dynamics, allows us to tailor our
            strategies to your unique needs.
          </p>
          <Link to="/case_studies" className="text-white bg-sigiYellow flex items-center gap-x-5 py-3 px-12 w-[300px] rounded-sm border border-sigiYellow hover:bg-transparent hover:text-sigiYellow duration-200">
            <div className="w-2 h-2 rounded-full bg-white shadow animate-ping"></div>
            <span className="font-medium font-switzer md:text-xl">
              Explore all work
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <Swiper
          direction={"vertical"}
          effect={"fade"}
          slidesPerView={1}
          mousewheel={true}
          modules={[Mousewheel, EffectFade]}
          className="mySwiper h-screen"
          style={{margin:"0px"}}
        >
          <SwiperSlide>
            <RecentWorkData
              bgImg="bg-recentWorkBgOne"
              beforeBg="before:bg-[#002E6399]"
              imgSrc="/images/recentwork-img-one.webp"
              title="Pps Logistics"
              textColor="text-white"
              para="An on-demand courier and packages delivery platform"
              caseStudyColor="text-sigiYellow"
              circle={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RecentWorkData
              bgImg="bg-[#A7DFDB]"
              beforeBg="before:bg-none"
              textColor="text-black"
              imgSrc="/images/recentwork-img-two.webp"
              title="Pps Logistics"
              para="An on-demand courier and packages delivery platform"
              caseStudyColor="text-sigiYellow"
              circle={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RecentWorkData
              bgImg="bg-recentWorkBgThree"
              beforeBg="before:bg-[#FFFFFFB8]"
              textColor="text-black"
              imgSrc="/images/recentwork-img-three.webp"
              title="Pps Logistics"
              para="An on-demand courier and packages delivery platform"
              caseStudyColor="text-sigiYellow"
              circle={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RecentWorkData
              bgImg="bg-headerTexture"
              beforeBg="before:bg-[#249756]"
              textColor="text-white"
              imgSrc="/images/recentwork-img-four.webp"
              title="Pps Logistics"
              para="An on-demand courier and packages delivery platform"
              caseStudyColor="text-sigiYellow"
              circle={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RecentWorkData
              bgImg="bg-recentWorkBgFive"
              beforeBg="before:bg-[#437FF999]"
              textColor="text-white"
              imgSrc="/images/recentwork-img-five.webp"
              title="Pps Logistics"
              para="An on-demand courier and packages delivery platform"
              caseStudyColor="text-sigiYellow"
              circle={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RecentWorkData
              bgImg="bg-recentWorkBgSix"
              beforeBg="before:bg-none"
              textColor="text-white"
              imgSrc="/images/recentwork-img-six.webp"
              title="Pps Logistics"
              para="An on-demand courier and packages delivery platform"
              caseStudyColor="text-white"
              circle={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RecentWorkData
              bgImg="bg-recentWorkBgSeven"
              beforeBg="before:bg-[#33157599]"
              textColor="text-white"
              imgSrc="/images/recentwork-img-seven.webp"
              title="Pps Logistics"
              para="An on-demand courier and packages delivery platform"
              caseStudyColor="text-sigiYellow"
              circle={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <RecentWorkData
              bgImg="bg-texture"
              beforeBg="before:bg-[#003257]"
              textColor="text-white"
              imgSrc="/images/recentwork-img-eight.webp"
              title="Pps Logistics"
              para="An on-demand courier and packages delivery platform"
              caseStudyColor="text-sigiYellow"
              circle={false}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
