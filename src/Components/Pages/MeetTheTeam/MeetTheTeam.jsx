// @ts-nocheck
import React from "react";
import TeamCards from "./TeamCards";
import TeamImages from "./TeamImages";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

export default function MeetTheTeam() {
  return (
    <section>
      <Navbar />

      <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto pt-24  md:pt-32 lg:pt-40">
        <div className="">
          <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-switzer font-medium">
            Meet the team
          </h2>
        </div>

        <div className="lg:grid grid-cols-2 gap-x-10 pt-10 lg:pt-16">
          <div>
            <div className="w-[100%] h-[2px] bg-black"></div>
            <h4 className="text-lg text-sigiYellow font-switzer font-semibold uppercase mt-2">
              Our Leadership Team
            </h4>
          </div>

          <div>
            <p className="lg:text-xl 2xl:text-2xl font-switzer mt-2 lg:mt-0">
              Our leadership team makes sure that operations run smoothly. As a
              team, we work hard to make sure that our cooperation remains
              hassle-free for you and we frequently go the extra mile to give
              our customers the best possible experience.
            </p>
          </div>
        </div>

        <div className="md:grid lg:grid-cols-4 md:grid-cols-2 md:gap-12 lg:gap-6 2xl:gap-16 pt-16 lg:pt-24 space-y-16 md:space-y-0">
          <div className="">
            <div className="bg-teamBg1 w-full h-[280px] relative">
              <img
                src="/images/team/zeeshannawaz.webp"
                alt="owner"
                className="w-[210px] h-[320px] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-black font-switzer font-medium text-xl">
                Zeeshan Nawaz
              </h4>
              <p className="text-paraText font-switzer uppercase">
                Co-Founder & CEO
              </p>
            </div>
          </div>

          <div>
            <div className="bg-teamBg2 w-full h-[280px] relative">
              <img
                src="/images/team/shahnawaz.webp"
                alt="owner"
                className="w-[270px] h-[320px] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-black font-switzer font-medium text-xl">
                Shah Nawaz
              </h4>
              <p className="text-paraText font-switzer uppercase">
                Co-Founder & CEO
              </p>
            </div>
          </div>

          <div className="">
            <div className="bg-teamBg1 w-full h-[280px] relative">
              <img
                src="/images/team/ahmadBhai.webp"
                alt="hr"
                className="w-[210px] h-[320px] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-black font-switzer font-medium text-xl">
                Chacha G
              </h4>
              <p className="text-paraText font-switzer uppercase">Manager Hr</p>
            </div>
          </div>

          <div className="">
            <div className="bg-teamBg4 w-full h-[280px] relative">
              <img
                src="/images/team/asadBhai.webp"
                alt="project-manager"
                className="w-[210px] h-[320px] absolute bottom-0 left-1/2 -translate-x-1/2 object-cover"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-black font-switzer font-medium text-xl">
                Asad Ali
              </h4>
              <p className="text-paraText font-switzer uppercase">
                Project Manager
              </p>
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-x-10 pt-10 lg:pt-16 2xl:pt-24">
          <div>
            <div className="w-[100%] h-[2px] bg-black"></div>
            <h4 className="text-lg text-sigiYellow font-switzer font-semibold uppercase mt-2">
              Our Engineers
            </h4>
          </div>

          <div>
            <p className="lg:text-xl 2xl:text-2xl font-switzer mt-2 lg:mt-0">
              All our developers went to top-tier universities in Pakistan and
              90 percent have Master's degrees in Computer Science. Many are
              certified in at least one technology and have shared their
              knowledge with others during internal courses and tech meetups.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 gap-3 py-10 lg:py-16 2xl:pt-24">
          <TeamImages imgSrc="/images/team/asadBhai.webp" bg="bg-teamBg4" />
          <TeamImages imgSrc="/images/team/arslan.webp" bg="bg-teamBg5" />
          <TeamImages imgSrc="/images/team/waqar.webp" bg="bg-teamBg6" />
          <TeamImages imgSrc="/images/team/intehar.webp" bg="bg-teamBg7" />
          <TeamImages imgSrc="/images/team/hamza.webp" bg="bg-teamBg8" />
          <TeamImages imgSrc="/images/team/aqib.webp" bg="bg-teamBg9" />
          <TeamImages imgSrc="/images/team/danish.webp" bg="bg-teamBg10" />
          <TeamImages imgSrc="/images/team/sana.webp" bg="bg-teamBg11" />
          <TeamImages imgSrc="/images/team/aqsa.webp" bg="bg-teamBg6" />
          <TeamImages imgSrc="/images/team/abdullah.webp" bg="bg-teamBg11" />
          <TeamImages imgSrc="/images/team/ali.webp" bg="bg-teamBg4" />
          <TeamImages imgSrc="/images/team/ayesha.webp" bg="bg-teamBg5" />
          <TeamImages imgSrc="/images/team/saira.webp" bg="bg-teamBg7" />
          <TeamImages imgSrc="/images/team/kiran.webp" bg="bg-teamBg4" />
          <TeamImages imgSrc="/images/team/uzair.webp" bg="bg-teamBg5" />
          <TeamImages imgSrc="/images/team/tufail.webp" bg="bg-teamBg8" />
          <TeamImages imgSrc="/images/team/arslan.webp" bg="bg-teamBg5" />
          <TeamImages imgSrc="/images/team/asadBhai.webp" bg="bg-teamBg4" />
          <TeamImages imgSrc="/images/team/intehar.webp" bg="bg-teamBg7" />
          <TeamImages imgSrc="/images/team/waqar.webp" bg="bg-teamBg6" />
          <TeamImages imgSrc="/images/team/aqib.webp" bg="bg-teamBg9" />
          <TeamImages imgSrc="/images/team/hamza.webp" bg="bg-teamBg8" />
          <TeamImages imgSrc="/images/team/sana.webp" bg="bg-teamBg11" />
          <TeamImages imgSrc="/images/team/danish.webp" bg="bg-teamBg10" />
        </div>
      </div>

      <div className="bg-sigiBlue">
        <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto py-10 2xl:py-16">
          <div className="lg:grid grid-cols-3 gap-10">
            <TeamCards
              keys="01"
              title="Ownership and initiative"
              para="We hire the best people we can find and put our heart and soul in all the projects we do, because we prefer doing things excellently or not doing them at all."
            />
            <TeamCards
              keys="02"
              title="Learning always"
              para="We hire the best people we can find and put our heart and soul in all the projects we do, because we prefer doing things excellently or not doing them at all."
            />
            <TeamCards
              keys="03"
              title="Striving for excellence"
              para="We hire the best people we can find and put our heart and soul in all the projects we do, because we prefer doing things excellently or not doing them at all."
            />
          </div>
        </div>
      </div>

      <div className="bg-[#F4F4F4]">
        <div className="w-[90%] lg:w-[80%] 2xl:w-[68%] m-auto py-10 2xl:py-16">
          <h4 className="text-center text-3xl lg:text-5xl font-switzer font-medium">
            In case you’d like to learn more
          </h4>

          <div className="md:mt-5 lg:mt-10 lg:grid grid-cols-2 gap-10 space-y-6 lg:space-y-0">
            <div className="bg-learnOne h-[380px] bg-cover bg-center relative before:bg-linerOne before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[380px]">
              <div className="flex flex-col justify-between h-[380px] p-6 relative">
                <h4 className="text-white text-2xl 2xl:text-4xl font-switzer font-medium max-w-[420px]">
                  We are always looking for talented peoples
                </h4>
                <p className="text-white text-2xl font-switzer font-medium max-w-[480px]">
                  Leverage flexible and scalable software solutions to support
                  your company's growth
                </p>
              </div>
            </div>

            <div className="bg-learnTwo h-[380px] bg-cover bg-center relative before:bg-linerOne before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[380px]">
              <div className="flex flex-col justify-between h-[380px] p-6 relative">
                <h4 className="text-white text-2xl 2xl:text-4xl font-switzer font-medium max-w-[400px]">
                  Scale your business with scalable software architecture
                </h4>
                <p className="text-white text-2xl font-switzer font-medium max-w-[480px]">
                  Leverage flexible and scalable software solutions to support
                  your company's growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 text-center space-y-6">
        <h4 className="text-2xl md:text-4xl font-switzer font-medium">
          Also, check us out
        </h4>
        <p className="text-paraText text-xl font-switzer font-medium">
          in <span className="underline cursor-pointer">Facebook</span> and{" "}
          <span className="underline cursor-pointer">Instagram</span>{" "}
        </p>
      </div>

      <Footer />
    </section>
  );
}
