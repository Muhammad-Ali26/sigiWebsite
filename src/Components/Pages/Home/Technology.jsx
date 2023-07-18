// @ts-nocheck
import React from 'react'
import TechnologyBox from './TechnologyBox';

export default function Technology() {
  return (
    <section className="bg-[#001235] py-10 lg:py-20">
    <div className="w-[90%] md:w-[85%]  2xl:w-[68%] m-auto space-y-12">
      <div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-switzer font-semibold">
          Technology
        </h2>
        <p className="text-white lg:text-xl font-switzer mt-4">
          We assemble engineering teams across different technologies and
          areas of expertise:
        </p>
      </div>

      <div className="lg:grid grid-cols-3">
        <div className="space-y-6">
          <TechnologyBox
            title="Flutter"
            para="Architect next-gen applications that works across all platform with a single codebase."
          />
          <TechnologyBox
            title="Flutter"
            para="Architect next-gen applications that works across all platform with a single codebase."
          />
          <TechnologyBox
            title="Flutter"
            para="Architect next-gen applications that works across all platform with a single codebase."
          />
        </div>

        <div className="relative">
          <img
            src="/images/technology-img.webp"
            alt="technolgy-img"
            className="w-[280px] h-[600px] m-auto object-contain"
          />

          <img
            src="/images/android-img.webp"
            alt="icon"
            className="absolute top-40 left-1/2 -translate-x-1/2 w-[100px] h-[100px] hover:w-[150px] hover:h-[150px] duration-150"
          />

          <div className="absolute top-72 left-1/2 -translate-x-1/2 ">
            <h4 className="text-3xl text-[#112A5A] font-switzer font-semibold text-center">
              Mobile
            </h4>
            <h4 className="text-3xl text-[#112A5A] font-switzer font-semibold text-center">
              App
            </h4>
            <h4 className="text-3xl text-[#112A5A] font-switzer font-semibold text-center">
              Development
            </h4>
          </div>
        </div>

        <div className="space-y-6">
          <TechnologyBox
            title="Flutter"
            para="Architect next-gen applications that works across all platform with a single codebase."
          />
          <TechnologyBox
            title="Flutter"
            para="Architect next-gen applications that works across all platform with a single codebase."
          />
          <TechnologyBox
            title="Flutter"
            para="Architect next-gen applications that works across all platform with a single codebase."
          />
        </div>
      </div>
    </div>
  </section>
  )
}
