import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const Hero = () => {
  return (
    <div
      className="h-[88vh] bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      <Particle />
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center absolute top-0 left-20 z-10">
            <div>
                <h1 className="text-[35px] md:text-[50px] text-white font-bold">
                    Hello, I am <span className="text-yellow-400">Allaa</span>
                </h1>
                <TextEffect />
                <p className='mt-[2rem] text-[20px] text-[#ffffff92]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                    <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                    font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                    <p>Download Cv</p>
                    <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                    </button>
                    <button className='flex items-center space-x-2'>
                        <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-20
                        text-[#55e6a5]'/>
                        <p className='text-[20px] font-semibold text-white'>Watch The Video</p>
                    </button>
                    
                </div>
            </div>
            <div className='w-[350px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[350px]'>
                    <img src="/images/a4.jpg" 
                    alt="user" 
                    className="object-cover rounded-full"/>
            </div>
        </div>
    </div>
  );
};

export default Hero