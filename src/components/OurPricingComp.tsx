import  { useState } from 'react'
import { Check } from 'lucide-react';

const plans = [
  {
    title: 'Starter Sphere',
    price: 99,
    features: [
      'Free First Transfer',
      'Upfront Marketing Cost',
      'Pay Per Lead',
      'No Hidden Fees',
      'Full Profit Plan'
    ]
  },
  {
    title: 'Pro Pulse',
    price: 199,
    highlight: true,
    features: [
      'Free First Transfer',
      'Upfront Marketing Cost',
      'Pay Per Lead',
      'No Hidden Fees',
      'Full Profit Plan',
      'Enhanced Lead Quality'
    ]
  },
  {
    title: 'Elite Edge',
    price: 499,
    features: [
      'Free First Transfer',
      'Upfront Marketing Cost',
      'Pay Per Lead',
      'No Hidden Fees',
      'Full Profit Plan',
      'Top-Tier Lead Quality',
      'Exclusive Features'
    ]
  }
];

const OurPricingComp = () => {
   const [selectedPlan, setSelectedPlan] = useState('PRO');
  return (
    <>
      <div className='w-full flex flex-col lg:mt-10 mt-20 justify-center items-center ' >
        <div className="w-full h-[500px] px-4 py-16 bg-white flex justify-center items-center">
          <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Left Side - Heading */}
            <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4">
              <p className="text-sm tracking-widest text-gray-600 uppercase">Our Pricing Plans</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#ff4655] leading-tight">
                Realtors Match <br className="hidden sm:block" /> Payment Plans.
              </h1>
            </div>

            {/* Right Side - Paragraph */}
            <div className="w-full lg:w-1/2 text-gray-800 text-base leading-relaxed">
              <p>
                At <span className="font-semibold text-[#ff4655]">Realtors Match</span>, our mission is to help real estate professionals grow their business and close more deals by providing high-quality, targeted property leads. To support your success, we offer three exclusive plans tailored to meet the unique needs of realtors. Explore our plans below and choose the one that best matches your goals.
              </p>
            </div>
          </div>
        </div>

    <section className="text-gray-600 w-full body-font overflow-hidden bg-gray-50 py-20">
      <div className="w-full px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Choose Your Plan</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Tailored plans to help real estate professionals grow and scale.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan) => {
            const isSelected = plan.title === selectedPlan;
            return (
              <div
                key={plan.title}
                onClick={() => setSelectedPlan(plan.title)}
                className={`w-full sm:w-72 p-6 rounded-2xl relative overflow-hidden border-2 cursor-pointer transition-all duration-300 shadow-xl hover:scale-105
                  ${isSelected ? 'border-[#ff4655] bg-white' : 'border-gray-200 bg-gray-100'}`}
              >
                {plan.highlight && (
                  <span className="bg-[#ff4655] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                    POPULAR
                  </span>
                )}
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-[#ff4655]">
                  {plan.title}
                </h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  ${plan.price}
                  <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                </h1>
                {plan.features.map((feature, idx) => (
                  <p key={idx} className="flex items-center text-gray-600 mb-2">
                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center bg-[#ff4655] text-white rounded-full flex-shrink-0">
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </span>
                    {feature}
                  </p>
                ))}
                <button
                  className={`mt-6 py-2 px-4 w-full text-white font-medium rounded-lg transition-all
                    ${isSelected ? 'bg-[#ff4655] hover:bg-[#e63b48]' : 'bg-gray-400 hover:bg-gray-500'}`}
                >
                  {isSelected ? 'Selected' : 'Choose Plan'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
      </div>

    </>
  )
}

export default OurPricingComp