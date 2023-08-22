// @ts-nocheck
import React from "react";
import Navbar from "../../Home/Navbar";
import DesignProcess from "./DesignProcess";
import WhySigi from "./WhySigi";
import OurClients from "./OurClients";
import OurServices from "./OurServices";
import SuccessStories from "./SuccessStories";
import FrequentlyAsk from "./FrequentlyAsk";
import OurClientSay from "./OurClientSay";
import GetInTouch from "../../Home/GetInTouch";
import Footer from "../../Home/Footer";
import ServicesBanner from "./ServicesBanner";

export default function UiUxServices() {
  return (
    <section>
      <Navbar />

      <div className="w-[90%] lg:w-[80%] 2xl:w-[65%] m-auto pt-24 md:pt-32 lg:pt-40 pb-10 lg:pb-20">
        <ServicesBanner title="UI/UX Design and Development Services" />
      </div>
      <DesignProcess />
      <WhySigi imgSrc="/images/deticated-img-three.webp" bgColor="bg-[#F8F8F8] "/>
      <OurClients />
      <OurServices />
      <SuccessStories />
      <FrequentlyAsk />
      <OurClientSay />
      <GetInTouch />
      <Footer />
    </section>
  );
}
