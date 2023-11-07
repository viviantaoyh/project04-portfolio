import React from 'react'
import { motion } from 'framer-motion';  // animations

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';  // from canvas > index.js

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">
          {/* dot */}
          < div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          {/* side line */}
          < div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        {/* intro */}
        <div>
          <h1 className={`${styles.introHeadText}`}>Hi, I'm <span className="text-[#915eff]">Vivian</span></h1>
          {/* <p className={`${styles.introSubText} mt-2 text-black`}>I develop 3D visuals, user <br className="sm:block hidden"/> interfaces and full stack web applications.
          </p> */}
        </div>

      </div>

        {/* 3D model */}
        {/* < ComputersCanvas /> */}

        {/* Scroll down indicator icon */}
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
      
  )
}

export default Hero