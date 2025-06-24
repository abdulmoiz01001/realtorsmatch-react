import  { useState } from "react";

const FAQSComp = () => {
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (id: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = [
    {
      id: "faq-1",
      question: "How do I pay for a lead?",
      answer:
        "We send you a verified lead first, with full contact and property details. Once you've made contact and confirmed it's valid, simply pay using the link we provide — no upfront commitment required.",
    },
    {
      id: "faq-2",
      question: "What if the lead doesn’t answer or is invalid?",
      answer:
        "If you’re unable to reach the lead or find that the details are incorrect, just reply within 48 hours of delivery. Our team will review and issue a free replacement or credit — no hassle.",
    },
    {
      id: "faq-3",
      question: "Are the leads exclusive?",
      answer:
        "Yes. Every lead is exclusively matched to one Realtor only. Once it’s sent and confirmed, it will not be shared, resold, or redistributed.",
    },
    {
      id: "faq-4",
      question: "What kind of leads do you offer?",
      answer:
        "We offer the following verified lead types:\n\n• Standard Buyer Leads ($100)\n• Standard Seller Leads ($149)\n• Hot Seller Leads ($299)\n• Commercial Property Leads ($299)\n\nEach lead includes contact details, urgency level, and property info, pre-screened by our internal agents.",
    },
    {
      id: "faq-5",
      question: "Can I choose ZIP codes or locations?",
      answer:
        "Yes. You can request leads by ZIP code, city, or state. For agents purchasing bundles ($999+), ZIP code exclusivity and priority targeting is available.",
    },
    {
      id: "faq-6",
      question: "How do bundles work?",
      answer:
        "When you purchase a bundle (e.g., $499, $999, or $1499), you receive credit toward any type of lead. These credits never expire and can be used at your own pace.",
    },
    {
      id: "faq-7",
      question: "Is there a contract or recurring fee?",
      answer:
        "No contracts. No subscriptions. You pay only when you're ready and satisfied. Bundles are optional and discounted — not mandatory.",
    },
    {
      id: "faq-8",
      question: "How fast are leads delivered?",
      answer:
        "Lead delivery is typically within 1–4 hours of verification. Elite buyers and bundle clients may receive instant or scheduled delivery based on preferred timing.",
    },
    {
      id: "faq-9",
      question: "Do you guarantee closings?",
      answer:
        "No one can guarantee closings — but we do guarantee live contact, high intent, and verified data. We sell opportunity, not hope.",
    },
    {
      id: "faq-10",
      question: "What if I want to stop or pause lead delivery?",
      answer:
        "You're in full control. Since we don’t run a subscription model, simply pause, delay, or stop any time. No penalty. No auto-billing.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">❓ Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-10 text-lg">Everything You Need to Know Before Buying a Lead</p>

      <div className="space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-md shadow-md transition duration-200"
          >
            <button
              onClick={() => toggleQuestion(item.id)}
              className={`w-full text-left px-6 py-4 flex justify-between items-center 
                          focus:outline-none bg-[#ff4655] text-white font-semibold 
                          hover:shadow-xl transition-all duration-300 
                          ${openQuestions[item.id] ? "animate-bounce" : ""}`}
            >
              <h3 className="text-base">{item.question}</h3>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  openQuestions[item.id] ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openQuestions[item.id] && (
              <div className="px-6 pb-4 text-sm text-gray-700 whitespace-pre-line bg-white">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSComp;
