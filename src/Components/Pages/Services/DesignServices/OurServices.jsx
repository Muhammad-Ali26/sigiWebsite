// @ts-nocheck
import React from "react";
import OurServicesCards from "./OurServicesCards";

export default function OurServices() {
  return (
    <div className="py-10 lg:py-20">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[65%] m-auto">
        <h4 className="text-black text-3xl md:text-4xl lg:text-5xl font-switzer font-semibold">
          Our services
        </h4>

        <div className="pt-10 md:grid md:grid-cols-2 lg:grid-cols-3">
          <OurServicesCards
            title="UX Research"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/ui-ux-services/services-img-one.webp"
          />
          <OurServicesCards
            title="UI/UX Design Services"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/ui-ux-services/services-img-two.webp"
          />
          <OurServicesCards
            title="UX Development Services"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/ui-ux-services/services-img-three.webp"
          />
          <OurServicesCards
            title="Mobile UI/UX Design"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/ui-ux-services/services-img-four.webp"
          />
          <OurServicesCards
            title="UI/UX Testing Services"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/ui-ux-services/services-img-five.webp"
          />
            <OurServicesCards
                title="Prototyping"
                para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
                imgSrc="/images/ui-ux-services/services-img-six.webp"
            />
        </div>
      </div>
    </div>
  );
}
