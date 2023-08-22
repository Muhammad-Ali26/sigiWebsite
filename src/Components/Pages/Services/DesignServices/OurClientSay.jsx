// @ts-nocheck
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import OurClientSayCard from "./OurClientSayCard";
import { FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import OurClientSayThumbCards from "./OurClientSayThumbCards";

export default function OurClientSay() {
  const [thumbsSwiper, setThumbsSwiper] = useState(0);
  console.log(
    "🚀 ~ file: OurClientSay.jsx:14 ~ OurClientSay ~ thumbsSwiper:",
    thumbsSwiper
  );

  return (
    <div className="py-10 lg:py-20 bg-[#F8F8F8]">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[65%] m-auto custom-swiper">
        <h4 className="text-black text-3xl md:text-4xl lg:text-5xl font-switzer font-semibold">
          What our client say
        </h4>

        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          slidesPerView={1}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <OurClientSayCard />
          </SwiperSlide>
          <SwiperSlide>
            <OurClientSayCard />
          </SwiperSlide>
          <SwiperSlide>
            <OurClientSayCard />
          </SwiperSlide>
          <SwiperSlide>
            <OurClientSayCard />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <OurClientSayThumbCards />
          </SwiperSlide>
          <SwiperSlide>
            <OurClientSayThumbCards />
          </SwiperSlide>
          <SwiperSlide>
            <OurClientSayThumbCards />
          </SwiperSlide>
          <SwiperSlide>
            <OurClientSayThumbCards />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
