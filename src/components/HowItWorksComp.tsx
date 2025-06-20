
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GetLeadsComp from "./GetLeadsComp";
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HowItWorksComp = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const imgRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    sectionsRef.current.forEach((section, index) => {
      const textEl = textRefs.current[index];
      const imgEl = imgRefs.current[index];

      if (textEl) {
        gsap.from(textEl, {
          scrollTrigger: {
            trigger: section,
            start: "10% 50%",
            end: "bottom 50%",
            
          },
          x: -200,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        });
      }

      if (imgEl) {
        gsap.from(imgEl, {
          scrollTrigger: {
            trigger: section,
            start: "10% 60%",
            end: "bottom 60%",
            
          },
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        });
      }
    });
  }, []);

  return (
    <div className="w-full flex flex-col mt-25 items-center gap-16 justify-center min-h-screen bg-gray-100 p-6">
      {/* Banner */}
      <div className="w-[80%] h-full  flex justify-between items-center text-black bg-white shadow-lg rounded-lg p-8">
        <div className="w-[45%]">
          <h1 className="text-5xl font-semibold">
            You Seal the <span className="text-[rgb(255,70,85)]">Deal</span>,<br />
            We’ll Take It from There
          </h1>
        </div>
        <div className="w-[45%] animate-img">
          <img
            width={500}
            height={500}
            src="/deal.webp"
            alt="How It Works"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Section 1 */}
      <div
        ref={(el) => {sectionsRef.current[0] = el!}}
        className="w-[80%] h-full  mx-auto bg-black text-white shadow-xl rounded-2xl p-10 flex flex-col lg:flex-row justify-between items-center gap-10"
      >
        <div ref={(el) => {textRefs.current[0] = el!}} className="lg:w-[50%]">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Behind the <span className="text-[rgb(255,70,85)]"> PROCESS</span>
          </h2>
          <p className="text-lg text-gray-300">A Sneak Peek Behind the Curtain</p>
          <p className="text-base text-gray-400">
            At <span className="text-white font-semibold">Realtors Match</span>,{` we don’t just
            connect clients with agents — we craft personalized journeys. Here's a glimpse into
            our innovative matchmaking process:`}
          </p>
          <ul className="space-y-4 text-base text-gray-300 mt-4">
            <li>🔍 <span className="font-semibold text-white">1. Understanding Your Needs:</span><br />From budget to lifestyle.</li>
            <li>🤝 <span className="font-semibold text-white">2. Smart Agent Matching:</span><br />Matched with the best agent for you.</li>
            <li>📅 <span className="font-semibold text-white">3. Hassle-Free Scheduling:</span><br />Seamless appointments.</li>
            <li>📊 <span className="font-semibold text-white">4. Transparent Progress:</span><br />Track everything in real-time.</li>
            <li>🏡 <span className="font-semibold text-white">5. Closing Made Simple:</span><br />We guide you till the end.</li>
          </ul>
        </div>
        <div ref={(el) => {imgRefs.current[0] = el!}} className="lg:w-[45%] animate-img">
          <img
            width={500}
            height={500}
            src="/works-home.webp"
            alt="How It Works"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={(el) => {sectionsRef.current[1] = el!}}
        className="w-[80%] h-full  mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-10"
      >
        <div ref={(el) => {textRefs.current[1] = el!}} className="lg:w-[50%]">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            The Engine Behind <span className="text-[rgb(255,70,85)]">Our Success</span>
          </h2>
          <p className="text-base text-gray-600">
            At <span className="font-semibold">Realtors Match</span>, our operational framework empowers agents across the U.S.
          </p>
          <Link to="/operational-framework">
            <button className="bg-[rgb(255,70,85)] mt-5 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">
              Discover More
            </button>
          </Link>
        </div>
        <div ref={(el) => {imgRefs.current[1] = el!}} className="lg:w-[45%] animate-img">
          <img
            width={500}
            height={500}
            src="/works-operational.webp"
            alt="Operational Framework"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div
        ref={(el) => {sectionsRef.current[2] = el!}}
        className="w-[80%] h-full  mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col lg:flex-row-reverse justify-between items-center gap-10"
      >
        <div ref={(el) => {textRefs.current[2] = el!}} className="lg:w-[50%]">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Connecting You with <span className="text-[rgb(255,70,85)]">Ready Buyers</span>
          </h2>
          <p className="text-base text-gray-600">
            We generate leads using advanced targeting and real-time data.
          </p>
          <Link to="/lead-gen-strategies">
            <button className="bg-[rgb(255,70,85)] mt-5 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">
              Explore Strategies
            </button>
          </Link>
        </div>
        <div ref={(el) => {imgRefs.current[2] = el!}} className="lg:w-[45%] animate-img">
          <img
            width={500}
            height={500}
            src="/renting-property.webp"
            alt="Lead Generation Strategies"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 4 */}
      <div
        ref={(el) => {sectionsRef.current[3] = el!}}
        className="w-[80%] h-full  mx-auto bg-black text-white shadow-xl rounded-2xl p-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-10"
      >
        <div ref={(el) => {textRefs.current[3] = el!}} className="lg:w-[50%]">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
            Turning Interest into <span className="text-[rgb(255,70,85)]">Loyalty</span>
          </h2>
          <p className="text-base text-white">
            Nurturing leads means creating trust — not just follow-ups.
          </p>
          <Link to="/lead-nurturing">
            <button className="bg-[rgb(255,70,85)] mt-5 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">
              See How We Nurture
            </button>
          </Link>
        </div>
        <div ref={(el) => {imgRefs.current[3] = el!}} className="lg:w-[45%] animate-img">
          <img
            width={500}
            height={500}
            src="/loyalty.jpg"
            alt="Lead Nurturing Strategy"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Section 5 */}
      <div
        ref={(el) => {sectionsRef.current[4] = el!}}
        className="w-[80%] h-full  mx-auto bg-black text-white shadow-xl rounded-2xl p-10 flex flex-col lg:flex-row-reverse justify-between items-center gap-10"
      >
        <div ref={(el) => {textRefs.current[4] = el!}} className="lg:w-[50%]">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
            Strategic Partnering <span className="text-[rgb(255,70,85)]">Model</span>
          </h2>
          <p className="text-base text-white">
            We don’t just work with you — we partner with you.
          </p>
          <Link to="/partner-playbook">
            <button className="bg-[rgb(255,70,85)] mt-5 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">
              Partner With Us
            </button>
          </Link>
        </div>
        <div ref={(el) => {imgRefs.current[4] = el!}} className="lg:w-[45%] animate-img">
          <img
            width={500}
            height={500}
            src="/model.webp"
            alt="Partner Playbook"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      <GetLeadsComp />
    </div>
  );
};

export default HowItWorksComp;
