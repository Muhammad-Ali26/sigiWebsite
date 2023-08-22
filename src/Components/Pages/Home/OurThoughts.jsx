// @ts-nocheck
import ThoughtsData from "./ThoughtsData";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default function OurThoughts() {
  return (
    <section className="bg-[#F4F4F4] py-10 lg:py-20">
      <div className="w-[90%] md:w-[85%] 2xl:w-[75%] m-auto">
        <div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-black font-switzer font-semibold">
            Our thoughts
          </h2>
          <p className="text-black lg:text-xl font-switzer mt-4">
            Businesses that rely on our engineering talent:
          </p>
        </div>

        <div className="mt-6">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            style={{paddingBottom:"80px"}}
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
              <ThoughtsData
                bgImg="bg-thoughtOne"
                title="Multi platform frontend OTT app"
                para="Configure your software solution for new clients"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThoughtsData
                bgImg="bg-thoughtTwo"
                title="Scale your business with scalable software architecture"
                para="Leverage flexible and scalable software solutions to support your company's growth"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThoughtsData
                bgImg="bg-thoughtThree"
                title="Top 10 payment gateways"
                para="Configure your software solution for new clients"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThoughtsData
                bgImg="bg-thoughtFour"
                title="Multi platform frontend OTT app"
                para="Configure your software solution for new clients"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThoughtsData
                bgImg="bg-thoughtOne"
                title="Multi platform frontend OTT app"
                para="Configure your software solution for new clients"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThoughtsData
                bgImg="bg-thoughtTwo"
                title="Scale your business with scalable software architecture"
                para="Leverage flexible and scalable software solutions to support your company's growth"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThoughtsData
                bgImg="bg-thoughtThree"
                title="Top 10 payment gateways"
                para="Configure your software solution for new clients"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ThoughtsData
                bgImg="bg-thoughtFour"
                title="Multi platform frontend OTT app"
                para="Configure your software solution for new clients"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
