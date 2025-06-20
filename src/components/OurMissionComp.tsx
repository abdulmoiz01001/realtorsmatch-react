
import { useRef } from 'react'
import { Home, Building2, Handshake, TrendingUp } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

interface StatCard {
  icon: LucideIcon
  value: string
  title: string
  desc: string
}

const stats: StatCard[] = [
  {
    icon: Home,
    value: '5.2M',
    title: 'Homes Sold Nationwide',
    desc: 'Delivering dream homes to families across all 50 states.'
  },
  {
    icon: Building2,
    value: '7K+',
    title: 'Properties Listed for Sale',
    desc: 'Curated listings of residential and commercial spaces daily.'
  },
  {
    icon: Handshake,
    value: '4K+',
    title: 'Successful Closings',
    desc: 'Helping buyers and sellers close deals with confidence.'
  },
  {
    icon: TrendingUp,
    value: '221+',
    title: 'Daily Transactions Completed',
    desc: 'Facilitating transactions with transparency and trust.'
  }
]

const OurMissionComp: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  // useGSAP(() => {
  //   // Animate heading
  //   gsap.from(headingRef.current, {
  //     scrollTrigger: {
  //       trigger: headingRef.current,
  //       start: 'top 80%',
  //     },
  //     y: 40,
  //     opacity: 0,
  //     duration: 0.8,
  //     ease: 'power3.out'
  //   })

  //   // Animate paragraph
  //   gsap.from(paragraphRef.current, {
  //     scrollTrigger: {
  //       trigger: paragraphRef.current,
  //       start: 'top 85%',
  //     },
  //     y: 30,
  //     opacity: 0,
  //     duration: 0.6,
  //     delay: 0.2,
  //     ease: 'power2.out'
  //   })

  //   // Animate stat cards with stagger
  //   gsap.from(cardsRef.current, {
  //     scrollTrigger: {
  //       trigger: cardsRef.current[0],
  //       start: 'top 85%',
  //     },
  //     opacity: 0,
  //     y: 60,
  //     stagger: 0.15,
  //     duration: 0.8,
  //     ease: 'power2.out',
  //   })
  // }, [])

  useGSAP(() => {
  // if (typeof window !== "undefined" && window.innerWidth < 1024) return;

  const validCards = cardsRef.current.filter(Boolean);

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
    });
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
    });
  }

  // Animate stat cards one-by-one
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
    });
  });
}, []);


  return (
    <section className="w-full lg:h-[80vh] h-full flex justify-center items-center py-16 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          ref={headingRef}
          className="lg:text-3xl text-2xl sm:text-4xl mb-6 font-semibold text-gray-900"
        >
          Our mission is to redefine real estate<br />
          in the customer&apos;s favor.
        </h2>
        <p
          ref={paragraphRef}
          className="lg:text-md text-sm text-gray-500"
        >
          Empowering Americans with smarter, faster, and fairer property decisions.
        </p>

        <div className="mt-12 lg:h-[240px] h-full grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                ref={(el) => {cardsRef.current[index] = el!}}
                className="bg-gray-50 cursor-pointer gap-1 flex flex-col justify-center items-center p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon size={35} className="text-[#ff4655] mb-2 transition-colors duration-300 group-hover:text-red-600" />
                <h3 className="text-[#ff4655] text-4xl font-bold">{stat.value}</h3>
                <h4 className="text-sm font-semibold mt-2 mb-1 text-gray-800">
                  {stat.title}
                </h4>
                <p className="text-xs text-gray-500 text-center max-w-[90%]">{stat.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurMissionComp
