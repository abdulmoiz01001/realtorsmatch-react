
import React, { useState } from "react";
import TrustedPartnersComp from "./TrustedPartnersComp";

const AboutUsComp = () => {
    const [activeTab, setActiveTab] = useState("mission");

    const data = [
        {
            label: "Our Company",
            value: "ourcompany",
            desc: `With a deep understanding of the challenges and possibilities within the real estate industry, we've designed our services to be your reliable support system, helping you excel in an ever-evolving market.

Our team is made up of seasoned industry professionals who are deeply passionate about helping real estate agents and brokers achieve lasting success. By blending real estate expertise with cutting-edge technology, we provide solutions that are not only effective but also efficient, scalable, and forward-thinking.

Together, we aim to empower you with the tools, insights, and support needed to unlock your full potential.`,
        },
        {
            label: "Our Mission",
            value: "mission",
            desc: `At Realtors Match, our mission is simple yet ambitious:
To empower real estate professionals to grow by managing the backend of their business — so they can focus solely on what matters most: closing deals and maximizing income.

We understand the value of your time. That’s why we provide a comprehensive suite of essential services that streamline your daily operations, eliminate unnecessary overhead, and drive long-term success.

With Realtors Match, you gain a dedicated partner committed to freeing up your schedule, boosting your productivity, and unlocking your true potential.`,
        },
        {
            label: "Our Vision",
            value: "ourvision",
            desc: `At Realtors Match, we envision a future where every real estate agent thrives. We believe that technology should simplify and empower the real estate journey — not complicate it. With the power of smart tools and artificial intelligence, we help agents uncover new opportunities and achieve exceptional success.`,
        },
    ];

    return (
        <div className="w-full mt-[140px] flex justify-center items-center flex-col bg-gray-100">
            <div className="w-[80%] flex py-10 flex-col gap-2 justify-start items-start">
                <p className="text-lg text-[#ff4655]">About Realtors Match</p>
                <h1 className="text-6xl text-black font-semibold">
                    Get Your Real-Estate <br />
                    Success with Realtors Match
                </h1>

                {/* Manual Tabs */}
                <div className="w-[70%] mt-10">
                    {/* Tab Headers */}
                    <div className="flex border-b border-gray-300">
                        {data.map(({ label, value }) => (
                            <button
                                key={value}
                                onClick={() => setActiveTab(value)}
                                className={`py-4 px-6 w-[60%] -mb-[1px] border-b-2 font-medium text-sm transition-all duration-300 ${activeTab === value
                                    ? "border-[#ff4655] text-[#ff4655]"
                                    : "border-transparent text-gray-600 hover:text-[#ff4655]"
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mt-6">
                        {data.map(
                            ({ value, desc }) =>
                                activeTab === value && (
                                    <p
                                        key={value}
                                        className="text-gray-700 text-lg leading-relaxed"
                                    >
                                        {desc}
                                    </p>
                                )
                        )}
                    </div>
                </div>
                {/* End of Tabs */}
            </div>

            <TrustedPartnersComp />
        </div>
    );
};

export default AboutUsComp;
