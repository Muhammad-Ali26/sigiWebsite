import React from "react";
import { FaAngleRight } from "react-icons/fa";
import AboutUsData from "./AboutUsData";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

export default function AboutUs() {
  return (
    <section>
      <Navbar />

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto pb-10 2xl:pb-20">
        <div className="pt-24  md:pt-32 lg:pt-40">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-switzer font-medium">
            About us
          </h2>
        </div>
        {/* About Section One  */}
        <div className="lg:grid grid-cols-2 gap-x-10 pt-10 lg:pt-16">
          <div>
            <div className="w-[100%] h-[2px] bg-black"></div>
            <h4 className="text-lg text-black font-switzer font-semibold uppercase mt-2">
              The Company
            </h4>
          </div>

          <div>
            <p className="lg:text-xl 2xl:text-2xl font-switzer mt-2 lg:mt-0">
              Sigi Technologies started its journey in 2016 with a team of six.
              Today, it has grown into a full-cycle software development
              company. We are proud to be an employee-centric company with the
              highest team satisfaction in the industry, independent analyst
              recognition, and an ever-growing list of delighted clients who
              work with us again and again.
            </p>
          </div>

          <div className="pt-8 lg:pt-16">
            <div className="bg-officeOne bg-center bg-cover h-[440px] flex justify-center items-center">
              <div className="">
                <h4 className="text-white text-4xl font-switzer font-medium">
                  Lahore
                </h4>
                <p className="text-white text-lg font-switzer font-medium text-center">
                  Pakistan
                </p>
              </div>
            </div>
            <div className="space-y-3 mt-4">
              <h4 className="text-formText text-xl md:text-2xl 2xl:text-4xl font-switzer font-medium">
                Lahore, Pakistan
              </h4>
              <h6 className="text-black text-xl md:text-2xl 2xl:text-4xl font-switzer font-medium">
                Main Office
              </h6>
              <div className="flex items-center gap-2">
                <p className="text-black text-sm md:text-base font-switzer">
                  Show on map
                </p>
                <FaAngleRight className="text-sigiYellow" />
              </div>
            </div>
          </div>
          <div className="pt-8 lg:pt-16">
            <div className="bg-officeTwo bg-center bg-cover h-[440px] flex justify-center items-center">
              <div className="">
                <h4 className="text-white text-4xl font-switzer font-medium">
                  London
                </h4>
                <p className="text-white text-lg font-switzer font-medium text-center">
                  United Kingdom
                </p>
              </div>
            </div>
            <div className="space-y-3 mt-4">
              <h4 className="text-formText text-xl md::text-2xl 2xl:text-4xl font-switzer font-medium">
                London, United Kingdom
              </h4>
              <h6 className="text-black text-xl md:text-2xl 2xl:text-4xl font-switzer font-medium">
                International Office
              </h6>
              <div className="flex items-center gap-2">
                <p className="text-black text-sm md:text-base font-switzer">
                  Show on map
                </p>
                <FaAngleRight className="text-sigiYellow" />
              </div>
            </div>
          </div>
        </div>

        {/* About Section Two  */}
        <div className="lg:grid grid-cols-2 gap-x-10 pt-10 lg:pt-20">
          <div>
            <div className="w-[100%] h-[2px] bg-black"></div>
            <h4 className="text-lg text-black font-switzer font-semibold uppercase mt-2">
              WHY SIGI TECH
            </h4>
          </div>
          <div>
            <p className="lg:text-xl 2xl:text-2xl font-switzer mt-2 lg:mt-0">
              Key strengths that our customers value the most in our cooperation
            </p>
          </div>
        </div>

        <AboutUsData
          imgSrc="/images/about/Team.webp"
          keys="01"
          title="A Team of Top Developers"
          para="To build effective teams for clients, we handpick the most talented local engineers. We follow a rigorous recruitment process, evaluating hundreds of candidates for each open position. At the same time, more than 50% of our developers come from our annual Academy program, which has a 0.5% acceptance-to-hire rate."
          btn="Meet the team"
        />
        <AboutUsData
          imgSrc="/images/about/Experience.webp"
          keys="02"
          title="08 Years of Experience"
          para="Customers value professionalism, work ethics, and dependability as is evidenced by our longstanding experience. For over 18+ years, we have earned a reputation for excellence and we work hard every day to defend it."
          btn="See case studies"
        />
        <AboutUsData
          imgSrc="/images/about/Culture.webp"
          keys="03"
          title="Strong Company Culture"
          para="To build effective teams for clients, we handpick the most talented local engineers. We follow a rigorous recruitment process, evaluating hundreds of candidates for each open position. At the same time, more than 50% of our developers come from our annual Academy program, which has a 0.5% acceptance-to-hire rate."
          btn="See open positions"
        />
        <AboutUsData
          imgSrc="/images/about/Aim.webp"
          keys="04"
          title="We Aim for the Future"
          para="We have already become strategic partners for the majority of our clients. They rely on our developers' professional expertise the same way that they would rely on their own in-house employees. On average, our customers stay with us for more than three years already. We are especially delighted to still continue partnership with our very first customer from 2005!"
          btn="More reasons why choose us"
        />
      </div>

      <div className="">
        <div className="h-[2px] bg-sigiYellow"></div>
        <div className="py-10 flex flex-col justify-center items-center space-y-5">
          <h4 className="text-2xl 2xl:text-4xl font-switzer font-medium">
            Want to learn more?
          </h4>
          <p className="text-center lg:text-xl font-switzer text-paraText">
            We would love to hear from you! <br /> Contact us now and we will
            answer you today
          </p>
          <button className="font-switzer font-medium lg:text-xl bg-sigiYellow text-white px-10 py-3 border-2 border-sigiYellow hover:text-sigiYellow hover:bg-white duration-150">
            Get in touch
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
}
