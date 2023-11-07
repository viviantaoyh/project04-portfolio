import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { picture } from "../assets"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>

    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-secondary dark:bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white-dark dark:text-black-light text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-20">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-black-light dark:text-white-dark display-font text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a junior software developer based in Melbourne. After dedicating 4 years in accounting as a tax accountant and accounts officer, I embraced a new journey into software engineering. This shift is fueled by my passion for technology and recognizing that my meticulous nature could bring fresh insights to tech. <br/> <br/>

          I deeply value a balanced career, both challenging and rewarding. My colleagues know me as a problem-solver, a quick learner, and a friendly team member. Such traits, combined with my background spanning finance and technology, empower me to craft software solutions that resonate with real needs, harmoniously merging traditional expertise with contemporary innovation. With each day, I'm presented with a fresh opportunity to learn, innovate, and leave a lasting impact. <br />

        <button
            type="button"
            className='btn mt-10 animate-bounce'
        >
            <a href="">View Resume</a>
        </button>
        </motion.p>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-black-light dark:text-white-dark display-font text-[17px] max-w-3xl leading-[30px]'
        >
          <img src={picture} className="lg:h-30 object-contain" alt="image" />
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center lg:justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
