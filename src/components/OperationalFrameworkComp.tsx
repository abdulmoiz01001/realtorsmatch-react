import {  useRef } from "react";
import GetLeadsComp from "./GetLeadsComp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OperationalFrameworkComp = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    sectionsRef.current.forEach((el) => {
      if (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 50%",
            toggleActions: "play none none",
            markers: true,
          },
          opacity: 0,
          y: 60,
          duration: 1,
          delay:  0.1,
          ease: "power3.out",
        });
      }
    });
  }, []);

  return (
    <div className="w-full bg-white mt-25 text-white py-20 lg:px-6 flex flex-col gap-20">

      {/* Section 1 */}
      <div
        className="lg:w-[90%] mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col justify-center items-center text-center gap-6"
        ref={(el) => {sectionsRef.current[0] = el!}}
      >
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-900">
          Transforming the <span className="text-[rgb(255,70,85)]">Real Estate Experience</span>
        </h2>
        <p className="lg:text-base text-sm text-gray-600 max-w-3xl">
          At <span className="font-semibold lg:text-md">Realtos Match</span>, we empower real estate professionals across the USA with unparalleled lead generation, transaction coordination services, and virtual assistance. Our innovative approach merges advanced technology with proven marketing strategies, designed to maximize your success in today’s dynamic market.
        </p>
      </div>

      {/* Section 2 */}
      <div
        className="lg:w-[90%] mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col lg:flex-row justify-between items-center gap-10"
        ref={(el) => {sectionsRef.current[1] = el!}}
      >
        <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-6">
          <h2 className="text-2xl lg:text-5xl font-bold leading-tight text-gray-900">
            Targeted Growth <span className="text-[rgb(255,70,85)]">Strategies</span>
          </h2>
          <ul className="text-sm lg:text-base text-gray-600 space-y-2 list-disc list-inside">
            <li><strong>Geo-Targeted Digital Campaigns:</strong> Precision-targeted ads on major social platforms and search engines.</li>
            <li><strong>SEO Mastery:</strong> Climb search rankings and drive organic traffic to your listings.</li>
            <li><strong>Content That Connects / SEM:</strong> Engaging content tailored for your market’s needs.</li>
          </ul>
          <button className="bg-[rgb(255,70,85)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">Explore Strategies</button>
        </div>
        <div className="lg:w-[45%] w-full flex justify-center items-center">
          <img width={500} height={500} src="/revolution.jpg" alt="Lead Generation" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Section 3 */}
      <div
        className="lg:w-[90%] mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col lg:flex-row-reverse justify-between items-center gap-10"
        ref={(el) => {sectionsRef.current[2] = el!}}
      >
        <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-6">
          <h2 className="text-2xl lg:text-5xl font-bold leading-tight text-gray-900">
            Automation That Feels <span className="text-[rgb(255,70,85)]">Personal</span>
          </h2>
          <ul className="text-sm lg:text-base text-gray-600 space-y-2 list-disc list-inside">
            <li><strong>Email Marketing Evolution:</strong> Tailored campaigns based on lead behavior and interests.</li>
            <li><strong>Effortless Automation:</strong> Smart workflows to nurture leads with minimal effort.</li>
          </ul>
          <button className="bg-[rgb(255,70,85)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">See How</button>
        </div>
        <div className="lg:w-[45%] w-full flex justify-center items-center">
          <img width={500} height={500} src="/auto.webp" alt="Automation" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Section 4 */}
      <div
        className="lg:w-[90%] mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col lg:flex-row justify-between items-center gap-10"
        ref={(el) => {sectionsRef.current[3] = el!}}
      >
        <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-6">
          <h2 className="text-2xl lg:text-5xl font-bold leading-tight text-gray-900">
            Proven Strategies, <span className="text-[rgb(255,70,85)]">Reimagined</span>
          </h2>
          <ul className="text-sm lg:text-base text-gray-600 space-y-2 list-disc list-inside">
            <li><strong>Proactive Outreach:</strong> Strategic cold calling that builds real conversations.</li>
            <li><strong>Referral Network Expansion:</strong> Convert local ties into real opportunities.</li>
          </ul>
          <button className="bg-[rgb(255,70,85)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">Build Trust</button>
        </div>
        <div className="lg:w-[45%] w-full flex justify-center items-center">
          <img width={500} height={500} src="/honor.jpg" alt="Outreach" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Section 5 */}
      <div
        className="lg:w-[90%] mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col lg:flex-row-reverse justify-between items-center gap-10"
        ref={(el) => {sectionsRef.current[4] = el!}}
      >
        <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-6">
          <h2 className="text-2xl lg:text-5xl font-bold leading-tight text-gray-900">
            Next-Gen <span className="text-[rgb(255,70,85)]">Real Estate Tools</span>
          </h2>
          <ul className="text-sm lg:text-base text-gray-600 space-y-2 list-disc list-inside">
            <li><strong>CRM Excellence:</strong> Robust system for nurturing leads and deals.</li>
            <li><strong>Virtual & AR Experiences:</strong> Showcase listings like never before.</li>
          </ul>
          <button className="bg-[rgb(255,70,85)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">Innovate Now</button>
        </div>
        <div className="lg:w-[45%] w-full flex justify-center items-center">
          <img width={500} height={500} src="/tech.jpg" alt="Tech" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Section 6 */}
      <div
        className="lg:w-[90%] mx-auto bg-white text-black shadow-xl rounded-2xl p-10 flex flex-col lg:flex-row justify-between items-center gap-10"
        ref={(el) => {sectionsRef.current[5] = el!}}
      >
        <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-6">
          <h2 className="text-2xl lg:text-5xl font-bold leading-tight text-gray-900">
            Performance Backed by <span className="text-[rgb(255,70,85)]">Data</span>
          </h2>
          <ul className="text-sm lg:text-base text-gray-600 space-y-2 list-disc list-inside">
            <li><strong>Data-Driven Insights:</strong> Real-time analytics for real-world performance.</li>
            <li><strong>Enhanced User Experience:</strong> Optimize every touchpoint for conversions.</li>
          </ul>
          <button className="bg-[rgb(255,70,85)] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">Keep Growing</button>
        </div>
        <div className="lg:w-[45%] w-full flex justify-center items-center">
          <img width={500} height={500} src="/imp.png" alt="Improvement" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      <GetLeadsComp />
    </div>
  );
};

export default OperationalFrameworkComp;
