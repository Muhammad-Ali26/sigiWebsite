import React from "react";

export default function WhySigi(props) {
  return (
    <div className="py-10 lg:py-20">
      <div className={`w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto p-4 ${props.bgColor} rounded-xl`}>
        <div className="py-5">
          <img
            src={props.imgSrc}
            alt="sigi-img"
            className="object-contain w-[800px] m-auto"
          />
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] 2xl:w-[65%] m-auto pt-10 lg:pt-20">
        <div className="space-y-4">
          <h4 className="text-black text-2xl md:text-4xl lg:text-5xl font-switzer font-semibold">
            Why Sigi Technologies
          </h4>
          <p className="md:text-xl font-switzer font-normal">
            We assemble engineering teams across different technologies and
            areas of expertise
          </p>
        </div>

        <div className="pt-5 md:pt-10 md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10 space-y-6 md:space-y-0">
          <div className="space-y-4">
            <div className="w-10 h-1 bg-[#004AEA]"></div>
            <h4 className="text-xl md:text-2xl lg:text-4xl font-switzer font-semibold text-black max-w-[300px]">
              Design Wizards Extraordinaire
            </h4>
            <p className="text-[#00000099] font-switzer font-normal">
               Unleash the power of our design wizards who can turn your vision
              into captivating UI/UX experiences.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-1 bg-[#004AEA]"></div>
            <h4 className="text-xl md:text-2xl lg:text-4xl font-switzer font-semibold text-black max-w-[300px]">
              User-Centric Marvels
            </h4>
            <p className="text-[#00000099] font-switzer font-normal">
               We put your users first, crafting designs that speak directly to
              their needs and desires.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-1 bg-[#004AEA]"></div>
            <h4 className="text-xl md:text-2xl lg:text-4xl font-switzer font-semibold text-black max-w-[300px]">
              Customization at its Finest
            </h4>
            <p className="text-[#00000099] font-switzer font-normal">
              Say goodbye to cookie-cutter solutions. We tailor our UI/UX
              services to fit your unique business.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-1 bg-[#004AEA]"></div>
            <h4 className="text-xl md:text-2xl lg:text-4xl font-switzer font-semibold text-black max-w-[300px]">
              Collaboration that Rocks
            </h4>
            <p className="text-[#00000099] font-switzer font-normal">
               Join forces with us and experience the magic of seamless
              collaboration and teamwork.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-1 bg-[#004AEA]"></div>
            <h4 className="text-xl md:text-2xl lg:text-4xl font-switzer font-semibold text-black max-w-[300px]">
              Embracing the Cutting Edge
            </h4>
            <p className="text-[#00000099] font-switzer font-normal">
              We stay ahead of the curve with the latest tools, techniques, and
              design trends to elevate your project.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-10 h-1 bg-[#004AEA]"></div>
            <h4 className="text-xl md:text-2xl lg:text-4xl font-switzer font-semibold text-black max-w-[300px]">
              Results that Speak Volumes
            </h4>
            <p className="text-[#00000099] font-switzer font-normal">
              Our UI/UX designs are strategically crafted to drive engagement,
              conversions, and user satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
