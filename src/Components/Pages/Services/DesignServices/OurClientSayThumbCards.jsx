import React from "react";

export default function OurClientSayThumbCards() {
  return (
    <div className="mt-10 flex gap-5">
      <div>
        <img
          src="/images/ui-ux-services/client-say-thumb-img.webp"
          alt="thumb-img"
          className="w-[80px] rounded-full"
        />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-switzer font-medium text-black">
          Marco Khan
        </h4>
        <p className="text-[#00000099] font-switzer font-normal">
          Co Founder / Fomino
        </p>
        <img
          src="/images/switzerland.webp"
          alt="switzerland"
          className="w-[150px]"
        />
      </div>
    </div>
  );
}
