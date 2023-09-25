'use client'

import React from 'react';

interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => {
  return (
    <div style={{ color: 'white' }}  className='flex flex-col justify-center align-middle  h-[80vh] text-center' >
    <p className='font-bold text-6xl capitalize text-blue-800 mt-10'> error ...</p>  
  
    </div>
  );
}

export default Error;