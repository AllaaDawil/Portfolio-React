import { Bars3Icon } from '@heroicons/react/20/solid';
import React from 'react'


interface Props {
    openNav: ()=> void;
}

export const Nav = ({openNav}:Props) => {
  return (
    <div className="w-[100%] top-0 h-[12vh] bg-[#1b283a] shadow-md  fixed z-20">
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.8] cursor-pointer text-[25px] text-white font-bold'>
          WEB
          <span className='text-yellow-400'>DEVELOPER</span>
        </h1>
        <div className='nav-link'>Home</div>
        <div className='nav-link'>Services</div>
        <div className='nav-link'>About</div>
        <div className='nav-link'>Project</div>
        <div className='nav-link'>Blog</div>
        <div className='nav-link'>Contact</div>
            <div onClick={openNav}>
                    <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-400' />
            </div>
        </div>
    </div>
  );
}

export default Nav;
