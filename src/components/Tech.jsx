import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";  // 3D balls
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Skill = ({technology}) => {
  return (
        <div className="group relative flex flex-col cursor-pointer justify-center rounded-2xl border-2 border-tertiary dark:border-accent-dark hover:border-primary dark:hover:border-primary dark:text-white object-contain items-center">
        <img
            src={technology.icon}
            alt={technology.name}
            width="200"
            height="200"
            className="p-3 object-over w-28 h-28 md:w-28 md:h-28 2xl:h-50 2xl:w-50 filter group-hover:opacity-[20%] transition duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:scale-110 items-center h-full font-bold text-center flex display-font">
            <p className="opacity-100">{technology.name}</p>
        </div>
    </div>
  )
}

const Tech = () => {
  return (

    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have experience in
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>
        Technologies.
      </h2>
    </motion.div>
    
    {/* balls container */}
    <div className='mt-10 flex flex-row flex-wrap justify-center gap-10'>

      {/* loop through all tech */}
      {technologies.map((technology) => (

        // display each 3D tech icon ball
        <div className='w-28 h-28' key={technology.name}>
          <Skill technology={technology} />
        </div>
        
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");