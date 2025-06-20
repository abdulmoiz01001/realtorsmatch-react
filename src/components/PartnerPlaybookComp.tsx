import { useRef } from "react";
import GetLeadsComp from "./GetLeadsComp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PartnerPlaybookComp = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(section1Ref.current, {
      scrollTrigger: {
        trigger: section1Ref.current,
        start: "top 50%",
        end: "bottom 60%",
        toggleActions: "play none none none",
        // markers: true,
      },
      opacity: 0,
      y: 60,
      duration: 1,
      delay: 0.1,
      ease: "power3.out",
    });

    gsap.from(section2Ref.current, {
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 50%",
        end: "bottom 60%",
        toggleActions: "play none none none",
        // markers: true,
      },
      opacity: 0,
      y: 60,
      duration: 1,
      delay: 0.1,
      ease: "power3.out",
    });

    gsap.from(section3Ref.current, {
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "top 50%",
        end: "bottom 60%",
        toggleActions: "play none none none",
        // markers: true,
      },
      opacity: 0,
      y: 60,
      duration: 1,
      delay: 0.1,
      ease: "power3.out",
    });

    gsap.from(section4Ref.current, {
      scrollTrigger: {
        trigger: section4Ref.current,
        start: "top 50%",
        end: "bottom 60%",
        toggleActions: "play none none none",
        // markers: true,
      },
      opacity: 0,
      y: 60,
      duration: 1,
      delay: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div className="lg:w-[90%] mx-auto mt-30 bg-white text-black shadow-xl rounded-2xl flex flex-col gap-12">
        {/* 1. Communication That Connects */}
        <div
          ref={section1Ref}
          className="flex flex-col h-full lg:flex-row justify-between items-center gap-10 p-10"
        >
          <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              Communication That{" "}
              <span className="text-[rgb(255,70,85)]">Connects</span>
            </h2>
            <p className="text-sm lg:text-base text-gray-600">
              Success in real estate begins with clarity. Our Partner Playbook
              champions transparent, timely communication. We ensure alignment
              on every goal, deadline, and update—empowering agents and clients
              to move forward with confidence and mutual understanding.
            </p>
          </div>
          <div className="lg:w-[45%] w-full flex justify-center items-center">
            <img
              width={500}
              height={500}
              src="/communicate.webp"
              alt="Communication"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* 2. Empowerment Through Support */}
        <div
          ref={section2Ref}
          className="flex flex-col h-full lg:flex-row-reverse justify-between items-center gap-10 p-10"
        >
          <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              Empowerment Through{" "}
              <span className="text-[rgb(255,70,85)]">Support</span>
            </h2>
            <p className="text-sm lg:text-base text-gray-600">
              We go beyond services—we stand beside our partners with strategic
              resources, insights, and real-time support. Whether it’s enhancing
              a property listing or navigating a tough negotiation, our shared
              success is rooted in uplifting each other.
            </p>
          </div>
          <div className="lg:w-[45%] w-full flex justify-center items-center">
            <img
              width={500}
              height={500}
              src="/support.jpg"
              alt="Support"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* 3. Consistency Through Every Stage */}
        <div
          ref={section3Ref}
          className="flex flex-col h-full lg:flex-row justify-between items-center gap-10 p-10"
        >
          <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              Consistency Through{" "}
              <span className="text-[rgb(255,70,85)]">Every Stage</span>
            </h2>
            <p className="text-sm lg:text-base text-gray-600">
              Real estate deals are complex and lengthy—but our commitment is
              continuous. From first contact to closing, we stay connected,
              proactive, and dependable, ensuring a smooth experience for both
              professionals and their clients.
            </p>
          </div>
          <div className="lg:w-[45%] w-full flex justify-center items-center">
            <img
              width={500}
              height={500}
              src="/consis.png"
              alt="Consistency"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* 4. Innovation as a Standard */}
        <div
          ref={section4Ref}
          className="flex flex-col h-full lg:flex-row-reverse justify-between items-center gap-10 p-10"
        >
          <div className="lg:w-[50%] w-full flex flex-col justify-start items-start space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
              Innovation as a <span className="text-[rgb(255,70,85)]">Standard</span>
            </h2>
            <p className="text-sm lg:text-base text-gray-600">
              We embrace change to lead the market. With a focus on emerging
              tech and agile strategies, we equip partners to grow, adapt, and
              excel—whether it’s leveraging automation, virtual tours, or
              next-gen CRM systems.
            </p>
          </div>
          <div className="lg:w-[45%] w-full flex justify-center items-center">
            <img
              width={500}
              height={500}
              src="/ino.png"
              alt="Innovation"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <GetLeadsComp />
    </>
  );
};

export default PartnerPlaybookComp;
