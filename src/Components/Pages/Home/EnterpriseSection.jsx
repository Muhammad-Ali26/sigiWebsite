// @ts-nocheck
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import GlideCard from "./GlideCard";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function EnterpriseSection() {
  return (
    <div className="md:py-14 w-[90%] lg:w-full m-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        style={{ padding: "40px 0px 40px 0px" }}
      >
        <SwiperSlide>
          <GlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <GlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <GlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <GlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <GlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <GlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <GlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <GlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <GlideCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
