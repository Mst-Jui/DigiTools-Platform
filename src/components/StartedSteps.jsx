import React from 'react';
import Steps from './Steps';

const StartedSteps = () => {
  return (
    <div className='mt-30'>
      <div className='text-center space-y-4 mb-12'>
        <h2 className='font-extrabold text-5xl'>Get Started in 3 Steps</h2>
        <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <Steps />
    </div>
  );
};

export default StartedSteps;