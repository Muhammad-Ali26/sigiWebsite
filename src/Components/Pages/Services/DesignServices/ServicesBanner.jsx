import React from "react";
import ContactForm from "./ContactForm";

export default function ServicesBanner(props) {
  return (
    <div className="lg:grid grid-cols-2 gap-20 space-y-10 lg:space-y-0">
      <div className="space-y-8 lg:space-y-16 flex flex-col justify-center">
        <h2 className="text-black text-3xl md:text-5xl lg:text-6xl 2xl:text-[66px] font-switzer font-semibold max-w-[300px] md:max-w-md lg:max-w-xl">
          {props.title}
        </h2>

        <div className="grid grid-cols-5 gap-5">
          <img
            src="/images/goodfirm.webp"
            alt="goodfirm"
            className="w-[80px] h-[80px] object-contain"
          />
          <img
            src="/images/clutch.webp"
            alt="goodfirm"
            className="w-[80px] h-[80px] object-contain"
          />
          <img
            src="/images/app future.webp"
            alt="goodfirm"
            className="w-[80px] h-[80px] object-contain"
          />
          <img
            src="/images/mobile app daily.webp"
            alt="goodfirm"
            className="w-[80px] h-[80px] object-contain"
          />
          <img
            src="/images/sortlist.webp"
            alt="goodfirm"
            className="w-[80px] h-[80px] object-contain"
          />
        </div>

        <div>
          <p className="md:text-xl text-black font-switzer ">
            Sigi Technologies leverages exceptional software engineering talent
            to digitalize small and medium-sized businesses.
          </p>
        </div>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
}
