import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import bannerImg from '../assets/banner.png'

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=''>
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg"
          />
        </div>

        {/* info  */}
        <div className='space-y-4'>
          {/* badge  */}
          <span className=' bg-[#E1E7FF] py-1 rounded-full px-5 inline-flex items-center gap-2'>
            <img src="/circle.png" alt="" />
            <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
              New: AI-Powered Tools Available</span>
          </span>

          <h1 className="text-7xl  font-extrabold text-[#101727]">Supercharge Your Digital Workflow</h1>
          <p className="text-[#627382] text-[18px]">
            Access premium AI tools, design assets, templates, and productivitysoftware—all in one place. Start creating faster today.Explore Products
          </p>
          <div className='flex gap-4'>
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</button>



            <button className="btn btn-outline btn-primary rounded-full"><CiPlay1 className='text-[#4F39F6]' /> Watch Demo</button>










          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;