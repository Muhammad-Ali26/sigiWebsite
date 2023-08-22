import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SuccesStoriesCards() {
  return (
    <div className="py-7 lg:py-14">
      <div className="md:grid grid-cols-2">
        <div className="bg-[#2C2B4E] px-5 lg:px-10 py-5 lg:py-10">
          <div className="space-y-5 lg:space-y-10">
            <h4 className="text-white font-switzer font-normal">
              PPS Logistics
            </h4>
            <div>
              <p className="text-xl md:text-3xl lg:text-4xl text-white font-switzer font-semibold max-w-sm">
                An on-demand courier and packages delivery platform
              </p>
              <h6 className="text-sm text-sigiYellow font-switzer font-medium mt-4 ">
                Js / React / Redux / Electron / Mongodb
              </h6>
            </div>
            <p className=" md:text-lg lg:text-xl text-[#FFFFFF99] font-switzer max-w-md">
              In this case study, we showcase our collaboration with PPS
              Logistic, a leading courier delivery
            </p>

            <div>
              <Link
                to=""
                className={`flex items-center gap-2 text-sigiYellow cursor-pointer`}
              >
                <h4 className="font-switzer font-semibold">View case study</h4>
                <FaAngleRight />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/ui-ux-services/story-img-one.webp"
            alt="success-img"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
