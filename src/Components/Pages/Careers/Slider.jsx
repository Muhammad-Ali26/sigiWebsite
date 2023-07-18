// @ts-nocheck
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCards from './SwiperCards';
import "swiper/css";
import 'swiper/css/navigation';
import "../../../Swiper.css"

export default function Slider() {
  return (
    <Swiper
    className="mySwiper"
    spaceBetween={20}
    slidesPerView={4}
    loop ={true}
    navigation={true}
    modules={[Navigation, Autoplay]}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    style={{ width: "90%", margin: "auto" , paddingBottom:"80px"}}
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
  >
    <SwiperSlide>
      <SwiperCards imgSrc="/images/clip/clip-blue.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperCards imgSrc="/images/clip/clip-yellow.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperCards imgSrc="/images/clip/clip-green.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperCards imgSrc="/images/clip/clip-pink.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperCards imgSrc="/images/clip/clip-blue.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperCards imgSrc="/images/clip/clip-yellow.webp" />
    </SwiperSlide>
    <SwiperSlide>
      <SwiperCards imgSrc="/images/clip/clip-green.webp" />
    </SwiperSlide>
  </Swiper>
  )
}
