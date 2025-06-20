import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface BlogContent {
  type: 'paragraph' | 'heading';
  text: string;
}

interface BlogType {
  img: string;
  category: string;
  title: string;
  description: string;
  date: string;
  site: string;
  slug: string;
  content: BlogContent[];
}

const SingleBlogComp = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log('slug', slug);
  const [blogData, setBlogData] = useState<BlogType | null>(null);

  const blogs : BlogType[] = [
  {
    img: "/quality-pays.jpg",
    category: "Real Estate",
    title: "Why Quality Investments Pay Off Long-Term",
    description:
      "In today's fast-moving property market, choosing high-quality real estate assets can significantly improve your returns...",
    date: "February 26, 2024",
    site: "realtorsmatch.com",
    slug: "quality-investments-pay-off-long-term",
    content: [
      {
        type: "paragraph",
        text: "When it comes to real estate investment, many agents and property investors are often drawn to low-cost opportunities in hopes of turning a quick profit. However, those who prioritize quality in their investments tend to see greater long-term returns and fewer financial headaches. High-quality properties in desirable neighborhoods tend to appreciate more consistently and require less frequent and costly repairs. Over time, this adds up to better cash flow, improved tenant retention, and stronger resale value.",
      },
      {
        type: "heading",
        text: "1. Long-Term Appreciation",
      },
      {
        type: "paragraph",
        text: "One of the most overlooked advantages of quality properties is their potential for long-term appreciation. Markets fluctuate, but real estate that is well-located and well-maintained consistently outpaces lower-tier assets. Whether in a stable or booming market, these properties tend to attract better buyers, sell faster, and demand higher prices. Investors who think long-term understand that slower but steadier growth almost always wins the race.",
      },
      {
        type: "heading",
        text: "2. Attracting Premium Tenants",
      },
      {
        type: "paragraph",
        text: "Premium tenants are not just looking for a place to live—they’re seeking comfort, safety, and long-term value. They are willing to pay higher rents for properties that meet high standards. These tenants often have stable incomes, respect property rules, and stay longer, which reduces vacancy rates. This is one of the key drivers of predictable income in real estate, and it directly stems from the quality of the investment.",
      },
      {
        type: "heading",
        text: "3. Reduced Maintenance and Turnover Costs",
      },
      {
        type: "paragraph",
        text: "Inferior properties often result in constant maintenance issues, leading to unhappy tenants and higher turnover. High-quality builds, materials, and appliances translate into lower ongoing expenses and fewer tenant complaints. This also reduces the stress on property managers and owners, freeing up time and budget for scaling operations instead of putting out fires.",
      },
      {
        type: "heading",
        text: "Final Thought",
      },
      {
        type: "paragraph",
        text: "Choosing quality over cost may seem like a harder decision upfront, but it lays the foundation for long-term growth, tenant satisfaction, and peace of mind. In the competitive world of real estate, those who understand the long game—and invest in quality—reap the biggest rewards over time.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "The real estate landscape has evolved significantly in the past decade. With the rise of digital platforms, AI-driven pricing tools, and hyper-informed buyers and sellers, simply being active in the market isn't enough. Real estate professionals must now become strategic players—leveraging data, technology, and emotional intelligence to stay ahead of the curve. Competing smart means understanding both the numbers and the people behind them.",
      },
      {
        type: "heading",
        text: "1. Know Your Market Inside Out",
      },
      {
        type: "paragraph",
        text: "Top-performing agents are always in tune with their local markets. They study economic trends, school district ratings, new developments, and buyer sentiment regularly. This allows them to anticipate shifts before they happen. Having intimate knowledge of a neighborhood or property type positions agents as trusted advisors, not just service providers.",
      },
      {
        type: "heading",
        text: "2. Leverage Smart Tech & Automation",
      },
      {
        type: "paragraph",
        text: "Using CRM tools, automated email campaigns, AI-assisted valuations, and chatbots for lead qualification can transform your business. It’s no longer about working longer hours—it’s about making those hours count. Smart tools help agents respond faster, follow up more efficiently, and stay top-of-mind with their clients. If you're not using tech to your advantage, you're leaving deals on the table.",
      },
      {
        type: "heading",
        text: "3. Be a Consultant, Not a Salesperson",
      },
      {
        type: "paragraph",
        text: "Buyers and sellers today are overwhelmed with options and information. The best agents position themselves as problem solvers and consultants—helping clients interpret data, make informed decisions, and feel confident every step of the way. This consultative approach builds trust, generates referrals, and ultimately leads to more closed deals.",
      },
      {
        type: "heading",
        text: "Final Thought",
      },
      {
        type: "paragraph",
        text: "To succeed in today’s real estate market, it’s not about being the loudest—it’s about being the smartest. Those who innovate, adapt, and connect on a human level are the ones who will thrive for years to come.",
      },
    ],
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
    content: [
      {
        type: "paragraph",
        text: "No matter how skilled you are as an agent, without qualified leads your pipeline dries up. In the modern real estate economy, generating leads isn't enough—you need the right leads, at the right time, with the right intent. That’s where our proprietary Lead Engine at Realtors Match makes a massive difference. Designed specifically for real estate professionals, it bridges the gap between you and the clients actively looking for what you offer.",
      },
      {
        type: "heading",
        text: "1. Data-Driven Targeting",
      },
      {
        type: "paragraph",
        text: "Our Lead Engine uses demographic data, location trends, online behavior, and predictive analytics to pinpoint who is most likely to buy or sell within your niche. Instead of casting a wide net, we help you focus your efforts on leads that matter—saving time and maximizing return on every dollar spent.",
      },
      {
        type: "heading",
        text: "2. Real-Time Notifications & Follow-Up Tools",
      },
      {
        type: "paragraph",
        text: "You get notified the moment a new qualified lead enters your funnel. From there, our platform provides automated follow-up tools—SMS, email, reminders—that help you engage instantly and build rapport while interest is at its peak. No more cold calls—just warm leads and relevant conversations.",
      },
      {
        type: "heading",
        text: "3. Higher Close Rates, Lower Effort",
      },
      {
        type: "paragraph",
        text: "Because our system pre-qualifies leads based on their intent and behavior, you’ll notice a marked increase in your closing rate. Agents using our Lead Engine spend less time chasing dead ends and more time closing real deals. It’s not just about volume—it’s about value.",
      },
      {
        type: "heading",
        text: "Final Thought",
      },
      {
        type: "paragraph",
        text: "The right leads make all the difference. With Realtors Match's Lead Engine, you're not just building a contact list—you're building a business. Start converting with confidence and scale your success the smart way.",
      },
    ],
  },
];

  useEffect(() => {
    if (slug) {
      const foundBlog = blogs.find((b) => b.slug === slug);
      if (foundBlog) {
        setBlogData(foundBlog);
      } else {
        console.log('Blog not found');
      }
    }
  }, [slug]);

  if (!blogData) {
    return <div className="text-center mt-30 text-gray-500 py-20">Loading blog content...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-sm text-indigo-500 mt-30 uppercase tracking-wide">{blogData.category}</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">{blogData.title}</h1>
        <div className="text-gray-400 text-sm">
          {blogData.date} • <span className="text-indigo-500">{blogData.site}</span>
        </div>
      </div>

      <div className="w-full h-100 relative mb-10 rounded-lg overflow-hidden shadow-md">
        <img
          src={blogData.img}
          alt={blogData.title}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        {blogData.content.map((block, index) =>
          block.type === 'heading' ? (
            <h2 key={index} className="text-2xl font-semibold text-gray-800 mt-8">
              {block.text}
            </h2>
          ) : (
            <p key={index} className="text-gray-700 leading-relaxed mt-4">
              {block.text}
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default SingleBlogComp;

