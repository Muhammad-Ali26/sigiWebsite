import React from "react";

export default function OurClientSayCard() {
  return (
    <div className="pt-5 md:pt-10">
      <div className="md:grid grid-cols-2">
        <div>
          <img
            src="/images/ui-ux-services/client-say-img.webp"
            alt="client-img"
            className="w-full h-full"
          />
        </div>
        <div className="bg-[#FF8C1D] px-5 lg:px-10 py-5 md:py-10 lg:py-20">
          <div className="space-y-6 lg:space-y-16">
            <h4 className="text-xl md:text-2xl lg:text-4xl text-white font-switzer font-medium max-w-[470px]">
              “ Sigi Technologies is a huge part of why we've been able to be so
              productive, so quickly
            </h4>
            <p className="text-lg md:text-xl lg:text-2xl text-white font-switzer font-medium max-w-md">
              Marco Khan - Co Founder & CTO / FOMINO FOOD DELIVERY
            </p>

            <img
              src="/images/ui-ux-services/fomino-white-logo.webp"
              alt="fomino"
              className="object-contain w-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
