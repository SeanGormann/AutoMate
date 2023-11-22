import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import styles from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black-gradient p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-gradient font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section id="services">
      <>
        <motion.div variants={textVariant()}>
          {/* <p className={`${styles.sectionSubText} `}>Our work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
          <span className="text-gradient">Next Gen</span> */}
          <h2 className={`${styles.sectionHeadText}`}>
              Our <br className="sm:block hidden" />{" "}</h2>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              <span className="text-gradient">Services</span>{" "}
          </h1>
        </motion.div>

        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-white text-[17px] max-w-3xl leading-[30px]'
          >
            Currently, we focus on 3 main areas: building expert chatbots, automating the 
            lead generation process and automating many repetitive processes experienced by our 
            clients. Please see below for more details. At the end of the day, we are here to assist you 
            based on your individual needs.
          </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </>
    </section>
  );
};

export default SectionWrapper(Works, "");
