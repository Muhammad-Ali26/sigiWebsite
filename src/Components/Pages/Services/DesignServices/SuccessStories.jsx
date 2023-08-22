import React, { useRef, useState } from "react";
import SuccesStoriesCards from "./SuccesStoriesCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "../../../../Swiper.css"

export default function SuccessStories() {
  return (
    <div className="pt-10 lg:pt-20 bg-[#F4F4F4]">
      <div className="w-[90%] lg:w-[80%]  m-auto">
        <h4 className="text-black text-3xl md:text-4xl lg:text-5xl font-switzer font-semibold">
          Success Stories
        </h4>
        <>
          <Swiper
            slidesPerView={1.6}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1.5,
                },
              }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            style={{paddingBottom:"60px"}}
          >
            <SwiperSlide>
              <SuccesStoriesCards />
            </SwiperSlide>
            <SwiperSlide>
              <SuccesStoriesCards />
            </SwiperSlide>
            <SwiperSlide>
              <SuccesStoriesCards />
            </SwiperSlide>
            <SwiperSlide>
              <SuccesStoriesCards />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}
