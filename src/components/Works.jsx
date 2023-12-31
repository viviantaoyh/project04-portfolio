import React, { useEffect, useState } from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { Carousel } from '@mantine/carousel';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { styles } from "../styles";
import { github, open } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";  // project data
import { fadeIn, textVariant } from "../utils/motion";

// define and style each project card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link
}) => {

  return (

    // define animation
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

      {/* card container*/}
      <div className='bg-secondary dark:bg-primary p-5 rounded-2xl sm:w-[360px] w-full h-[580px]'>
        
        <div className='relative w-full h-[230px]'>
          {/* project screenshot */}
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          {/* gitHub icon and open that link in new window*/}
          <div className='absolute inset-0 flex justify-end m-3'>
                {source_code_link && <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer cursor-custom'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>}

            {/* demo link */}
            {demo_link && <div className='absolute top-0 right-11 flex justify-end'>
              <div
                onClick={() => window.open(demo_link, "_blank")}
                className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer cursor-custom'
              >
                <img
                  src={open}
                  alt='demo link'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>}
          </div>
        </div>

        {/* Project name and description */}
        <div className='mt-5'>
          <h3 className='text-white dark:text-black-light font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white dark:text-black display-font text-[14px]'>{description}</p>
        </div>

        {/* display tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] text-tertiary display-font`}
              // className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// render the work/project section
const Works = () => {

  return (
    <>
      {/* header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* project description */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 mb-10 text-black-light dark:text-white-dark display-font text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is introduced with direct access to its code repositories and live demos. They stand as evidence of my ability in tackling complex challenges, adeptly navigating diverse technologies, and demonstrating effective project management.
        </motion.p>
      </div>


      {/* Carousel Container */}
      <div className="relative">
        <Carousel 
          sx={{ flex: 1 }} 
          mx="auto" 
          withIndicators 
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap={{ base: 0, sm: 'md' }}
          align="start"
          nextControlIcon={<IoIosArrowForward className="w-10 h-10 animate-bounce cursor-custom"/>}
          previousControlIcon={<IoIosArrowBack className="w-10 h-10 animate-bounce cursor-custom"/>}
          controlSize={50} 
          width="100%" 
          height="100%" 
          controlsOffset="xl" 
          slidesToScroll={1}
          className="rounded-lg">
          
        {/* individual projects */}
        {projects.map((project, index) => (
          
          <Carousel.Slide key={`project-${index}`} index={index} className="rounded-lg h-full pr-0 md:mr-4 mr-2">

              <ProjectCard {...project} key={`project-${index}`} index={index} />

          </Carousel.Slide>
        ))}

        </Carousel>
      </div> 

    </>
  );
};

export default SectionWrapper(Works, "projects");