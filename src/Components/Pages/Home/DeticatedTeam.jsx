// @ts-nocheck
import React, { useRef, useState } from "react";
import DeticatedTeamData from "./DeticatedTeamData";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

export default function DeticatedTeam() {
  return (
    <Swiper
      className="mySwiper"
      slidesPerView={1}
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <DeticatedTeamData
          titleOne="What we do best"
          titleTwo="Dedicated Development Team"
          para="We're certain that everyone aims for exceptional software development outcomes and heightened recognition. No need to worry, we've got you covered!"
          imgSrc="/images/deticated-img-one.webp"
        />
      </SwiperSlide>
      <SwiperSlide>
        <DeticatedTeamData
          titleOne="What we do best"
          titleTwo="Mobile App Development"
          para="We're certain that everyone aims for exceptional software development outcomes and heightened recognition. No need to worry, we've got you covered!"
          imgSrc="/images/deticated-img-two.webp"
        />
      </SwiperSlide>
      <SwiperSlide>
        <DeticatedTeamData
          titleOne="What we do best"
          titleTwo="UI UX Design"
          para="We're certain that everyone aims for exceptional software development outcomes and heightened recognition. No need to worry, we've got you covered!"
          imgSrc="/images/deticated-img-three.webp"
        />
      </SwiperSlide>
      <SwiperSlide>
        <DeticatedTeamData
          titleOne="What we do best"
          titleTwo="Search Engine Optimization"
          para="We're certain that everyone aims for exceptional software development outcomes and heightened recognition. No need to worry, we've got you covered!"
          imgSrc="/images/deticated-img-four.webp"
        />
      </SwiperSlide>

      <SwiperSlide>
        <DeticatedTeamData
          titleOne="What we do best"
          titleTwo="CRM Development"
          para="We're certain that everyone aims for exceptional software development outcomes and heightened recognition. No need to worry, we've got you covered!"
          imgSrc="/images/deticated-img-five.webp"
        />
      </SwiperSlide>

      <SwiperSlide>
        <DeticatedTeamData
          titleOne="What we do best"
          titleTwo="Web Design"
          para="We're certain that everyone aims for exceptional software development outcomes and heightened recognition. No need to worry, we've got you covered!"
          imgSrc="/images/deticated-img-six.webp"
        />
      </SwiperSlide>
      <SwiperSlide>
        <DeticatedTeamData
          titleOne="What we do best"
          titleTwo="Software Quality Assurance"
          para="We're certain that everyone aims for exceptional software development outcomes and heightened recognition. No need to worry, we've got you covered!"
          imgSrc="/images/deticated-img-seven.webp"
        />
      </SwiperSlide>
      <SwiperSlide>
        <DeticatedTeamData
          titleOne="What we do best"
          titleTwo="IoT Application Development"
          para="We're certain that everyone aims for exceptional software development outcomes and heightened recognition. No need to worry, we've got you covered!"
          imgSrc="/images/deticated-img-eight.webp"
        />
      </SwiperSlide>
    </Swiper>
  );
}
