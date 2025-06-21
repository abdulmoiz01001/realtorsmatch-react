// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GetLeadsComp from "./GetLeadsComp";
// import { Link } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// const HowItWorksComp = () => {
//   const section1Text = useRef(null);
//   const section1Img = useRef(null);
//   const section2Text = useRef(null);
//   const section2Img = useRef(null);
//   const section3Text = useRef(null);
//   const section3Img = useRef(null);
//   const section4Text = useRef(null);
//   const section4Img = useRef(null);
//   const section5Text = useRef(null);
//   const section5Img = useRef(null);



//   useGSAP(() => {
//     gsap.from(section1Text.current, {
//       scrollTrigger: {
//         trigger: section1Text.current,
//         start: "30% 50%",
//         end: "bottom 50%",
//         // markers: true,
//       },
//       x: -200,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });

//     gsap.from(section1Img.current, {
//       scrollTrigger: {
//         trigger: section1Img.current,
//         start: "20% 60%",
//         end: "bottom 60%",
//         // markers: true,
//       },
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });

//     gsap.from(section2Text.current, {
//       scrollTrigger: {
//         trigger: section2Text.current,
//         start: "30% 50%",
//         end: "bottom 50%",
//         // markers: true,
//       },
//       x: -200,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });

//     gsap.from(section2Img.current, {
//       scrollTrigger: {
//         trigger: section2Img.current,
//         start: "20% 60%",
//         end: "bottom 60%",
//         // markers: true,
//       },
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });

//     gsap.from(section3Text.current, {
//       scrollTrigger: {
//         trigger: section3Text.current,
//         start: "30% 50%",
//         end: "bottom 50%",
//         // markers: true,
//       },
//       x: -200,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });

//     gsap.from(section3Img.current, {
//       scrollTrigger: {
//         trigger: section3Img.current,
//         start: "20% 60%",
//         end: "bottom 60%",
//         // markers: true,
//       },
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });

//     gsap.from(section4Text.current, {
//       scrollTrigger: {
//         trigger: section4Text.current,
//         start: "30% 50%",
//         end: "bottom 50%",
//         // markers: true,
//       },
//       x: -200,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });

//     gsap.from(section4Img.current, {
//       scrollTrigger: {
//         trigger: section4Img.current,
//         start: "20% 60%",
//         end: "bottom 60%",
//         // markers: true,
//       },
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });

//     gsap.from(section5Text.current, {
//       scrollTrigger: {
//         trigger: section5Text.current,
//         start: "30% 50%",
//         end: "bottom 50%",
//         // markers: true,
//       },
//       x: -200,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });

//     gsap.from(section5Img.current, {
//       scrollTrigger: {
//         trigger: section5Img.current,
//         start: "20% 60%",
//         end: "bottom 60%",
//         // markers: true,
//       },
//       scale: 0.8,
//       opacity: 0,
//       duration: 1.5,
//       ease: "power4.out",
//     });
//   }, []);

//   return (
//     <div className="w-full flex flex-col mt-25 items-center gap-16 justify-center min-h-screen bg-gray-100 lg:p-6">
//       {/* Banner */}
//       <div className="lg:w-[80%] h-full flex justify-between items-center text-black bg-white shadow-lg rounded-lg p-8">
//         <div className="w-[45%]">
//           <h1 className="lg:text-5xl text-xl font-semibold">
//             You Seal the <span className="text-[rgb(255,70,85)]">Deal</span>,<br />
//             We’ll Take It from There
//           </h1>
//         </div>
//         <div className="w-[45%] animate-img">
//           <img
//             width={500}
//             height={500}
//             src="/deal.webp"
//             alt="How It Works"
//             className="w-full h-auto"
//           />
//         </div>
//       </div>

