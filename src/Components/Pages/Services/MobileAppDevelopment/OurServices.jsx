import React from "react";
import OurServicesCards from "../DesignServices/OurServicesCards";

export default function OurServices() {
  return (
    <div className="py-10 lg:py-20">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[65%] m-auto">
        <h4 className="text-black text-3xl md:text-4xl lg:text-5xl font-switzer font-semibold">
          Our services
        </h4>

        <div className="pt-10 md:grid md:grid-cols-2 lg:grid-cols-3">
          <OurServicesCards
            title="Mobile-App-Development-Service"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/mobileapp-services/services-img-one.webp"
          />
          <OurServicesCards
            title="iOS-App-Development"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/mobileapp-services/services-img-two.webp"
          />
          <OurServicesCards
            title="Android App Development"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/mobileapp-services/services-img-three.webp"
          />
          <OurServicesCards
            title="Fully-Customized-Mobile-App-Solutions"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/mobileapp-services/services-img-four.webp"
          />
          <OurServicesCards
            title="Web App Development"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/mobileapp-services/services-img-five.webp"
          />
          <OurServicesCards
            title="Hybrid-Native App Development"
            para="Work with our outstanding engineers and integrate them into your processes. Work with our outstanding engineers and integrate them into your processes."
            imgSrc="/images/mobileapp-services/services-img-six.webp"
          />
        </div>
      </div>
    </div>
  );
}
