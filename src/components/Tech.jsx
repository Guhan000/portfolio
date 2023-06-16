import React from "react";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-col flex-wrap justify-center items-center gap-10'>
      <div variants={textVariant()} className="flex flex-col items-center justify-center">
        <p className={`${styles.sectionSubText} `}>What I've learned so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
        
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center">
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <div >
            <img src={technology.icon}></img>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default SectionWrapper(Tech, "");