//       {/* Section 1 */}
//       <div className="lg:w-[80%] h-full mx-auto bg-black text-white shadow-xl lg:rounded-2xl p-10 flex flex-col lg:flex-row justify-between items-center gap-10">
//         <div ref={section1Text} className="flex flex-col items-start gap-4 lg:w-[50%]">
//           <h2 className="lg:text-5xl text-2xl font-bold lg:leading-tight">
//             Behind the <span className="text-[rgb(255,70,85)]">PROCESS</span>
//           </h2>
//           <p className="lg:text-lg text-sm text-gray-300">A Sneak Peek Behind the Curtain</p>
//           <p className="text-sm lg:text-base text-gray-400">
//             At <span className="text-white font-semibold">Realtors Match</span>, we don’t just
//             connect clients with agents — we craft personalized journeys. Here's a glimpse into
//             our innovative matchmaking process:
//           </p>
//           <ul className="space-y-4 text-sm lg:text-base text-gray-300 mt-4">
//             <li>🔍 <span className="font-semibold text-white">1. Understanding Your Needs:</span><br />From budget to lifestyle.</li>
//             <li>🤝 <span className="font-semibold text-white">2. Smart Agent Matching:</span><br />Matched with the best agent for you.</li>
//             <li>📅 <span className="font-semibold text-white">3. Hassle-Free Scheduling:</span><br />Seamless appointments.</li>
//             <li>📊 <span className="font-semibold text-white">4. Transparent Progress:</span><br />Track everything in real-time.</li>
//             <li>🏡 <span className="font-semibold text-white">5. Closing Made Simple:</span><br />We guide you till the end.</li>
//           </ul>
//         </div>
//         <div ref={section1Img} className="lg:w-[45%] animate-img">
//           <img src="/works-home.webp" alt="How It Works" className="w-full h-auto rounded-lg shadow-md" />
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="lg:w-[80%] h-full mx-auto bg-white text-black shadow-xl lg:rounded-2xl p-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
//         <div ref={section2Text} className="lg:w-[50%]">
//           <h2 className="lg:text-5xl text-2xl font-bold lg:leading-tight text-gray-900">
//             The Engine Behind <span className="text-[rgb(255,70,85)]">Our Success</span>
//           </h2>
//           <p className="text-sm lg:text-base text-gray-600">
//             At <span className="font-semibold">Realtors Match</span>, our operational framework empowers agents across the U.S.
//           </p>
//           <Link to="/operational-framework">
//             <button className="bg-[rgb(255,70,85)] mt-5 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">
//               Discover More
//             </button>
//           </Link>
//         </div>
//         <div ref={section2Img} className="lg:w-[45%] animate-img">
//           <img src="/works-operational.webp" alt="Operational Framework" className="w-full h-auto rounded-lg shadow-md" />
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className="lg:w-[80%] h-full mx-auto bg-white text-black shadow-xl lg:rounded-2xl p-10 flex flex-col lg:flex-row-reverse justify-between items-center gap-10">
//         <div ref={section3Text} className="lg:w-[50%]">
//           <h2 className="lg:text-5xl text-2xl font-bold lg:leading-tight text-gray-900">
//             Connecting You with <span className="text-[rgb(255,70,85)]">Ready Buyers</span>
//           </h2>
//           <p className="text-sm lg:text-base text-gray-600">
//             We generate leads using advanced targeting and real-time data.
//           </p>
//           <Link to="/lead-gen-strategies">
//             <button className="bg-[rgb(255,70,85)] mt-5 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">
//               Explore Strategies
//             </button>
//           </Link>
//         </div>
//         <div ref={section3Img} className="lg:w-[45%] animate-img">
//           <img src="/renting-property.webp" alt="Lead Generation Strategies" className="w-full h-auto rounded-lg shadow-md" />
//         </div>
//       </div>

//       {/* Section 4 */}
//       <div className="lg:w-[80%] h-full mx-auto bg-black text-white shadow-xl lg:rounded-2xl p-10 flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
//         <div ref={section4Text} className="lg:w-[50%]">
//           <h2 className="lg:text-5xl text-2xl font-bold lg:leading-tight text-white">
//             Turning Interest into <span className="text-[rgb(255,70,85)]">Loyalty</span>
//           </h2>
//           <p className="text-sm lg:text-base text-white">
//             Nurturing leads means creating trust — not just follow-ups.
//           </p>
//           <Link to="/lead-nurturing">
//             <button className="bg-[rgb(255,70,85)] mt-5 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">
//               See How We Nurture
//             </button>
//           </Link>
//         </div>
//         <div ref={section4Img} className="lg:w-[45%] animate-img">
//           <img src="/loyalty.jpg" alt="Lead Nurturing Strategy" className="w-full h-auto rounded-lg shadow-md" />
//         </div>
//       </div>

//       {/* Section 5 */}
//       <div className="lg:w-[80%] h-full mx-auto bg-black text-white shadow-xl lg:rounded-2xl p-10 flex flex-col lg:flex-row-reverse justify-between items-center gap-10">
//         <div ref={section5Text} className="lg:w-[50%]">
//           <h2 className="lg:text-5xl text-2xl font-bold lg:leading-tight text-white">
//             Strategic Partnering <span className="text-[rgb(255,70,85)]">Model</span>
//           </h2>
//           <p className="text-sm lg:text-base text-white">
//             We don’t just work with you — we partner with you.
//           </p>
//           <Link to="/partner-playbook">
//             <button className="bg-[rgb(255,70,85)] mt-5 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">
//               Partner With Us
//             </button>
//           </Link>
//         </div>
//         <div ref={section5Img} className="lg:w-[45%] animate-img">
//           <img src="/model.webp" alt="Partner Playbook" className="w-full h-auto rounded-lg shadow-md" />
//         </div>
//       </div>

//       <GetLeadsComp />
//     </div>
//   );
// };

// export default HowItWorksComp;


import { useRef, useCallback, type JSX } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import GetLeadsComp from "./GetLeadsComp";

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

interface SectionType {
  bg: string;
  heading: string;
  subheading: string;
  content?: JSX.Element;
  image: string;
  link?: {
    to: string;
    label: string;
  };
  reverse?: boolean;
}

