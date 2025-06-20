import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatWeOfferComp = () => {
  const leftSide = [
    {
      text: 'Reliable Lead Generation',
      desc: 'We provide high-quality leads to grow your business.',
      bg: 'bg-[#f7f6e7]',
    },
    {
      text: 'Strategic Ad Campaign',
      desc: 'Custom marketing plans to target your ideal audience.',
      bg: 'bg-[#e8dffb]',
    },
    {
      text: 'Administrative Efficiency',
      desc: 'Simplifying operations to save your time and effort.',
      bg: 'bg-[#f5eaf0]',
    },
  ];

  const rightSide = [
    {
      text: 'Comprehensive Listing Services',
      desc: 'Showcase your listings with top-tier tools.',
      bg: 'bg-[#e0eafb]',
    },
    {
      text: 'Dedicated Transaction Support',
      desc: 'Expert help throughout the deal process.',
      bg: 'bg-[#e1f8ec]',
    },
    {
      text: 'Seamless Closing Operations',
      desc: 'Ensure smooth, error-free closing procedures.',
      bg: 'bg-[#f9e5e9]',
    },
  ];

  const headingRef = useRef(null);
  const leftPillsRef = useRef<HTMLDivElement[]>([]);
  const rightPillsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    // Animate heading
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    // Animate left pills
    leftPillsRef.current.forEach((pill, i) => {
      gsap.from(pill, {
        scrollTrigger: {
          trigger: pill,
          start: 'top 85%',
        },
        x: -80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out',
      });
    });

    // Animate right pills
    rightPillsRef.current.forEach((pill, i) => {
      gsap.from(pill, {
        scrollTrigger: {
          trigger: pill,
          start: 'top 85%',
        },
        x: 80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out',
      });
    });
  }, []);

  const pillClass =
    'group transition-all duration-500 ease-in-out transform px-6 py-4 rounded-xl text-[#1a0c2b] font-semibold text-md md:text-lg shadow-md cursor-pointer w-[240px] hover:w-[280px]';

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Center Heading */}
      <h2
        ref={headingRef}
        className="lg:text-4xl text-2xl md:text-5xl font-extrabold text-[#1a0c2b] mb-12 text-center"
      >
        What Realtos Match Offers?
      </h2>

      <div className="flex w-full flex-col lg:flex-row h-full lg:h-[450px] max-w-7xl justify-between flex-wrap gap-0">
        {/* Left Pills */}
        <div className="flex  lg:w-[30%] flex-col gap-6">
          {leftSide.map((item, idx) => (
            <div
              key={idx}
              ref={el => {leftPillsRef.current[idx] = el!}}
              className={`${pillClass} ${item.bg} ${idx % 2 === 0 ? 'animate-sway-right' : 'animate-sway-left'}`}
            >
              <div className="font-semibold text-base md:text-lg mb-1">
                {item.text}
              </div>
              <div className="text-sm text-[#3e3e3e] max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* img */}
        <div className="w-[30%] mx-auto lg:m-0   md:w-[380px] flex justify-center items-center">
          <img
          width={500}
          height={500}
            src="/what.webp"
            alt="Team Illustration"
            className="w-full object-contain"
          />
        </div>

        {/* Right Pills */}
        <div className="flex  lg:w-[30%] flex-col gap-6">
          {rightSide.map((item, idx) => (
            <div
              key={idx}
              ref={el => {rightPillsRef.current[idx] = el!}}
              className={`${pillClass} ${item.bg} ${idx % 2 === 0 ? 'animate-sway-right' : 'animate-sway-left'}`}
            >
              <div className="font-semibold text-sm lg:text-base md:text-lg mb-1">
                {item.text}
              </div>
              <div className="text-sm text-[#3e3e3e] max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 ease-in-out">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes swayLeft {
            0%,
            100% {
              transform: translateX(-66px);
            }
            50% {
              transform: translateX(-8px);
            }
          }

          @keyframes swayRight {
            0%,
            100% {
              transform: translateX(66px);
            }
            50% {
              transform: translateX(8px);
            }
          }

          .animate-sway-left {
            animation: swayLeft 3s ease-in-out infinite;
          }

          .animate-sway-right {
            animation: swayRight 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default WhatWeOfferComp;
