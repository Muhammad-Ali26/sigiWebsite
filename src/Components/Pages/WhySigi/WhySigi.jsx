import React from "react";
import Navbar from "../Home/Navbar";
import WhySigiData from "./WhySigiData";
import Footer from "../Home/Footer";

export default function page() {
  return (
    <section>
      <Navbar />

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto pt-24  md:pt-32 lg:pt-40">
        <div className="pt-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-switzer font-medium">
            Why Sigi Technologies?
          </h2>
        </div>

        <div className="lg:grid grid-cols-2 gap-x-10 py-10 lg:py-20">
          <div>
            <div className="w-[100%] h-[2px] bg-black"></div>
            <h4 className="text-lg text-black font-switzer font-semibold uppercase mt-2">
              The Company
            </h4>
          </div>

          <div>
            <p className="lg:text-xl 2xl:text-2xl font-switzer mt-2 lg:mt-0">
              We are proud to have worked with Glenshire Group, AllFor Care
              Services, NutriFoods USA, Antrak Technologies Inc. We have helped
              dozens of startups and established businesses with modern
              technologies.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/video.webp" alt="video" />
        </div>

        <div className="py-7 lg:py-10 2xl:py-20">
          <div className="grid grid-cols-5 gap-3">
            <img
              src="/images/Goodfirm.webp"
              alt="goodfirm"
              className="w-[100px] h-[78px] object-contain"
            />
            <img
              src="/images/Clutch.webp"
              alt="goodfirm"
              className="w-[100px] h-[78px] object-contain"
            />
            <img
              src="/images/App Future.webp"
              alt="goodfirm"
              className="w-[100px] h-[78px] object-contain"
            />
            <img
              src="/images/Mobile App Daily.webp"
              alt="goodfirm"
              className="w-[100px] h-[78px] object-contain"
            />
            <img
              src="/images/Sortlist.webp"
              alt="goodfirm"
              className="w-[100px] h-[78px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="bg-sigiYellow h-[2px]"></div>

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto">
        <WhySigiData
          keys="01"
          title="Individual Approach to Each Client"
          para="Customers enjoy the attention and care they get at a small boutique agency. Our short decision making processes give us the flexibility to create individual propositions for our clients, custom-tailored to their needs."
          imgSrc="/images/whySigi/Team.webp"
          order={false}
        />
        <WhySigiData
          keys="02"
          title="Strategic Partnerships"
          para="At Binary Studio, we provide professional services and solutions and we often go the extra mile to become our client's long-term, strategic partner. We dedicate a great deal of attention to meeting our clients' needs today and we are ready to support their growing business needs tomorrow."
          imgSrc="/images/whySigi/Partnership.webp"
          order={true}
        />
        <WhySigiData
          keys="03"
          title="Individual Approach to Each Client"
          para="Customers enjoy the attention and care they get at a small boutique agency. Our short decision making processes give us the flexibility to create individual propositions for our clients, custom-tailored to their needs."
          imgSrc="/images/whySigi/Team.webp"
          order={false}
        />
        <WhySigiData
          keys="04"
          title="Strategic Partnerships"
          para="At Binary Studio, we provide professional services and solutions and we often go the extra mile to become our client's long-term, strategic partner. We dedicate a great deal of attention to meeting our clients' needs today and we are ready to support their growing business needs tomorrow."
          imgSrc="/images/whySigi/Team.webp"
          order={true}
        />
        <WhySigiData
          keys="05"
          title="Individual Approach to Each Client"
          para="Customers enjoy the attention and care they get at a small boutique agency. Our short decision making processes give us the flexibility to create individual propositions for our clients, custom-tailored to their needs."
          imgSrc="/images/whySigi/Team.webp"
          order={false}
        />
        <WhySigiData
          keys="06"
          title="Strategic Partnerships"
          para="At Binary Studio, we provide professional services and solutions and we often go the extra mile to become our client's long-term, strategic partner. We dedicate a great deal of attention to meeting our clients' needs today and we are ready to support their growing business needs tomorrow."
          imgSrc="/images/whySigi/Team.webp"
          order={true}
        />
      </div>

      <div className="">
        <div className="h-[2px] bg-sigiYellow"></div>
        <div className="py-10 flex flex-col justify-center items-center space-y-5">
          <h4 className="text-2xl 2xl:text-4xl font-switzer font-medium">
            Drop us a line!
          </h4>
          <p className="text-center lg:text-xl font-switzer text-paraText">
            We could keep talking, but we'd rather hear your questions. <br />
            Contact us now and we will answer you today
          </p>
          <button className="font-switzer font-medium lg:text-xl bg-sigiYellow text-white px-10 py-3 border-2 border-sigiYellow hover:text-sigiYellow hover:bg-white duration-150">
            Get in touch
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}
