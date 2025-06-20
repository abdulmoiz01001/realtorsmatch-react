
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Helper function for responsive check
// const isDesktopOrLaptop = () => typeof window !== "undefined" && window.innerWidth >= 1024;

gsap.registerPlugin(ScrollTrigger);

const OurAppriciationComp = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useGSAP(() => {
        // if (!isDesktopOrLaptop()) return;

        gsap.from(textRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: '20% 60%',
                end: 'bottom 60%',
                // 
            },
            x: -900,
            opacity: 0,
            duration: 2.3,
            ease: 'power4.out',
        });

        gsap.from(imgRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: '20% 60%',
                end: 'bottom 60%',
                // 
            },
            scale: 0,
            opacity: 0,
            duration: 2.3,
            ease: 'power4.out',
        });
    }, []);

    return (
        <div ref={containerRef} className="w-full lg:h-screen min-h-full py-10 flex flex-col lg:flex-row items-center justify-center bg-gray-100">
            <div ref={textRef} className='w-[90%] lg:w-[40%] h-[80%] text-[var(--text-color)] flex flex-col justify-center items-start lg:gap-8'>
                <h1 className='lg:text-4xl text-xl font-semibold'>
                    We Use Real Estate to Show<br />
                    Our Appreciation of The<br />
                    World
                </h1>
                <p className='lg:text-lg text-sm text-justify mr-20 mt-4 mb-6'>
                    Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut
                    morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac
                    dictum ut mauris non.
                </p>
                <div className='flex flex-wrap lg:gap-y-8 gap-y-4 gap-2 justify-between items-center'>
                    <div className='w-[48%]'>
                        <h1 className='lg:text-4x text-xl text-[#ff4655] font-semibold'>$18M</h1>
                        <p className='lg:text-lg text-sm'>Owned from properties<br /> transactions</p>
                    </div>
                    <div className='w-[48%]'>
                        <h1 className='lg:text-4x text-xl text-[#ff4655] font-semibold'>15K+</h1>
                        <p className='lg:text-lg text-sm'>Properties for Sell</p>
                    </div>
                    <div className='w-[48%]'>
                        <h1 className='lg:text-4x text-xl text-[#ff4655] font-semibold'>26K+</h1>
                        <p className='lg:text-lg text-sm'>Properties for Buy</p>
                    </div>
                    <div className='w-[48%]'>
                        <h1 className='lg:text-4x text-xl text-[#ff4655] font-semibold'>890</h1>
                        <p className='lg:text-lg text-sm'>Daily completed<br /> transactions.</p>
                    </div>
                </div>
            </div>
            <div ref={imgRef} className='lg:w-[40%] lg:mt-0 w-[90%] mt-10 h-[80%]'>
                <img
                    src="/appreciation.svg"
                    alt="Appreciation Image"
                    width={500}
                    height={500}
                    className='w-full h-full object-cover rounded-4xl'
                />
            </div>
        </div>
    )
}

export default OurAppriciationComp;
