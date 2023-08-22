// @ts-nocheck
import React from "react";
import Navbar from "../Home/Navbar";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CaseStudyCards from "./CaseStudyCards";

export default function CaseStudies() {
  return (
    <section>
      <Navbar />

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto pt-24 md:pt-32 lg:pt-40 pb-20">
        <div className="space-y-6 relative">
          <h2 className="text-3xl lg:text-6xl 2xl:text-7xl font-switzer font-semibold text-black border-b-2 border-sigiYellow w-fit ">
            Case Studies
          </h2>
          <p className="text-lg md:text-2xl lg:text-4xl text-black font-switzer font-medium max-w-4xl">
            We have a proven track record of building high quality solutions for
            customers all over the world.
          </p>
        </div>
        <div className="absolute top-20 right-96 hidden 2xl:block">
          <img
            src="/images/case-studies/hero-img.webp"
            alt="case-study"
            className="w-[500px]"
          />
        </div>
      </div>

      <div>
        <Tabs align="center">
          <TabList className="bg-[#F4F4F4] py-4">
            <Tab
              _selected={{ color: "#FF8C1D" }}
              fontSize="2xl"
              fontWeight="semibold"
              color="#00000066"
            >
              All
            </Tab>
            <Tab
              _selected={{ color: "#FF8C1D" }}
              fontSize="2xl"
              fontWeight="semibold"
              color="#00000066"
            >
              Device
            </Tab>
            <Tab
              _selected={{ color: "#FF8C1D" }}
              fontSize="2xl"
              fontWeight="semibold"
              color="#00000066"
            >
              Technology
            </Tab>
            <Tab
              _selected={{ color: "#FF8C1D" }}
              fontSize="2xl"
              fontWeight="semibold"
              color="#00000066"
            >
              Location
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel padding="0px">
              <CaseStudyCards
                title="Pps Logistics"
                para="Revolutionizing Courier Delivery in Panama with DBS Code System"
                color="bg-[#202053]"
                imgSrc="/images/case-studies/casestudy-img-one.webp"
                midImgSrc="/images/case-studies/casestudy-center-img-one.webp"
                order={false}
                left="left-1/2"
                width="w-[360px]"
                height="h-[700px]"
                borderColor="border-white"
                textColor="text-white"
                link="/casestudy_pps"
              />
              <CaseStudyCards
                title="Farm Sharing"
                para="Revolutionizing farming and agriculture"
                color="bg-[#AA9CFF]"
                imgSrc="/images/case-studies/casestudy-img-two.webp"
                midImgSrc="/images/case-studies/casestudy-center-img-two.webp"
                order={true}
                left="left-1/2"
                width="w-[360px]"
                height="h-[700px]"
                borderColor="border-white"
                textColor="text-white"
                link="/casestudy_farmsharing"
              />
              <CaseStudyCards
                title="Finanza"
                para="Using your Income and Expenses: Get Financially Organized"
                color="bg-[#2F59AE]"
                bgColor="bg-[#33157599]"
                imgSrc="/images/case-studies/casestudy-img-three.webp"
                midImgSrc="/images/case-studies/casestudy-center-img-three.webp"
                order={false}
                left="left-[57%]"
                width="w-[980px]"
                height="h-[560px]"
                borderColor="border-white"
                textColor="text-white"
                link="/casestudy_finanza"
              />
              <CaseStudyCards
                title="Truck Express"
                para="Deliver parcels like a pro with Truck Xpress"
                color="bg-[#8C5CF2]"
                imgSrc="/images/case-studies/casestudy-img-four.webp"
                midImgSrc="/images/case-studies/casestudy-center-img-four.webp"
                order={false}
                left="left-1/2"
                textColor="text-white"
                left="left-[50%]"
                width="w-[350px]"
                height="h-[700px]"
                borderColor="border-white"
                link="/casestudy_truckexpress"
              />
              <CaseStudyCards
                title="Fomino"
                para="Delivering culinary delights with ease"
                color="bg-[#249756]"
                imgSrc="/images/case-studies/casestudy-img-five.webp"
                midImgSrc="/images/case-studies/casestudy-center-img-five.webp"
                order={true}
                textColor="text-white"
                left="left-[43%]"
                width="w-[610px]"
                height="h-[380px]"
                borderColor="border-white"
                link="/casestudy_fomino"
              />
              <CaseStudyCards
                title="Pacifrica"
                para="Streamlining Operations with DBS Code System"
                color="bg-[#3D698C]"
                imgSrc="/images/case-studies/casestudy-img-six.webp"
                midImgSrc="/images/case-studies/casestudy-center-img-six.webp"
                order={true}
                textColor="text-white"
                left="left-[40%]"
                width="w-[960px]"
                height="h-[605px]"
                borderColor="border-white"
                link="/casestudy_pacifrica"
              />
              <CaseStudyCards
                title="Havoc - Entertainment"
                para="Spinning Love Stories One Beat At a Time"
                color="bg-[#FFF6F6]"
                imgSrc="/images/case-studies/casestudy-img-seven.webp"
                midImgSrc="/images/case-studies/casestudy-center-img-seven.webp"
                order={false}
                textColor="text-black"
                left="left-[55%]"
                width="w-[740px]"
                height="h-[425px]"
                borderColor="border-black"
                link="/casestudy_havoc"
              />
              <CaseStudyCards
                title="Kwik e Mart"
                para="Revolutionizing online grocery shopping"
                color="bg-[#01C7B8]"
                imgSrc="/images/case-studies/casestudy-img-eight.webp"
                midImgSrc="/images/case-studies/casestudy-center-img-eight.webp"
                textColor="text-white"
                order={true}
                left="left-[43%]"
                width="w-[550px]"
                height="h-[535px]"
                borderColor="border-white"
                link="/casestudy_kiwikmart"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  );
}
