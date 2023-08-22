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
        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-budget/timeline-img-one.webp"
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
              Challenges faced by users
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Users often struggle with effectively managing their budgets and
              financial goals. They need a user-friendly solution that
              simplifies the process, provides insights, and helps them stay on
              track with their financial aspirations.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              The Budget App advantage
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Budget App offers a comprehensive set of features that make
              budgeting and goal management effortless. With its intuitive
              interface and powerful tools, users can easily create budgets,
              track expenses, set savings goals, and make informed financial
              decisions.
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-budget/timeline-img-two.webp"
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
              Streamlined budget creation
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Budget App simplifies the budget creation process, allowing users
              to set up personalized budgets based on their income, expenses,
              and financial priorities. They can categorize expenses, set
              spending limits, and monitor their progress effortlessly.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Expense tracking and analysis
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Budget App enables users to track their expenses with ease. They
              can categorize transactions, view detailed spending reports, and
              gain insights into their spending patterns. This information helps
              users make informed decisions and identify areas for improvement.
            </p>
          </div>
        </div>

        <div className="" data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="/images/case-study-budget/timeline-img-three.webp"
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
              Goal setting and progress tracking
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              With Budget App, users can set financial goals such as saving for
              a vacation, purchasing a car, or paying off debt. The app provides
              tools to track progress, visualize milestones, and stay motivated
              on their financial journey.
            </p>
          </div>
          <div
            className="space-y-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h4 className="text-2xl md:text-3xl lg:text-4xl font-switzer font-medium">
              Alerts and notifications
            </h4>
            <p className="md:text-xl font-switzer text-paraText">
              Budget App sends timely alerts and notifications to keep users
              informed about upcoming bill payments, budget limits, and goal
              milestones. These reminders help users stay accountable and avoid
              overspending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
