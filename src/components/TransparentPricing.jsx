import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';


const pricingDate = [
  {
    "plan": "Starter",
    "description": "Perfect for getting started",
    "price": "$0",
    "features": [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month"
    ],
    "buttonText": "Get Started Free"
  },
  {
    "plan": "Pro",
    "description": "Best for professionals",
    "price": "$29",
    "features": [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics"
    ],
    "badge": "Most Popular",
    "buttonText": "Start Pro Trial"
  },
  {
    "plan": "Enterprise",
    "description": "For teams and businesses",
    "price": "$99",
    "features": [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding"
    ],
    "buttonText": "Contact Sales"
  }
]

const TransparentPricing = () => {

  const [select, setSelect] = useState("Pro")

  return (
    <div className='max-w-6xl mx-auto mb-20'>

      {/* page title & description */}
      <div className='text-center space-y-4 mb-12'>
        <h2 className='font-extrabold text-5xl'>Simple, Transparent Pricing</h2>
        <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          pricingDate.map((pricing, index) => (<div
            key={index}
            className={`border rounded-xl p-5 space-y-4 flex flex-col
               ${select === pricing.plan
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "border-gray-200 bg-gray-100 text-gray-500"}`}
            onClick={() => setSelect(pricing.plan)}>
            <h2 className={`font-bold text-2xl ${select === pricing.plan? "text-white" : "text-[#101727]"}`}>{pricing.plan}</h2>
            <p className=''>{pricing.description}</p>
            <h2>
              <span
                className={`font-bold text-4xl ${select === pricing.plan? "text-white" : "text-[#101727]"}`}>{pricing.price}
              </span>/Month
            </h2>
            <ul>
              {
                pricing.features.map((f, index) => <li key={index}>
                  <span className='flex items-center gap-2 font-medium'>
                    <FaCheck className={`${select === pricing.plan ? "text-white" : "text-green-500"}`} /> {f}
                  </span>
                </li>)
              }
            </ul>
            <div>
              <button
                className={`${select === pricing.plan
                  ? "bg-white text-[#4F39F6] shadow-none"
                  : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                  } btn rounded-full w-full mt-4`}>
                {pricing.buttonText}
              </button>
            </div>
          </div>))
        }
      </div>
    </div>
  );
};

export default TransparentPricing;