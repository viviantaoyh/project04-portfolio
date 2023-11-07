import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// define and style each experience card
const ExperienceCard = ({ experience }) => {
  return (
    // style the timeline
    <VerticalTimelineElement
      lineColor={"black"}
      contentStyle={{
        background: "#B8B0E5",
        color: "#333333",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}

      // experience date
      date={experience.date}

      // style the icon in the timeline
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[70%] h-[70%] object-contain'
          />
        </div>
      }
    >
      <div>
        {/* Job title */}
        <h3 className='text-white-dark dark:text-black-light text-[24px] font-bold'>{experience.title}</h3>

        {/* Company name */}
        <p
          className='text-tertiary dark:text-accent-dark text-[16px] font-bold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* bullet point experience */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-dark dark:text-black-light display-font text-[15px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


// render experience section
const Experience = () => {
  return (
    <div>
      {/* header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      {/* vertical timeline */}
      <div className='mt-10 flex flex-col bg-gray-100'>
        <VerticalTimeline>

          {/* loop through experiences */}
          {experiences.map((experience, index) => (

            // display each experience card
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");