import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TimelineOne() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <div className="w-[2px] h-full bg-gray-400 border border-dashed hidden lg:block absolute top-0 lg:left-1/2 -translate-x-1/2"></div>

      <div className="lg:grid grid-cols-2 gap-20 space-y-10 lg:space-y-0 lg:pl-0">
        <div className="space-y-7 md:space-y-14 lg:space-y-20">
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Challenges faced by Havoc Entertainment
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Users often struggle to find reliable and talented DJs for their
              events. They need a platform that simplifies the process of
              finding and hiring DJs, ensuring a memorable and enjoyable
              experience for their guests.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              The Havoc Entertainment advantage
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Havoc Entertainment offers a comprehensive mobile app solution
              that addresses the unique needs of users seeking DJ services. With
              its user-friendly interface and extensive network of talented DJs,
              users can easily find, book, and engage with DJs for their events.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-havoc/timeline-img-one.webp"
            alt="timeline"
            className="w-[500px] m-auto object-contain"
          />
        </div>

        <div className="space-y-7 md:space-y-14 lg:space-y-20">
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Wide range of DJ services
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Havoc Entertainment provides a wide range of DJ services to cater
              to different event types and preferences. Users can explore DJs
              specializing in weddings, corporate events, parties, festivals,
              and more, ensuring the perfect fit for their specific
              requirements.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              DJ profiles and portfolios
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The app showcases detailed DJ profiles and portfolios, allowing
              users to evaluate DJs based on their experience, skills, musical
              genres, and past performances. Users can review photos, videos,
              and audio samples to make an informed decision when hiring a DJ.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-havoc/timeline-img-two.webp"
            alt="timeline"
            className="w-[400px] m-auto object-contain"
          />
        </div>

        <div className="space-y-7 md:space-y-14 lg:space-y-20">
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Seamless booking process
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Havoc Entertainment streamlines the booking process, enabling
              users to request availability and receive quotes directly through
              the app. Users can easily communicate with DJs, discuss event
              details, and finalize bookings, ensuring a hassle-free and
              efficient experience.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Event planning tools
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              The app offers event planning tools that assist users in
              organizing their events effectively. Users can create event
              timelines, share playlists and song preferences with DJs, and
              collaborate seamlessly to ensure a memorable and personalized
              experience.
            </p>
          </div>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-havoc/timeline-img-three.webp"
            alt="timeline"
            className="w-[500px] m-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
