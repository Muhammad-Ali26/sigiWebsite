import React from 'react'

export default function TimelineTwo() {
  return (
    <div className=" lg:pt-10">
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
          Development
          </h4>
          <p className="text-white font-switzer">
            We're all ears! We'll dive deep into your business, industry,
            competition, and target audiences. Think of it as a design
            detective mission to unravel what makes you unique.
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="text-2xl md:text-3xl text-white font-switzer font-medium">
          Testing
          </h4>
          <p className="text-white font-switzer">
            The ball is in our court now. We'll lay the groundwork, strategize
            like pros, and develop an action plan that will pave the way for
            design awesomeness. Buckle up!
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="text-2xl md:text-3xl text-white font-switzer font-medium">
          Launch
          </h4>
          <p className="text-white font-switzer">
            This is where the real magic happens. We'll let our creativity run
            wild, crafting custom designs that align perfectly with your needs
            and budget. Collaborating with you, we'll fine-tune every pixel
            until it's pure design perfection.
          </p>
        </div>
      </div>

      <div>
        <p className="text-white text-center  md:text-xl lg:text-2xl font-switzer font-medium">
          Ready to let your design do all the talking? Join us on this
          thrilling 4-step journey and let's make your business shine like
          never before!
        </p>
      </div>

      <div className="flex justify-center">
        <button className="text-white bg-sigiYellow flex justify-center items-center gap-x-5 py-2 px-6 rounded-sm border border-sigiYellow hover:bg-transparent hover:text-sigiYellow duration-200">
          <div className="w-2 h-2 rounded-full bg-white shadow animate-ping"></div>
          <span className="font-medium font-switzer md:text-xl">
            Get in touch
          </span>
        </button>
      </div>
    </div>
  </div>
  )
}
