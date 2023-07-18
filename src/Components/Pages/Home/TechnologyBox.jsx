import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

export default function TechnologyBox(props) {
  return (
    <div className="flex gap-3 lg:gap-5 mb-4 md:mb-0">
    <div className="space-y-3 lg:space-y-4 border-2 border-white py-4 px-10">
      <h4 className="text-white  text-xl md:text-2xl lg:text-4xl font-switzer font-semibold ">
        {props.title}
      </h4>
      <h6 className="text-white text-sm md:text-base font-switzer">
        {props.para}
      </h6>
      <div className="flex items-center gap-2 animate-bounce">
        <p className="text-white text-sm md:text-base font-switzer font-semibold">
          Find out more
        </p>
        <FaAngleRight className="text-sigiYellow" />
      </div>
    </div>
  </div>
  )
}
