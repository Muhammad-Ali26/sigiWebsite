import React from "react";
import Navbar from "../../Home/Navbar";
import ServicesBanner from "../DesignServices/ServicesBanner";
import DesignProcess from "../MobileAppDevelopment/DesignProcess";
import OurClients from "../DesignServices/OurClients";
import OurServices from "../DesignServices/OurServices";
import SuccessStories from "../DesignServices/SuccessStories";
import FrequentlyAsk from "../DesignServices/FrequentlyAsk";
import GetInTouch from "../../Home/GetInTouch";
import Footer from "../../Home/Footer";
import OurClientSay from "../DesignServices/OurClientSay";
import BusinessForwardSection from "./BusinessForwardSection";

export default function WebDevelopmentServices() {
  return (
    <section>
      <Navbar />
      <div className="w-[90%] lg:w-[80%] 2xl:w-[65%] m-auto pt-24 md:pt-32 lg:pt-40 pb-10 lg:pb-20">
        <ServicesBanner title="Website Development" />
      </div>
      <DesignProcess />
      <BusinessForwardSection />
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
