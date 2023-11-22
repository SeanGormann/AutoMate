import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import styles from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient( 144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)",
        color: "#fff",
      }}
      
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id='pipeline' className={styles.paddingY}>
        <>
        <motion.div variants={textVariant()}>
        <p className={`${styles.heading2} text-center`}>
            Interested?</p>
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-center">
                <span className="text-gradient">Workflow Pipeline</span>{" "}
            </h1>
        </motion.div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] rounded-full pink__gradient bottom-50" />
            <div className="absolute z-[1] w-[40%] h-[30%] rounded-full white__gradient bottom-50" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-30 bottom-30 blue__gradient" />
            {/* gradient end */}
        
            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                    key={`experience-${index}`}
                    experience={experience}
                    />
                ))}
                </VerticalTimeline>
            </div>
        </div>
        </>
    </section>
  );
};

export default SectionWrapper(Experience, "work");
