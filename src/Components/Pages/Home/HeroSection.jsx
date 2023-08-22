// @ts-nocheck
import Navbar from "./Navbar";
import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import HeroSectionData from "./HeroSectionData";

export default function HeroSection() {
  const slideData = [
    {
      title: "Fomino",
      para: "Enhancing Convenience and Delight for Food Lovers",
      imgSrc: "/images/header-img-one.webp",
      bgColor: "bg-[#249756]",
      color: "text-[#FFF]",
      viewColor: "text-[#FCB316]",
    },
    {
      title: "PPS Logistics",
      para: "Streamlining Operations with DBS Code System",
      imgSrc: "/images/header-img-two.webp",
      bgColor: "bg-[#202053]",
      color: "text-[#FF745A]",
      viewColor: "text-[#FF745A]",
    },
    {
      title:"Farm Sharing",
      para:"Revolutionizing farming and agriculture",
      imgSrc:"/images/header-img-four.webp",
      bgColor:"bg-[#AA9CFF]",
      color:"text-[#FFF]",
      viewColor:"text-[#EBFD6C]",
    
    },
    {
      title:"Finanza",
      para:"Budget App - empowering financial management",
      imgSrc:"/images/header-img-three.webp",
      bgColor:"bg-[#437FF9]",
      color:"text-[#FFC94A]",
      viewColor:"text-[#FFC94A]",
    }
  ];

  // Function to shuffle the array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  // Shuffle the slideData array
  const shuffledSlides = shuffleArray(slideData);

  
  return (
    <>
      <section>
        <Navbar />

        <Swiper
          className="mySwiper"
          effect={"fade"}
          slidesPerView={1}
          loop={true}
          modules={[EffectFade, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
    {shuffledSlides.map((slide, index) => (
      <SwiperSlide key={index}>
        <HeroSectionData
          title={slide.title}
          para={slide.para}
          imgSrc={slide.imgSrc}
          bgColor={slide.bgColor}
          color={slide.color}
          viewColor={slide.viewColor}
        />
      </SwiperSlide>
    ))}

        </Swiper>
      </section>
    </>
  );
}
