import React from 'react';

const StatsSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 px-45 mb-15'>
      {/* first  */}
      <div className='text-white text-center space-y-4 '>
        <h2 className='font-extrabold text-6xl'>50K+</h2>
        <p className='font-medium text-2xl'>Active Users</p>
      </div>

      <span className='hidden md:block w-0.5 h-24 bg-[#969696]'></span>

      {/* middle  */}
      <div className='text-white text-center space-y-4'>
        <h2 className='font-extrabold text-6xl'>200+</h2>
        <p className='font-medium text-2xl'>Premium Tools</p>
      </div>


     <span className='hidden md:block w-0.5 h-24 bg-[#969696]'></span>

      {/* end  */}
      <div className='text-white text-center space-y-4'>
        <h2 className='font-extrabold text-6xl'>4.9</h2>
        <p className='font-medium text-2xl'>Rating</p>
      </div>
    </div>
  );
};

export default StatsSection;


// flex flex-col justify-center items-center