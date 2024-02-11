import React from 'react'
// import  {VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
import { Chrono } from "react-chrono";

import { skills, experiences } from '../constants' 

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold
        drop-shadow'
      >Mekarosi Assa</span> 
      </h1>
      
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Software Engineer based in Nigeria, specialized in building full stack applications through hands-on implementation</p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I've worked with all sorts of companies, leveling up my Skills and teaming up with smart people. Here's the rundown:</p>
      </div>
      <div className='mt-12 flex'>
        {/* <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement>
              <div>
                <h3>{experience.title}</h3>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline> */}
          <Chrono mode="VERTICAL" >
          {experiences.map((experience) => (
              <div key={experience.company_name} date={experience.date}>
                <h3 className='text-black text-xl font-poppins font-semibold' >{experience.title}</h3>
                <p className='text-black-500 font-medium font-base' style={{margin:0}}>{experience.company_name}</p>
                
                <div className="chrono-icons w-[4%] h-[4%] object-contain mb-3">
                  <img src={experience.icon} alt={experience.company_name} />
                </div>
                {experience.date}
                <ul className='my-5 list-disc ml-5 space-y-2'>
            {experience.points.map((point, index) => (
              <li 
                className='text-black font-normal pl-1 text-sm'
                key={`experience-point-${index}`}
                >
                
                {point}
                <br />
                
               
              </li>
              
            ))}
          </ul>
              </div>  
                 
          ))}
               

          </Chrono>
        
       
      </div>
      </div>
    </section>
  )
}

export default About