import { CodeBracketSquareIcon } from '@heroicons/react/20/solid';
import React from 'react'
import { CommandLineIcon } from '@heroicons/react/20/solid';
import { CloudIcon } from '@heroicons/react/20/solid';

const Services = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt[8rem] pb-[5rem]">
      <p className="text-center text-white text-[26px] sm:text-[32px] md:text[44px] font-bold uppercase">
        My<span className="text-yellow-400">Services</span>
      </p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center 
            gap-[3rem] mt-[4rem] text-white"
      >
        <div className='bg-red-300 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
        uppercase font-semibold text-center p-[2rem]'>
            <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                Frontend
            </h1>
            <p className='text-[15px] text-[#d3d2d2] font-normal'>
                Lorem Ipsum is simply dummy text of the printing and,
                 typesetting industry.
            </p>
        </div>

        <div className='bg-red-500 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
        uppercase font-semibold text-center p-[2rem]'>
            <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
            Backend
            </h1>
            <p className='text-[15px] text-[#d3d2d2] font-normal'>
                Lorem Ipsum is simply dummy text of the printing and,
                 typesetting industry.
            </p>
        </div> 

        <div className='bg-red-600 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
        uppercase font-semibold text-center p-[2rem]'>
            <CloudIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>
                Fullstack
            </h1>
            <p className='text-[15px] text-[#d3d2d2] font-normal'>
                Lorem Ipsum is simply dummy text of the printing and,
                 typesetting industry.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Services