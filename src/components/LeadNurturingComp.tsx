import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetLeadsComp from "./GetLeadsComp";


gsap.registerPlugin(ScrollTrigger);

const LeadNurturingComp = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 30%",
        end: "bottom 60%",
        
      },
      x: -200,
      opacity: 0,
      duration: 1.6,
      ease: "power4.out",
    });

    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 60%",
      },
      scale: 0.9,
      opacity: 0,
      duration: 1.6,
      ease: "power4.out",
    });
  }, []);

  return (
    <>
      <div className="w-full bg-white mt-25 text-white py-20 lg:px-6 flex flex-col gap-20">
        {/* Section 3: Cultivating Client Relationships */}
        <div
          ref={containerRef}
          className="lg:w-[90%] mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col lg:flex-row justify-between items-center gap-10"
        >
          <div ref={textRef} className="lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              Cultivating <span className="text-[rgb(255,70,85)]">Client Relationships</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mt-6">Lead Nurturing Philosophy</h3>
            <p className="text-sm lg:text-base text-gray-600 mt-2">
              In today’s competitive landscape, simply generating leads isn’t enough. True success lies in transforming those leads into loyal, long-term clients. This is where the art of lead nurturing comes in.
            </p>
            <p className="text-sm lg:text-base text-gray-600 mt-2">
              At <span className="font-semibold">Prospectigo</span>, we believe lead nurturing is all about fostering meaningful connections with potential clients. We move beyond generic marketing tactics and embrace a personalized approach, tailored to each individual’s needs and interests.
            </p>

            <h4 className="text-xl font-semibold text-gray-800 mt-6">Building Trust & Credibility</h4>
            <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
              <li><strong>Understanding Your Audience:</strong> We delve deeper than demographics. Through in-depth analysis and data insights, we create buyer personas that capture the hopes, challenges, and motivations of your ideal client.</li>
              <li><strong>Personalized Engagement:</strong> One-size-fits-all emails are a thing of the past. We leverage marketing automation to deliver personalized content based on a lead’s specific interactions and interests.</li>
              <li><strong>Nurturing the Journey:</strong> Lead nurturing is a marathon, not a sprint. We create a multi-stage nurturing campaign that guides leads through the buyer’s journey, addressing their concerns and providing valuable information at every touchpoint.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mt-6">The 90% Cooked Lead</h4>
            <ul className="list-disc list-inside text-base text-gray-600 space-y-2">
              <li><strong>AI Verification:</strong> Gone are the days of wasting time on irrelevant leads. We utilize advanced AI technology to filter out unqualified leads, ensuring your sales team focuses on genuinely interested prospects.</li>
              <li><strong>ISA Verification:</strong> Once AI identifies potential customers, our expert Inside Sales Associates (ISAs) take over. Through personalized outreach and qualification calls, they confirm the lead’s needs, budget, and decision-making authority.</li>
            </ul>

            <h4 className="text-xl font-semibold text-gray-800 mt-6">Effective Lead Nurturing</h4>
            <p className="text-sm lg:text-base text-gray-600">
              By combining personalized engagement, tailored communication, and a meticulous qualification process, we ensure a steady stream of high-quality leads nurtured to the point of near-decision. This empowers your sales team to focus on what they do best: closing deals and driving sustainable growth for your business.
            </p>
          </div>

          <div ref={imgRef} className="lg:w-1/2">
            <img
              width={500}
              height={500}
              src="/relation.jpg"
              alt="Client Relationships"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>

      <GetLeadsComp />
    </>
  );
};

export default LeadNurturingComp;
