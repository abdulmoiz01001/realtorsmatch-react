
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const LookAtOurNumbersComp = () => {
const headingRef = useRef<HTMLHeadingElement | null>(null);
const paragraphRef = useRef<HTMLParagraphElement | null>(null);
const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // if (typeof window !== 'undefined' && window.innerWidth < 1024) return

    const validCards = cardsRef.current.filter(Boolean)

    // Animate heading
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 70%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    }

    // Animate paragraph
    if (paragraphRef.current) {
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
      })
    }

    // Animate stat cards one-by-one
    validCards.forEach((card, ) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay:  0.1,
        ease: 'power2.out',
      })
    })
  }, [])

  return (
    <div className="w-full relative bg-black lg:h-[40vh] h-full py-10 lg:py-0 flex flex-col justify-center items-center overflow-hidden">
      {/* Thunder shape background */}
      <div className="absolute inset-0 bg-[#0c0c0c] thunder-shape -z-10"></div>

      <div className="w-full max-w-7xl px-4 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div
          ref={headingRef}
          className="lg:w-[40%] text-center lg:text-left"
        >
          <h1 className="lg:text-4xl text-2xl text-white font-semibold">
            Take a Look at our numbers
          </h1>
          <p
            ref={paragraphRef}
            className="lg:text-lg text-sm text-white mt-4"
          >
            We are proud to share our achievements and the impact we have made
            in the real estate industry.
          </p>
        </div>

        <div className="lg:w-[55%] grid grid-cols-2 md:grid-cols-4 gap-6">
          {[{ value: '5.2M', label: 'Homes Sold Nationwide' },
            { value: '7K+', label: 'Properties Listed for Sale' },
            { value: '4K+', label: 'Successful Closings' },
            { value: '221+', label: 'Daily Transactions Completed' }
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => {cardsRef.current[index] = el;}} // Set each card reference dynamically
              className="bg-[#121212] hover:bg-[#1c1c1c] transition-all duration-300 hover:scale-105 hover:-translate-y-1 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
            >
              <h1 className="lg:text-4xl text-2xl text-[#ff4655] font-bold">{item.value}</h1>
              <p className="text-white lg:text-md text-sm mt-2 leading-tight">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LookAtOurNumbersComp
