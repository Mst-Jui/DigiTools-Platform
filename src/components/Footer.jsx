import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='bg-[#101727] py-20'>
      <div className='max-w-6xl mx-auto flex justify-between items-start gap-6 text-white'>
        {/* DigiTools  */}
        <div className='flex-[2] space-y-4'>
          <h2 className='font-extrabold text-4xl'>DigiTools</h2>
          <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>

        {/* Product  */}
        <div className='flex-1 space-y-4'>
          <h3 className='font-medium text-xl'>Product</h3>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>

        {/* Company  */}
        <div className='flex-1 space-y-4'>
          <h3 className='font-medium text-xl'>Company</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
        </div>

        {/* Resources  */}
        <div className='flex-1 space-y-4'>
          <h3 className='font-medium text-xl'>Resources</h3>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Contact</p>
        </div>

        {/* Social Links  */}
        <div className='flex-1 space-y-4'>
          <h3 className='font-medium text-xl'>Social Links</h3>
          <div className='flex gap-3 items-center'>
            <span className='p-2 bg-white rounded-full flex justify-center items-center'>
              <RiInstagramFill className='text-[#101727]' />
            </span>
            <span className='p-2 bg-white rounded-full flex justify-center items-center'>
              <FaFacebook className='text-[#101727]' />
            </span>
            <span className='p-2 bg-white rounded-full flex justify-center items-center'>
              <FaXTwitter className='text-[#101727]' />
            </span>
          </div>
        </div>

      </div>


      {/* Divider  */}
      <div className="max-w-6xl mx-auto">
          <hr className='h-px border border-[#3B414E] my-12'/>

          {/* copy right  */}
          <div className='flex justify-between items-center'>
           <p className='text-gray-500'>© 2026 Digitools. All rights reserved.</p>
           <div className='flex items-center gap-6 text-gray-500'>
             <p>Privacy Policy</p>                       
             <p>Terms of Service</p>
             <p>Cookies</p>
           </div>
          </div>
       
      </div>

    </div>
  );
};

export default Footer;