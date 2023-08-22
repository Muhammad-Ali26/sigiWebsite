import React from "react";

export default function OurClients() {
  return (
    <div className="py-10 lg:py-20 bg-[#F8F8F8]">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[65%] m-auto">
        <h4 className="text-black text-3xl md:text-4xl lg:text-5xl font-switzer font-semibold">
          Our Clients
        </h4>

        <div className="pt-8 lg:pt-16 grid grid-cols-2 md:grid-cols-5 items-center gap-x-10 md:gap-x-10 lg:gap-x-16 gap-y-10 lg:gap-y-20">
          <div>
            <img
              src="/images/ui-ux-services/fomino.webp"
              alt="fomino"
              className="object-contain w-60 m-auto"
            />
          </div>
          <div>
            <img
              src="/images/ui-ux-services/antrak.webp"
              alt="fomino"
              className="object-contain"
            />
          </div>
          <div>
            <img
              src="/images/ui-ux-services/truck-express.webp"
              alt="fomino"
              className="object-contain"
            />
          </div>
          <div>
            <img
              src="/images/ui-ux-services/shiping.webp"
              alt="fomino"
              className="object-contain"
            />
          </div>
          <div>
            <img
              src="/images/ui-ux-services/express-ease.webp"
              alt="fomino"
              className="object-contain"
            />
          </div>

          <div>
            <img
              src="/images/ui-ux-services/mussico.webp"
              alt="fomino"
              className="object-contain"
            />
          </div>
          <div>
            <img
              src="/images/ui-ux-services/pps.webp"
              alt="fomino"
              className="object-contain w-[150px] m-auto"
            />
          </div>
          <div>
            <img
              src="/images/ui-ux-services/kiwik-mart.webp"
              alt="fomino"
              className="object-contain"
            />
          </div>
          <div>
            <img
              src="/images/ui-ux-services/vincash.webp"
              alt="fomino"
              className="object-contain"
            />
          </div>
          <div>
            <img
              src="/images/ui-ux-services/selam.webp"
              alt="fomino"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
