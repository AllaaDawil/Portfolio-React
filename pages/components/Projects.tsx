import React from 'react'

const Projects = () => {
  return (
    <div className='pt-[4rem] md:pt[8rem] pb-[5rem] bg-[#132743]'>
      <h1 className="text-center text-white text-[26px] sm:text-[32px] md:text[44px] font-bold uppercase">
        Pro <span className="text-yellow-400">Jects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] mb-[6rem] lg:mb-[2rem]">
            <img
              src="/images/c1.jpg"
              alt="Project"
              className="object-cover w-full h-full"
            ></img>
          </div>
        </div>

        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] mb-[6rem] lg:mb-[2rem]">
            <img
              src="/images/b1.jpg"
              alt="Project"
              className="object-cover w-full h-full"
            ></img>
          </div>
        </div>

        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] mb-[6rem] lg:mb-[2rem]">
            <img
              src="/images/b2.jpg"
              alt="Project"
              className="object-cover w-full h-full"
            ></img>
          </div>
        </div>

        <div>
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] mb-[6rem] lg:mb-[2rem]">
            <img
              src="/images/b5.jpg"
              alt="Project"
              className="object-cover w-full h-full"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects