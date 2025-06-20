
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: 'Expertise',
    description:
      'Our team of experienced professionals helps you navigate the real estate market with ease.',
  },
  {
    title: 'Customer Focus',
    description:
      'We prioritize your needs and ensure your real estate experience is smooth and successful.',
  },
  {
    title: 'Innovation',
    description:
      'We leverage the latest tech and insights to deliver top-tier services.',
  },
]

const WhyChooseUsComp = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
const paragraphRef = useRef<HTMLParagraphElement | null>(null);
const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  useGSAP(() => {
    // if (typeof window !== 'undefined' && window.innerWidth < 1024) return

    const validCards = cardsRef.current.filter(Boolean)

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

    if (paragraphRef.current) {
      gsap.from(paragraphRef.current, {
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out',
      })
    }

    validCards.forEach((card) => {
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
    <div className="relative w-full min-h-[80vh] py-16 flex flex-col items-center justify-center bg-gray-100 text-gray-800 overflow-hidden">
      {/* Left Side Shape */}
      <svg
        className="absolute left-0 top-0 h-full opacity-10 z-0"
        viewBox="0 0 200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M50 0L80 50L50 100L20 50L50 0Z" fill="#ff4655" />
        <rect x="30" y="150" width="40" height="200" fill="#ff4655" rx="4" />
        <circle cx="50" cy="400" r="20" fill="#ff4655" />
      </svg>

      {/* Right Side Shape */}
      <svg
        className="absolute right-0 bottom-0 h-full opacity-10 z-0"
        viewBox="0 0 200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="120" y="100" width="40" height="150" fill="#ff4655" rx="4" />
        <circle cx="140" cy="300" r="25" fill="#ff4655" />
        <path d="M150 500L180 550L150 600L120 550L150 500Z" fill="#ff4655" />
      </svg>

      <h1 ref={headingRef} className="relative lg:text-4xl text-2xl font-bold mb-4 z-10">
        Why Choose Us?
      </h1>
      <p
        ref={paragraphRef}
        className="relative w-[80%] lg:text-lg text-sm lg:w-full max-w-xl text-center mb-12 z-10"
      >
        We are committed to providing the best real estate services with a
        focus on customer satisfaction, transparency, and innovation.
      </p>

      <div className="relative flex flex-col items-center gap-4 z-10">
        {/* Top Two */}
        <div className="flex flex-wrap justify-center gap-8">
          {features.slice(0, 2).map((feature, idx) => (
            <div
              key={idx}
              ref={(el) => {cardsRef.current[idx] = el}}
              className="hexagon-card hover-hex"
            >
              <div className="inner-content">
                <h2 className="text-xl font-semibold text-[#ff4655] mb-2">
                  {feature.title}
                </h2>
                <p className="text-sm text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom One */}
        <div className="mt-4">
          <div
            ref={(el) => {cardsRef.current[2] = el}}
            className="hexagon-card hover-hex"
          >
            <div className="inner-content">
              <h2 className="text-xl font-semibold text-[#ff4655] mb-2">
                {features[2].title}
              </h2>
              <p className="text-sm text-center">{features[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUsComp
