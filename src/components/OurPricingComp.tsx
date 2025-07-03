
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { Check } from 'lucide-react';
// import { setSelectedPackage } from '../store/features/packageSlice';
// import type { Package } from '../store/features/packageSlice';

// import type { AppDispatch } from '../store/store';

// const flatLeads: Package[] = [
//   {
//     title: 'Standard Buyer Lead',
//     price: 99,
//     features: ['Verified interest', 'Contact details', 'Budget confirmed'],
//   },
//   {
//     title: 'Standard Seller Lead',
//     price: 99,
//     features: ['Property owner', 'Verified address', 'Intent to sell', 'No agent involved'],
//   },
//   {
//     title: 'Exclusive Seller Lead',
//     price: 199,
//     features: ['Wants to list ASAP', 'Exclusive listing', 'Ready to close within 7–10 days'],
//   },
//   {
//     title: 'Hot Seller Lead',
//     price: 299,
//     features: ['Wants to list ASAP', 'Exclusive listing', 'Ready to close within 7–10 days'],
//   },
//   {
//     title: 'Commercial Lead',
//     price: 299,
//     features: ['Commercial/mixed-use property owner', 'Verified contact info', 'Verified asset info'],
//   },
// ];

// const prepaidBundles: Package[] = [
//   {
//     title: 'Starter Edge',
//     price: 499,
//     features: ['$600 credit value', 'Save $101', 'Best for small campaigns'],
//   },
//   {
//     title: 'Pro Closer',
//     price: 999,
//     features: ['$1,200 credit value', 'Save $201', 'Great for scaling up'],
//   },
//   {
//     title: 'Elite Access',
//     price: 1499,
//     features: ['$1,800 credit value', 'Save $301', 'Maximum volume & discount'],
//   },
// ];

// const OurPricingComp = () => {

//   const [selectedPlanTitle, setSelectedPlanTitle] = useState<string>('');
//   const dispatch = useDispatch<AppDispatch>();

//   const handleSelectPlan = (plan: Package) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       alert('Please log in to select a package.');
//       return;
//     }
//     setSelectedPlanTitle(plan.title);
//     dispatch(setSelectedPackage(plan));
//   };

//   return (
//     <>
//       {/* ---- Leads ---- */}
//       <div className="w-full h-[500px] px-4 py-16 bg-white flex justify-center items-center">
//         <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-12">
//           {/* Left Side - Heading */}
//           <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4">
//             <p className="text-sm tracking-widest text-gray-600 uppercase">Our Pricing Plans</p>
//             <h1 className="text-4xl sm:text-5xl font-bold text-[#ff4655] leading-tight">
//               Realtors Match <br className="hidden sm:block" /> Payment Plans.
//             </h1>
//           </div>

//           {/* Right Side - Paragraph */}
//           <div className="w-full lg:w-1/2 text-gray-800 text-base leading-relaxed">
//             <p>
//               At <span className="font-semibold text-[#ff4655]">Realtors Match</span>, our mission is to help real estate professionals grow their business and close more deals by providing high-quality, targeted property leads. To support your success, we offer three exclusive plans tailored to meet the unique needs of realtors. Explore our plans below and choose the one that best matches your goals.
//             </p>
//           </div>
//         </div>
//       </div>
//       <section className="w-full body-font overflow-hidden bg-gray-50 py-20">
//         <div className="w-full px-5 mx-auto">
//           <div className="flex flex-col text-center w-full mb-16">
//             <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Verified Lead Rates</h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
//               Tailored plans to help real estate professionals grow and scale.
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center gap-6">
//             {flatLeads.map((plan) => {
//               const isSelected = plan.title === selectedPlanTitle;
//               return (
//                 <div
//                   key={plan.title}
//                   onClick={() => handleSelectPlan(plan)}
//                   className={`w-full h-[400px] flex flex-col justify-between sm:w-72 p-6 rounded-2xl relative overflow-hidden border-2 cursor-pointer transition-all duration-300 shadow-xl hover:scale-105 ${isSelected ? 'border-[#ff4655] bg-white' : 'border-gray-200 bg-gray-100'
//                     }`}
//                 >
//                   <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-[#ff4655]">
//                     {plan.title}
//                   </h2>
//                   <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
//                     ${plan.price}
//                   </h1>
//                   {plan.features.map((feature, idx) => (
//                     <p key={idx} className="flex items-center text-gray-600 mb-2">
//                       <span className="w-5 h-5 mr-2 inline-flex items-center justify-center bg-[#ff4655] text-white rounded-full flex-shrink-0">
//                         <Check className="w-3 h-3" strokeWidth={3} />
//                       </span>
//                       {feature}
//                     </p>
//                   ))}
//                   <button
//                     className={`mt-6 py-2 px-4 w-full text-white font-medium rounded-lg transition-all ${isSelected ? 'bg-[#ff4655] hover:bg-[#e63b48]' : 'bg-gray-400 hover:bg-gray-500'
//                       }`}
//                   >
//                     {isSelected ? 'Selected' : 'Choose Plan'}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ---- Bundles ---- */}
//       <section className="w-full body-font overflow-hidden bg-gray-50 py-20">
//         <div className="w-full px-5 mx-auto">
//           <div className="flex flex-col text-center w-full mb-16">
//             <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Prepaid Bundles</h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
//               Tailored plans to help real estate professionals grow and scale.
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center gap-6">
//             {prepaidBundles.map((plan) => {
//               const isSelected = plan.title === selectedPlanTitle;
//               return (
//                 <div
//                   key={plan.title}
//                   onClick={() => handleSelectPlan(plan)}
//                   className={`w-full h-[400px] flex flex-col justify-between sm:w-72 p-6 rounded-2xl relative overflow-hidden border-2 cursor-pointer transition-all duration-300 shadow-xl hover:scale-105 ${isSelected ? 'border-[#ff4655] bg-white' : 'border-gray-200 bg-gray-100'
//                     }`}
//                 >
//                   <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-[#ff4655]">
//                     {plan.title}
//                   </h2>
//                   <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
//                     ${plan.price}
//                   </h1>
//                   {plan.features.map((feature, idx) => (
//                     <p key={idx} className="flex items-center text-gray-600 mb-2">
//                       <span className="w-5 h-5 mr-2 inline-flex items-center justify-center bg-[#ff4655] text-white rounded-full flex-shrink-0">
//                         <Check className="w-3 h-3" strokeWidth={3} />
//                       </span>
//                       {feature}
//                     </p>
//                   ))}
//                   <button
//                     className={`mt-6 py-2 px-4 w-full text-white font-medium rounded-lg transition-all ${isSelected ? 'bg-[#ff4655] hover:bg-[#e63b48]' : 'bg-gray-400 hover:bg-gray-500'
//                       }`}
//                   >
//                     {isSelected ? 'Selected' : 'Choose Plan'}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OurPricingComp;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { setSelectedPackage } from '../store/features/packageSlice';
import type { Package } from '../store/features/packageSlice';
import type { AppDispatch } from '../store/store';

const flatLeads: Package[] = [
  {
    title: 'Standard Buyer Lead',
    price: 99,
    features: ['Verified interest', 'Contact details', 'Budget confirmed'],
  },
  {
    title: 'Standard Seller Lead',
    price: 99,
    features: ['Property owner', 'Verified address', 'Intent to sell', 'No agent involved'],
  },
  {
    title: 'Exclusive Seller Lead',
    price: 199,
    features: ['Homeowner showed selling intent', 'Outreach limited to select agents', 'Timeline details shared by lead'],
  },
  {
    title: 'Hot Seller Lead',
    price: 299,
    features: ['Seller submitted contact intent', 'Priority given to few agents', 'Early steps toward listing underway'],
  },
  {
    title: 'Commercial Lead',
    price: 299,
    features: ['Commercial/mixed-use property owner', 'Verified contact info', 'Verified asset info'],
  },
];

