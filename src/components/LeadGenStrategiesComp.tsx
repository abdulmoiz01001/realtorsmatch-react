import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetLeadsComp from "./GetLeadsComp";

gsap.registerPlugin(ScrollTrigger);

const LeadGenStrategiesComp = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    sectionsRef.current.forEach((section) => {
      const text = section.querySelector(".animate-text");
      const img = section.querySelector(".animate-image");

      if (text) {
        gsap.from(text, {
          scrollTrigger: {
            trigger: section,
            start: "top 30%",
            end: "bottom 60%",
            
          },
          x: -200,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        });
      }

      if (img) {
        gsap.from(img, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 60%",
          },
          scale: 0.85,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        });
      }
    });
  }, []);

  return (
    <>
      <div className="w-full bg-white mt-25 text-white py-20 px-6 flex flex-col gap-20">

        {/* Section 1: Revolutionizing Real Estate */}
        <div
          ref={(el) => { sectionsRef.current[0] = el! }}
          className="w-[90%] h-full mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col justify-center items-center text-center gap-6"
        >
          <div className="animate-text">
            <h2 className="text-4xl font-bold text-gray-900">
              Revolutionizing <span className="text-[rgb(255,70,85)]">Real Estate</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl">
              At <span className="font-semibold">Realtos Match</span>, we empower real estate professionals across the USA with unparalleled lead generation, transaction coordination services, and virtual assistance. Our innovative approach merges advanced technology with proven marketing strategies, designed to maximize your success in today’s dynamic market.
            </p>
          </div>
        </div>

        {/* Section 2: Business Growth */}
        <div
          ref={(el) => { sectionsRef.current[1] = el! }}
          className="w-[90%] h-full mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col gap-6"
        >
          <div className="animate-text">
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              BUSINESS <span className="text-[rgb(255,70,85)]">GROWTH</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800">Innovative Lead Generation Strategies</h3>
            <p className="text-base text-gray-600">
              In today’s fiercely competitive business landscape, effective lead generation is paramount to sustained growth and success. At Prospectigo, we employ a diverse array of innovative strategies tailored to attract and engage potential clients. By leveraging cutting-edge technologies and keen market insights, we are committed to delivering high-quality leads that fuel business expansion.
            </p>

            <h4 className="text-xl font-semibold text-gray-800">Understanding the Landscape</h4>
            <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
              <li><strong>Embracing Innovation:</strong> By leveraging state-of-the-art AI analytics and predictive modeling techniques, we proactively identify and capitalize on emerging opportunities.</li>
              <li><strong>Personalization at Scale:</strong> Through advanced segmentation and dynamic content delivery, we ensure that each interaction resonates with prospects on a personal level, driving engagement and conversion.</li>
              <li><strong>Content Excellence:</strong> In lead generation, content reigns supreme. We position clients as thought leaders with compelling blogs, videos, and webinars, nurturing relationships from interest to conversion.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800">Multi-channel Integration</h4>
            <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
              <li><strong>Social Media:</strong> Leveraging platforms such as Facebook, LinkedIn, Twitter, and Instagram, we engage with audiences through targeted content, community building, and strategic advertising campaigns.</li>
              <li><strong>Paid Advertising:</strong> Through platforms like Google Ads, Facebook Ads, and LinkedIn Ads, we employ highly targeted campaigns to reach potential clients at various stages of the buyer’s journey, driving traffic and conversions.</li>
              <li><strong>Other Means of Generating Leads:</strong> We expand reach through influencer partnerships, affiliate marketing, and strategic alliances. By delivering consistent messaging, we maximize visibility and engagement across touchpoints in the customer journey.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800">Data-driven Optimization</h4>
            <p className="text-base text-gray-600">
              Central to our lead generation strategy is a commitment to data-driven decision-making. Through rigorous analysis and ongoing optimization, we continuously refine our approaches to maximize ROI and conversion rates. From A/B testing ad creatives to fine-tuning targeting parameters, we leverage data insights to drive continuous improvement and deliver measurable results for our clients.
            </p>
          </div>
        </div>

        {/* Section 3: img */}
        <div
          ref={(el) => { sectionsRef.current[2] = el! }}
          className="lg:w-[90%] h-full h-[300px] mx-auto flex justify-center items-center"
        >
          <div className="w-[50%] h-full animate-img">
            <img
              width={500}
              height={500}
              src="/growth.jpg"
              alt="Partner Playbook"
              className="w-full h-full rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      <GetLeadsComp />
    </>
  );
};

export default LeadGenStrategiesComp;
