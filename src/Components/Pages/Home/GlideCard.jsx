import React from "react";

export default function GlideCard() {
  return (
    <div className="p-8 space-y-8 border-2 border-black">
      <div className="space-y-4 md:space-y-8">
        <h4 className="text-xl lg:text-2xl font-switzer font-medium">
          ‘Amazing work culture, very supportive colleagues’
        </h4>
        <p className="text-paraText font-switzer font-light">
          At Sigi Technologies, I've embarked on an extraordinary journey. Their
          unwavering commitment to innovation, employee growth, and work-life
          balance sets them apart. I'm proud to contribute to such a remarkable
          company, making a meaningful impact. Excited for the future at Sigi
          Technologies!
        </p>
      </div>

      <div className="flex gap-5 items-center">
        <img
          src="/images/careers/test-img.webp"
          alt="testimonial-img"
          className="w-[60px] h-[60px] rounded-full"
        />
        <div className="space-y-1">
          <h4 className="font-switzer font-semibold">Muhammad Uzair</h4>
          <p className="text-paraText text-sm font-switzer font-light">
            Flutter Developer
          </p>
        </div>
      </div>
    </div>
  );
}
