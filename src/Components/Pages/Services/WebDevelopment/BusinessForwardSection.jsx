import React from "react";
import BusinessForwardSectionCards from "./BusinessForwardSectionCards";

export default function BusinessForwardSection() {
  return (
    <div className="py-10 lg:py-20">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto p-4 bg-[#F8F8F8] rounded-xl">
        <div className="py-5">
          <img
            src="images/webdevelopment-services/why-sigi-img.webp"
            alt="sigi-img"
            className="object-contain w-[800px] m-auto"
          />
        </div>
      </div>

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto">
        <div className="pt-10 lg:pt-20 space-y-4">
          <h4 className="text-black text-center text-2xl md:text-4xl lg:text-6xl font-switzer font-semibold">
            Website Development Services to Propel Your Business Forward
          </h4>
          <p className="text-black text-center  md:text-xl font-normal">
            Unlock the potential of your business with our comprehensive range
            of website development services. We have the expertise to transform
            your great ideas into profitable business solutions that will take
            your online presence to new heights.
          </p>
        </div>

        <div className="pt-10 lg:pt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20">
          <BusinessForwardSectionCards
            title="Web Portal Development"
            para="Technologies we use: HTML5, CSS3, JavaScript, AngularJS, React, Node.js Expand your digital footprint with customer-focused web portals that provide all the necessary functionalities to help your business thrive in the online world. We'll create engaging portals that enhance user experience and drive growth."
            imgSrc="/images/webdevelopment-services/business-forward-img-one.webp"
            bgColor="bg-[#F0536C]"
          />
          <BusinessForwardSectionCards
            title="Custom Web Development"
            para="Technologies we use: HTML5, CSS3, JavaScript, PHP, Laravel, Python, Django
            Accelerate your business processes, improve productivity, and multiply your revenue with fully-customized websites tailored specifically to your unique requirements. Our expert team will build a website that sets you apart from the competition."
            imgSrc="/images/webdevelopment-services/business-forward-img-two.webp"
            bgColor="bg-[#5A8BC8]"
          />
          <BusinessForwardSectionCards
            title="E-commerce Development"
            para="Technologies we use: HTML5, CSS3, JavaScript, PHP, Magento, Shopify, WooCommerce
            Simplify online shopping, increase your revenue, and attract a larger customer base with our robust e-commerce solutions. We'll create a seamless online shopping experience that delights your customers and drives conversions."
            imgSrc="/images/webdevelopment-services/business-forward-img-three.webp"
            bgColor="bg-[#FDB828]"
          />
          <BusinessForwardSectionCards
            title="CMS Web Development"
            para="Technologies we use: HTML5, CSS3, JavaScript, AngularJS, React, Node.js Expand your digital footprint with customer-focused web portals that provide all the necessary functionalities to help your business thrive in the online world. We'll create engaging portals that enhance user experience and drive growth."
            imgSrc="/images/webdevelopment-services/business-forward-img-four.webp"
            bgColor="bg-[#5392F0]"
          />
          <BusinessForwardSectionCards
            title="Enterprise Web Development"
            para="Technologies we use: HTML5, CSS3, JavaScript, PHP, ASP.NET, Java, Spring
            Empower your enterprise with a highly functional ERP web solution that enhances team collaborations, improves user engagement, and delivers transparent results. We'll create a web platform that streamlines your business operations"
            imgSrc="/images/webdevelopment-services/business-forward-img-five.webp"
            bgColor="bg-[#5AB4C8]"
          />
          <BusinessForwardSectionCards
            title="Website testing and quality"
            para="Our dedicated SQA team ensures the highest standards of quality for your website. We conduct thorough testing, including functional testing, performance testing, security testing, and usability testing, to ensure a flawless user experience"
            imgSrc="/images/webdevelopment-services/business-forward-img-six.webp"
            bgColor="bg-[#59C9E9]"
          />
        </div>
      </div>
    </div>
  );
}
