
import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

// const isDesktopOrLaptop = () =>
//   typeof window !== "undefined" && window.innerWidth >= 1024;

const PropertiesInCitiesComp = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const cityCardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(() => {
    // if (!isDesktopOrLaptop()) return;

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

    // Animate subheading
    gsap.from(subheadingRef.current, {
      scrollTrigger: {
        trigger: subheadingRef.current,
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
    });

    // Animate each card
    cityCardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full lg:h-screen gap-4 h-full py-10 flex flex-col text-[var(--text-color)] items-center justify-center bg-gray-100"
    >
      <h1 ref={headingRef} className="lg:text-4xl text-2xl font-semibold text-center mb-4">
        Find Properties in These Cities
      </h1>
      <p
        ref={subheadingRef}
        className="lg:text-lg text-sm lg:w-[50%] w-[90%] mx-auto lg:m-0 text-center mr-20 mt-4 mb-6"
      >
        {` Explore a wide range of properties available in various cities. Whether
        you're looking to buy, sell, or rent, we have listings that cater to
        your needs.`}
      </p>

      <div className="w-[80%] flex flex-col gap-y-4">
        {/* First Row */}
        <div className="w-full h-[50%] flex lg:flex-row flex-col gap-4 justify-between items-center">
          {[
            { src: '/new-york.svg', title: 'New York', props: '5 properties', desc: 'Explore the vibrant real estate market of New York City.', width: 'w-[50%]' },
            { src: '/chicago.svg', title: 'Chicago', props: '2 properties', desc: 'Explore the vibrant real estate market of Chicago City.', width: 'w-[25%]' },
            { src: '/los-angels.svg', title: 'Los Angeles', props: '3 properties', desc: 'Explore the vibrant real estate market of Los Angeles City.', width: 'w-[25%]' },
          ].map((item, index) => (
            <div
              key={index}
              ref={el => { cityCardsRef.current[index] = el!; }}
              className={`group relative lg:${item.width} w-full  h-[370px]`}
            >
              <img src={item.src} alt={item.title} width={500} height={500} className="w-full h-full object-cover rounded-4xl" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/20 group-hover:bg-black/50 rounded-4xl transition-all duration-300 ease-in-out overflow-hidden pointer-events-none">
                <div className="absolute w-full top-4 left-4 group-hover:top-1/2 bg-transparent group-hover:left-1/2 transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-500 ease-in-out text-white text-start group-hover:text-center px-4">
                  <p className="text-md group-hover:hidden">{item.props}</p>
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="text-lg hidden group-hover:block">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="w-full h-[50%] flex lg:flex-row flex-col gap-4 justify-between items-center">
          {[
            { src: '/san-diego.svg', title: 'San Diego', props: '1 property', desc: 'Explore the vibrant real estate market of San Diego City.', width: 'w-[25%]' },
            { src: '/florida.svg', title: 'Florida', props: '5 properties', desc: 'Explore the vibrant real estate market of Florida City.', width: 'w-[25%]' },
            { src: '/miami.svg', title: 'Miami', props: '6 properties', desc: 'Explore the vibrant real estate market of Miami City.', width: 'w-[50%]' },
          ].map((item, index) => (
            <div
              key={index + 3}
              ref={el => { cityCardsRef.current[index + 3] = el!; }}
              className={`group relative lg:${item.width} w-full h-[370px]`}
            >
              <img src={item.src} alt={item.title} width={500} height={500} className="w-full h-full object-cover rounded-4xl" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-black/20 group-hover:bg-black/50 rounded-4xl transition-all duration-300 ease-in-out overflow-hidden pointer-events-none">
                <div className="absolute w-full top-4 left-4 group-hover:top-1/2 bg-transparent group-hover:left-1/2 transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-500 ease-in-out text-white text-start group-hover:text-center px-4">
                  <p className="text-md group-hover:hidden">{item.props}</p>
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="text-lg hidden group-hover:block">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertiesInCitiesComp;
