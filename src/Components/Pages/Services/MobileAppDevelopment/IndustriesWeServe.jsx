// @ts-nocheck
import React from "react";
import IndustriesCards from "./IndustriesCards";

export default function IndustriesWeServe() {
  return (
    <div className="py-10 lg:py-20 bg-[#F8F8F8]">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[65%] m-auto">
        <div className="space-y-2">
          <h4 className="text-black text-3xl md:text-4xl lg:text-5xl font-switzer font-semibold text-center">
            Industries We Serve
          </h4>
          <p className="md:text-xl font-switzer font-normal text-center">
            We create incredible apps for both: small startups and giant
            corporation - so if you have a great idea and you’re passionate
            about it, we’ll be happy to help you build the app of your dreams.
          </p>
        </div>

        <div className="md:grid grid-cols-3 gap-5 pt-10">
          <IndustriesCards
            title="Transport and logistics App"
            imgSrc="/images/mobileapp-services/industries-img-one.webp"
          />
          <IndustriesCards
            title="Enterprise development"
            imgSrc="/images/mobileapp-services/industries-img-two.webp"
          />
          <IndustriesCards
            title="Education and Training"
            imgSrc="/images/mobileapp-services/industries-img-three.webp"
          />
          <IndustriesCards
            title="Custom Apps for Marketing"
            imgSrc="/images/mobileapp-services/industries-img-four.webp"
          />
          <IndustriesCards
            title="MVP for startups"
            imgSrc="/images/mobileapp-services/industries-img-five.webp"
          />
          <IndustriesCards
            title="Entertainment Apps"
            imgSrc="/images/mobileapp-services/industries-img-six.webp"
          />
          <IndustriesCards
            title="Healthcare App Development"
            imgSrc="/images/mobileapp-services/industries-img-seven.webp"
          />
          <IndustriesCards
            title="Fitness and wellness app development"
            imgSrc="/images/mobileapp-services/industries-img-eight.webp"
          />
          <IndustriesCards
            title="Real estate App Development"
            imgSrc="/images/mobileapp-services/industries-img-nine.webp"
          />
        </div>
      </div>
    </div>
  );
}
