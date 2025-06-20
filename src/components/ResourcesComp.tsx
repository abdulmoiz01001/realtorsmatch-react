
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ResourcesComp = () => {
    const router = useNavigate();
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);



    useGSAP(() => {
        cardsRef.current.forEach((card) => {
            if (!card) return;
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none ",
                },
                opacity: 0,
                y: 60,
                duration: 1,
                delay:  0.1,
                ease: "power3.out",
            });
        });
    }, []);

    const blogs = [
        {
            img: "/quality-pays.jpg",
            category: "Real Estate",
            title: "Why Quality Investments Pay Off Long-Term",
            description:
                "In today's fast-moving property market, choosing high-quality real estate assets can significantly improve your returns...",
            date: "February 26, 2024",
            site: "realtorsmatch.com",
            slug: "quality-investments-pay-off-long-term",
        },
        {
            img: "/competing smart.jpg",
            category: "Real Estate",
            title: "Stay Ahead: Competing Smart in Real Estate",
            description:
                "Success in real estate comes from insight, strategy, and timing. Discover how top agents gain their advantage...",
            date: "February 26, 2024",
            site: "realtorsmatch.com",
            slug: "competing-smart-in-real-estate",
        },
        {
            img: "/attract-leads.png",
            category: "Real Estate",
            title: "Boosting Growth With Our Lead Engine",
            description:
                "Realtors Match provides high-performance lead solutions that give your real estate business the competitive edge it needs...",
            date: "February 26, 2024",
            site: "realtorsmatch.com",
            slug: "boosting-growth-with-lead-engine",
        },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-[80%] flex flex-col justify-start items-start">
                <div className="w-full flex flex-col justify-start items-start">
                    <p className="text-lg md:text-3xl font-semibold text-[#1a0c2b] mb-4">Resources</p>
                    <h1 className="text-2xl md:text-4xl font-bold text-[#1a0c2b] mb-6">Explore Our Resources</h1>
                </div>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {blogs.map((blog, index: number) => (
                                <div
                                    key={index}
                                    className="p-4 md:w-1/3"
                                    ref={(el) => { cardsRef.current[index] = el; }}
                                    onClick={() => router("/resources/" + blog.slug)}
                                >
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden cursor-pointer">
                                        <img
                                            width={500}
                                            height={500}
                                            className="lg:h-48 md:h-36 w-full object-cover object-center"
                                            src={blog.img}
                                            alt={blog.title}
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                {blog.category}
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                {blog.title}
                                            </h1>
                                            <p className="leading-relaxed mb-3">{blog.description}</p>
                                            <div className="flex items-center justify-between text-sm text-gray-400">
                                                <span>{blog.site}</span>
                                                <span className="inline-flex items-center">
                                                    <svg
                                                        className="w-4 h-4 mr-1"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M5 12h14" />
                                                        <path d="M12 5l7 7-7 7" />
                                                    </svg>
                                                    {blog.date}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ResourcesComp;
