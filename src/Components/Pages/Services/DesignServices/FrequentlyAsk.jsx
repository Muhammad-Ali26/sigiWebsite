// @ts-nocheck
import React from "react";
import FrequentlyAskData from "./FrequentlyAskData";

export default function FrequentlyAsk() {
  return (
    <div className="py-10 lg:py-20">
      <div className="w-[90%] lg:w-[80%] m-auto ">
        <div className="space-y-4">
          <h4 className="text-black text-3xl md:text-4xl lg:text-6xl font-switzer font-semibold text-center">
            Frequently Asked Questions
          </h4>
          <p className="text-xl text-black text-center font-switzer font-normal max-w-3xl m-auto">
            We totally get it - you've got questions, and we've got answers!
            Check out these FAQs about our UI/UX design services at Sigi
            Technologies.
          </p>
        </div>

        <div className="pt-12 lg:grid grid-cols-2 gap-20 space-y-6 lg:space-y-0">
          <FrequentlyAskData
            title="What kind of mind-blowing designs do you create?"
            para="When it comes to design, we don't hold back. From stunning interfaces that make your eyes pop to seamless user experiences that leave you craving more, we've got you covered. We're all about creating designs that make your users go, Wow, this is amazing!"
            imgSrc="/images/ui-ux-services/faq-img-one.webp"
          />
          <FrequentlyAskData
            title="What's the secret recipe behind your UI/UX design process?"
            para="Our UI/UX design process is a well-oiled machine. We start by diving deep into research and understanding your users' needs and desires. Then, we unleash our creativity to craft intuitive interfaces and experiences that make your users smile from ear to ear. It's like a magical journey, and we're the wizards guiding the way"
            imgSrc="/images/ui-ux-services/faq-img-two.webp"
          />
          <FrequentlyAskData
            title="How can Sigi Technologies help me create the desired user behavior?"
            para="We've got a bag full of tricks to create the desired user behavior. Through strategic design choices, clever user flows, and irresistible visual elements, we'll guide your users down the rabbit hole of engagement. We're here to make sure they can't resist interacting with your app or website like it's the best thing since sliced bread."
            imgSrc="/images/ui-ux-services/faq-img-three.webp"
          />
          <FrequentlyAskData
            title="What's the deal with the cost of UI/UX design?"
            para="Ah, the golden question! The cost of our UI/UX design services varies depending on the scope of your project and the level of magic you desire. But fear not, we're here to work with you and find a solution that fits your budget. Let's chat, and we'll give you a personalized quote that will make you smile."
            imgSrc="/images/ui-ux-services/faq-img-four.webp"
          />
          <FrequentlyAskData
            title="Why should I choose Sigi Technologies as my UI/UX partner?"
            para="Oh, where do we start? We live and breathe UI/UX design like it's our oxygen. Our team of creative geniuses is armed with a passion for crafting unforgettable experiences. Plus, we're all about collaboration and making your vision come to life. When you choose Sigi Technologies, you're choosing a partner who's as invested in your success as you are."
            imgSrc="/images/ui-ux-services/faq-img-five.webp"
          />
          <FrequentlyAskData
            title="What's the deal with intellectual property and confidential information?"
            para="We take your intellectual property and confidential information seriously. At Sigi Technologies, we've got strict policies in place to safeguard your valuable assets. Rest assured, your secrets are safe with us. We're here to bring your ideas to life, not share them with the world."
            imgSrc="/images/ui-ux-services/faq-img-six.webp"
          />
          <FrequentlyAskData
            title="How do you recruit and maintain your talented team?"
            para="Ah, our secret weapon - our talented team! We've got an eye for spotting top-notch designers and UX gurus. We handpick the best of the best, and we keep them happy and inspired through a mix of magical potions and an awesome work environment. It's all about fostering creativity, passion, and a sprinkle of fun!"
            imgSrc="/images/ui-ux-services/faq-img-seven.webp"
          />
          <FrequentlyAskData
            title="Who will be my go-to person at Sigi Technologies?"
            para="When you embark on this epic design journey with us, you'll have a dedicated point of contact who will be your guiding light. They'll be there to answer your questions, listen to your ideas, and ensure that the entire process is as smooth as butter. Consider them your design BFF!"
            imgSrc="/images/ui-ux-services/faq-img-eight.webp"
          />
        </div>
      </div>
    </div>
  );
}
