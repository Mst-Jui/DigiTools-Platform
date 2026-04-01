import React from 'react';

const WorkFlow = () => {
  return (
    <div className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20 py-20'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center space-y-4'>
          <h2 className='font-extrabold text-4xl text-white'>Ready to Transform Your Workflow?</h2>
          <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center   mt-10 mb-4'>
            <button className="btn bg-white text-[#4F39F6] shadow-none rounded-full font-semibold w-full sm:w-auto">Explore Products</button>
           
            <button className="btn btn-outline border-white text-white btn-primary rounded-full font-semibold hover:bg-white hover:text-[#4F39F6] w-full sm:w-auto">View Pricing</button>

            
          </div>
          <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;


