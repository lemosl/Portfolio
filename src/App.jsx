import React, { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import HeroSection from './components/HeroSection';


const App = () => {
 useEffect(() => {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
      });  
    }, []);
    return (
      <div className='bg-[#111827] min-h-screen'>
        <Header />
        <HeroSection/>
      </div>
    )
}

export default App
