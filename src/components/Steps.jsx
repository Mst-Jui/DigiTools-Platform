import React from 'react';

const stepsData = [
  {
    id: 1,
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    img: "/user-01.png",
  },
  {
    id: 2,
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    img: "/package.png",
  },
  {
    id: 3,
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    img: "/rocket-02.png",
  },
];

const Steps = () => {
  return (
    <div className='max-w-6xl mx-auto mb-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        
        {stepsData.map((step, index) => (
          <div key={step.id} className='px-2 py-2 pb-10 flex flex-col items-center border border-gray-200 bg-white text-center space-y-4 rounded-xl'>
            
            {/* number badge */}
            <div className='w-full flex justify-end'>
              <span className="mr-2 mt-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 flex items-center justify-center">
                <span className="font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            </div>

            {/* image */}
            <span className='bg-purple-100 p-4 rounded-full'>
              <img src={step.img} alt="" />
            </span>

            {/* content */}
            <h2 className='font-bold text-2xl'>{step.title}</h2>
            <p className='text-gray-500'>{step.desc}</p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Steps;