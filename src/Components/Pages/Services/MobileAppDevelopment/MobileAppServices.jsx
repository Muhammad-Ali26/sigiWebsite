// @ts-nocheck
import React from "react";
import Navbar from "../../Home/Navbar";
import ServicesBanner from "../DesignServices/ServicesBanner";
import DesignProcess from "./DesignProcess";
import WhySigi from "../DesignServices/WhySigi";
import OurClients from "../DesignServices/OurClients";
import OurServices from "./OurServices";
import SuccessStories from "../DesignServices/SuccessStories";
import FrequentlyAsk from "../DesignServices/FrequentlyAsk";
import GetInTouch from "../../Home/GetInTouch";
import Footer from "../../Home/Footer";
import IndustriesWeServe from "./IndustriesWeServe";
import OurClientSay from "../DesignServices/OurClientSay";

export default function MobileAppServices() {
  return (
    <section>
      <Navbar />

      <div className="w-[90%] lg:w-[80%] 2xl:w-[65%] m-auto pt-24 md:pt-32 lg:pt-40 pb-10 lg:pb-20">
        <ServicesBanner title="Mobile App Development" />
      </div>
      <DesignProcess />
      <WhySigi
        imgSrc="images/mobileapp-services/why-sigi-img.webp"
        bgColor="bg-[#3AA1C926]"
      />
      <IndustriesWeServe />
      <OurClients />
      <OurServices />
      <SuccessStories />
      <FrequentlyAsk />
      {/* <OurClientSay /> */}
      <GetInTouch />
      <Footer />
    </section>
  );
}
