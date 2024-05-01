import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Blog = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#02050a]'>
        <h1 className='text-center text-white text-[26px] sm:text-[32px] md:text[44px] font-bold uppercase'>
            My<span className='text-yellow-400'> Blog</span>
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto' >
            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <img src='/images/b4.jpg' alt='Blog' className='object-cover w-full h-full'/>
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem] '>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold
                    text-[17px] mx-auto' >
                        Septemper 10,2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                            <p className='text-white'>By Allaa</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                            <p className='text-white'>Comments (16)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>
                        Next Js FullStack Dev
                    </p>
                </div>
            </div>
            <div>
                <div className='w-[100%] relative h-[400px]'>
                    <img src='/images/d2.jpg' alt='Blog' className='object-cover w-full h-full'/>
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem] '>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold
                    text-[17px] mx-auto' >
                        November 12,2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                            <p className='text-white'>By Allaa</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                            <p className='text-white'>Comments (7)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>
                        Java Script New Features
                    </p>
                </div>
            </div>

             <div>
                <div className='w-[100%] relative h-[400px]'>
                    <img src='/images/d3.jpg' alt='Blog' className='object-cover w-full h-full'/>
                </div>
                <div className='w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem] '>
                    <div className='w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold
                    text-[17px] mx-auto' >
                        December 8,2023
                    </div>
                    <div className='flex flex-col md:flex-row items-center mt-[1rem] space-x-4'>
                        <div className='flex items-center space-x-3'>
                            <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                            <p className='text-white'>By Allaa</p>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]'/>
                            <p className='text-white'>Comments (6)</p>
                        </div>
                    </div>
                    <p className='mt-[1rem] text-white text-[18px] font-semibold'>
                        React Js New Features
                    </p>
                </div>
            </div>        
            </div>
    </div>
  )
}

export default Blog