const HowItWorksComp = () => {
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  const animateSection = useCallback((textEl: Element, imgEl: Element) => {
    gsap.from(textEl, {
      scrollTrigger: {
        trigger: textEl,
        start: "30% 50%",
        end: "bottom 50%",
      },
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.from(imgEl, {
      scrollTrigger: {
        trigger: imgEl,
        start: "20% 60%",
        end: "bottom 60%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  useGSAP(() => {
    if (typeof window === "undefined") return;
    textRefs.current.forEach((textEl, i) => {
      if (textEl && imgRefs.current[i]) {
        animateSection(textEl, imgRefs.current[i]!);
      }
    });
  }, [animateSection]);

  const sections: SectionType[] = [
    {
      bg: "bg-black text-white",
      heading: "Behind the PROCESS",
      subheading: "A Sneak Peek Behind the Curtain",
      content: (
        <ul className="space-y-4 text-sm lg:text-base text-gray-300 mt-4">
          <li>🔍 <span className="font-semibold text-white">1. Understanding Your Needs:</span><br />From budget to lifestyle.</li>
          <li>🤝 <span className="font-semibold text-white">2. Smart Agent Matching:</span><br />Matched with the best agent for you.</li>
          <li>📅 <span className="font-semibold text-white">3. Hassle-Free Scheduling:</span><br />Seamless appointments.</li>
          <li>📊 <span className="font-semibold text-white">4. Transparent Progress:</span><br />Track everything in real-time.</li>
          <li>🏡 <span className="font-semibold text-white">5. Closing Made Simple:</span><br />We guide you till the end.</li>
        </ul>
      ),
      image: "/works-home.webp",
    },
    {
      bg: "bg-white text-black",
      heading: "The Engine Behind Our Success",
      subheading: "Our operational framework empowers agents across the U.S.",
      link: { to: "/operational-framework", label: "Discover More" },
      image: "/works-operational.webp",
    },
    {
      bg: "bg-white text-black",
      heading: "Connecting You with Ready Buyers",
      subheading: "We generate leads using advanced targeting and real-time data.",
      link: { to: "/lead-gen-strategies", label: "Explore Strategies" },
      image: "/renting-property.webp",
      reverse: true,
    },
    {
      bg: "bg-black text-white",
      heading: "Turning Interest into Loyalty",
      subheading: "Nurturing leads means creating trust — not just follow-ups.",
      link: { to: "/lead-nurturing", label: "See How We Nurture" },
      image: "/loyalty.jpg",
      reverse: true,
    },
    {
      bg: "bg-black text-white",
      heading: "Strategic Partnering Model",
      subheading: "We don’t just work with you — we partner with you.",
      link: { to: "/partner-playbook", label: "Partner With Us" },
      image: "/model.webp",
      reverse: true,
    },
  ];

  return (
    <div className="w-full flex flex-col mt-25 items-center gap-16 justify-center min-h-screen bg-gray-100 lg:p-6">
      {/* Banner */}
      <div className="lg:w-[80%] h-full flex justify-between items-center text-black bg-white shadow-lg rounded-lg p-8">
        <div className="w-[45%]">
          <h1 className="lg:text-5xl text-xl font-semibold">
            You Seal the <span className="text-[rgb(255,70,85)]">Deal</span>,<br />
            We’ll Take It from There
          </h1>
        </div>
        <div className="w-[45%] animate-img">
          <img src="/deal.webp" alt="How It Works" className="w-full h-auto" />
        </div>
      </div>

      {/* Dynamic Sections */}
      {sections.map((sec, i) => (
        <div
          key={i}
          className={`lg:w-[80%] h-full lg:h-[600px] mx-auto shadow-xl lg:rounded-2xl p-10 flex flex-col ${sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} justify-between items-center gap-10 ${sec.bg}`}
        >
          <div
            ref={(el) => { textRefs.current[i] = el }}
            className="lg:w-[50%]"
          >
            <h2 className="lg:text-5xl text-2xl font-bold lg:leading-tight">
              {sec.heading.includes("PROCESS") || sec.heading.includes("Loyalty") ? (
                <>
                  {sec.heading.split(" ")[0]}{" "}
                  <span className="text-[rgb(255,70,85)]">
                    {sec.heading.split(" ").slice(1).join(" ")}
                  </span>
                </>
              ) : (
                sec.heading
              )}
            </h2>
            <p className="text-sm lg:text-base mt-2">
              {sec.subheading}
            </p>
            {sec.content}
            {sec.link && (
              <Link to={sec.link.to}>
                <button className="bg-[rgb(255,70,85)] mt-5 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(230,60,75)] transition duration-300">
                  {sec.link.label}
                </button>
              </Link>
            )}
          </div>
          <div
            ref={(el) => { imgRefs.current[i] = el }}
            className="lg:w-[45%] animate-img"
          >
            <img src={sec.image} alt="section visual" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      ))}

      <GetLeadsComp />
    </div>
  );
};

export default HowItWorksComp;