const prepaidBundles: Package[] = [
  {
    title: 'Starter Edge',
    price: 499,
    features: ['$600 credit value', 'Save $101', 'Best for small campaigns'],
  },
  {
    title: 'Pro Closer',
    price: 999,
    features: ['$1,200 credit value', 'Save $201', 'Great for scaling up'],
  },
  {
    title: 'Elite Access',
    price: 1499,
    features: ['$1,800 credit value', 'Save $301', 'Maximum volume & discount'],
  },
];

const OurPricingComp = () => {
  const [selectedPlanTitle, setSelectedPlanTitle] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSelectPlan = (plan: Package) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to select a package.');
      return;
    }
    setSelectedPlanTitle(plan.title);
    dispatch(setSelectedPackage(plan));
    navigate('/checkout'); // ✅ Navigate after selecting
  };

  return (
    <>
      {/* ---- Leads ---- */}
      <div className="w-full h-[500px] px-4 py-16 bg-white flex justify-center items-center">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4">
            <p className="text-sm tracking-widest text-gray-600 uppercase">Our Pricing Plans</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#ff4655] leading-tight">
              Realtors Match <br className="hidden sm:block" /> Payment Plans.
            </h1>
          </div>
          <div className="w-full lg:w-1/2 text-gray-800 text-base leading-relaxed">
            <p>
              At <span className="font-semibold text-[#ff4655]">Realtors Match</span>, our mission is to help real estate professionals grow their business and close more deals by providing high-quality, targeted property leads. To support your success, we offer three exclusive plans tailored to meet the unique needs of realtors. Explore our plans below and choose the one that best matches your goals.
            </p>
          </div>
        </div>
      </div>

      <section className="w-full body-font overflow-hidden bg-gray-50 py-20">
        <div className="w-full px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Verified Lead Rates</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Tailored plans to help real estate professionals grow and scale.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {flatLeads.map((plan) => {
              const isSelected = plan.title === selectedPlanTitle;
              return (
                <div
                  key={plan.title}
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full h-[400px] flex flex-col justify-between sm:w-72 p-6 rounded-2xl relative overflow-hidden border-2 cursor-pointer transition-all duration-300 shadow-xl hover:scale-105 ${
                    isSelected ? 'border-[#ff4655] bg-white' : 'border-gray-200 bg-gray-100'
                  }`}
                >
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-[#ff4655]">
                    {plan.title}
                  </h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    ${plan.price}
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
                    className={`mt-6 py-2 px-4 w-full text-white font-medium rounded-lg transition-all ${
                      isSelected ? 'bg-[#ff4655] hover:bg-[#e63b48]' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Choose Plan'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Bundles ---- */}
      <section className="w-full body-font overflow-hidden bg-gray-50 py-20">
        <div className="w-full px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-16">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Prepaid Bundles</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Tailored plans to help real estate professionals grow and scale.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {prepaidBundles.map((plan) => {
              const isSelected = plan.title === selectedPlanTitle;
              return (
                <div
                  key={plan.title}
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full h-[400px] flex flex-col justify-between sm:w-72 p-6 rounded-2xl relative overflow-hidden border-2 cursor-pointer transition-all duration-300 shadow-xl hover:scale-105 ${
                    isSelected ? 'border-[#ff4655] bg-white' : 'border-gray-200 bg-gray-100'
                  }`}
                >
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-[#ff4655]">
                    {plan.title}
                  </h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    ${plan.price}
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
                    className={`mt-6 py-2 px-4 w-full text-white font-medium rounded-lg transition-all ${
                      isSelected ? 'bg-[#ff4655] hover:bg-[#e63b48]' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Choose Plan'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPricingComp;
