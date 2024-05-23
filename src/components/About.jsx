import React from "react";
import Tilt from "react-parallax-tilt"; // Uncomment this import
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import AnimatedText from "./AnimatedText/AnimatedText";
import avatar from "../assets/about/IdidThat.png";


const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'>
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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <div className="text-4xl">
          <AnimatedText text={'Overview'} />
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>
          I'm Mak Trnka, enrolled in <span style={{ color: "red" }}>CODE FELLOWS</span> learning Software Development for the first time. My enthusiasm lies at the intersection of technology and creativity. Currently, I'm adept in JavaScript, CSS, React, and the MERN stack, with a newfound interest in mastering AWS and TypeScript. Beyond that, I aspire to delve into the realm of Data Science.
        </p>
        <br />
        <p>
          Outside the realm of technology, I'm an <span style={{ color: "Plum" }}>AVID TRAVELER</span>, having explored 25 countries to date. My interests span across the world data, history, (geo)politics, diverse cultures, and societal dynamics. Therefore, Traveling will always be one of my major talents and hobbies.
        </p>
        <br />
        <p>
          I've been described by many as <span style={{ color: "Pink" }}>OMNILEGENT</span>. In addition to the other topics mentioned, my interest also span across other topics such as Movies, Pop Culture, Personal Life, Basketball, Wildlife, Food, Breaking News, other Data, and such. I harbor aspirations of starting a podcast to discuss these eclectic topics or even start a youtube channel.
        </p>
        <br />
        <p>
          I'm also a <span style={{ color: "Orange" }}>SERIAL CREATOR</span>. I possess a knack for ideation and enjoy crafting visually engaging presentations and data-driven reports in tools like Word, Excel, and PowerPoint. What also makes me a serial creator is the fact I have many Business ideas, App ideas, Legislative ideas, and creating content for several different topics (Positive effects come from having ADHD and being on the Spectrum as well as you can see).
        </p>
        <br />
        <p>
          So stick around, take a look, and feel free to reach out if you ever want to meet up or begin a new journey in life! For a comprehensive overview, feel free to peruse my <span style={{ color: "#89dc88" }}>RESUME</span>.
        </p>
      </motion.p>

      {/* <div className="intro-image" style={{ marginTop: '0px'}}>
          <Tilt>
            <img
              class="rounded w-100 h-100"
              src={avatar}
              alt="Extra large avatar"
            ></img>
          </Tilt>
      </div> */}

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
