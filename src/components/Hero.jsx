import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';  // animations

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';  // from canvas > index.js

import mountainsFront from "../assets/hero/mountainsFront.png"
import mountainsBehind from "../assets/hero/mountainsBehind.png"
import moon from "../assets/hero/moon.png"
import stars from "../assets/hero/stars.png"

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
      <section className="bg-black-dark relative w-full h-screen p-16 flex justify-center items-center overflow-hidden">
        <div className="absolute bottom-0 w-full h-16 bg-gradient-to-top from-purple-900 to-transparent z-10"></div>

        <img src={stars} id="stars" className="absolute top-0 left-[calc(50% - var(--scrollValue)/4)] w-full h-full object-cover pointer-events-none" style={{ left: `${scrollValue * 0.25}px` }} />

        <img src={moon} id="moon" className="absolute top-[calc(var(--scrollValue)*1.05)] left-0 w-full h-full object-cover pointer-events-none mix-blend-screen" style={{ top: `${scrollValue * 1.05}px` }} />

        {/* <h2 id="text" className="absolute right-[calc(-350px + var(--scrollValue)*4)] text-white whitespace-no-wrap text-9xl font-bold display-font z-10" style={{ marginRight: `${scrollValue * 4}px` }}>VIVIAN <br /><span className="display-font ml-20 pl-10">TAO</span></h2>

        <span className="absolute right-[calc(-350px + var(--scrollValue)*4)] text-white whitespace-no-wrap text-s font-bold display-font z-10" style={{ marginRight: `${scrollValue * 4}px` }}>Full-Stack Software Developer</span> */}

        <div className="absolute right-[calc(-350px + var(--scrollValue)*4)] text-white whitespace-no-wrap z-10">
            <h2 className="text-9xl font-bold display-font" style={{ marginRight: `${scrollValue * 4}px` }}>
              VIVIAN <br />
              <span className="display-font ml-20 pl-10">TAO</span>
            </h2>
            <a href="#about" className="ml-20 pl-10 text-lg text-accent-dark display-font opacity-0 xl:opacity-100 hover:underline underline-offset-4 ">Full-Stack Software Developer</a>
          </div>

        <img src={mountainsBehind} id="mountains-behind" className="absolute top-[calc(var(--scrollValue)*0.5)] left-0 w-full h-full object-cover pointer-events-none" style={{ top: `${scrollValue * 0.5}px` }} />

        <img src={mountainsFront} id="mountains-front" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-10" />


        {/* Scroll down indicator icon */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                // the dot
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>

      </section>
    );
  };
  
  export default Hero;
  
  
  
  
  
  
  