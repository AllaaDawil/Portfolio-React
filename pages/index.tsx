import React, {useState} from 'react'
import Nav from './components/Nav'
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';


const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className='overflow-x-hidden'>
      <div>
        {/*Nav bar*/ }
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav}/>

         {/*Hero Section*/ }
         
         <Hero/>
         <div className='relative z-[30]'>
          <About/>
          <Services/>
          <Skills/>
          <Projects/>
          <Blog/>
          <Footer/>
         </div>
      </div>
    </div>
  )
}

export default HomePage