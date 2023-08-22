import React from "react";

export default function Timeline() {
  return (
    <div className=" lg:pt-20">
      <div className="w-full h-[2px] bg-[#FFFFFF33]  hidden lg:block">
        <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto relative">
          <div className="w-6 h-6 bg-sigiYellow rounded-full outline outline-[#FFFFFF33] absolute -top-3 left"></div>
          <div className="w-6 h-6 bg-sigiYellow rounded-full outline outline-[#FFFFFF33] absolute -top-3 left-[39%]"></div>
          <div className="w-6 h-6 bg-sigiYellow rounded-full outline outline-[#FFFFFF33] absolute -top-3 left-[79%]"></div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto space-y-7 md:space-y-16">
        <div className="lg:grid grid-cols-3 lg:gap-40 2xl:gap-60 pt-10 space-y-6 lg:space-y-0">
          <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl text-white font-switzer font-medium">
              Idea
            </h4>
            <p className="text-white font-switzer">
              We're all ears! We'll dive deep into your business, industry,
              competition, and target audiences. Think of it as a design
              detective mission to unravel what makes you unique.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl text-white font-switzer font-medium">
            Wireframes
            </h4>
            <p className="text-white font-switzer">
              The ball is in our court now. We'll lay the groundwork, strategize
              like pros, and develop an action plan that will pave the way for
              design awesomeness. Buckle up!
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl md:text-3xl text-white font-switzer font-medium">
            UI/UX Design
            </h4>
            <p className="text-white font-switzer">
              This is where the real magic happens. We'll let our creativity run
              wild, crafting custom designs that align perfectly with your needs
              and budget. Collaborating with you, we'll fine-tune every pixel
              until it's pure design perfection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
