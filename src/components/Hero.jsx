import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';  // animations

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';  // from canvas > index.js

import mountains from "../assets/hero/mountains.png"
import moon from "../assets/hero/moon.png"
import stars from "../assets/hero/stars.png"

// const Hero = () => {
//   return (
//     <section>
//         <img src={stars} id="stars"></img>
//         <img src={moon} id="moon"></img>
//         <img src={mountains} id="mountains-behind"></img>
//         <h2 id="text">Moon Light</h2>
//         <a href="" id="btn">Explore</a>
//         <img src="https://i.imgur.com/V0jN7KL.png" id="mountains-front"></img>
//     </section>
      
//   )
// }

// export default Hero

const Hero = () => {
    const [scrollValue, setScrollValue] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollValue(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <section className="relative w-full h-screen p-16 flex justify-center items-center overflow-hidden">
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-top from-purple-900 to-transparent z-10"></div>
        <img src={stars} id="stars" className="absolute top-0 left-[calc(50% - var(--scrollValue)/4)] w-full h-full object-cover pointer-events-none" style={{ left: `${scrollValue * 0.25}px` }} />
        <img src={moon} id="moon" className="absolute top-[calc(var(--scrollValue)*1.05)] left-0 w-full h-full object-cover pointer-events-none mix-blend-screen" style={{ top: `${scrollValue * 1.05}px` }} />
        <h2 id="text" className="absolute right-[calc(-350px + var(--scrollValue)*4)] text-white whitespace-no-wrap text-7.5vw z-20" style={{ marginRight: `${scrollValue * 4}px` }}>Moon Light</h2>
        <a href="" id="btn" className="text-white text-xl inline-block px-8 py-2 rounded-full bg-white text-purple-900 z-20 transform translate-y-[calc(16px + var(--scrollValue)*1.5)]" style={{ marginTop: `${scrollValue * 1.5}px` }}>Explore</a>
        <img src={mountains} id="mountains-behind" className="absolute top-[calc(var(--scrollValue)*0.5)] left-0 w-full h-full object-cover pointer-events-none" style={{ top: `${scrollValue * 0.5}px` }} />
        <img src="https://i.imgur.com/V0jN7KL.png" id="mountains-front" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-10" />
      </section>
    );
  };
  
  export default Hero;
  
  
  
  
  
  
  