import React from 'react'
import 'react-vertical-timeline-component/style.min.css';
import { Chrono } from "react-chrono";

import { skills, experiences, socialLinks } from '../constants' 
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold
        drop-shadow'
      >Mekarosi Assa</span> 
      </h1>
      
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>A Software Engineer based in Nigeria who is always seeking for better ways to getting things done. A graduate of process engineer from  
         from University of Lagos, Nigeria. I am specialized in building full stack applications through hands-on implementation</p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-20 h-20'>
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

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Social Media Links</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {socialLinks.map((socialLink) => (
            <div 
            key={socialLink.name} 
            className='block-container w-20 h-20 cursor-pointer'
            onClick={(e) => {
              e.preventDefault();
              window.location.href=`${socialLink.link}`
              }}
            >
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img  
                  src={socialLink.iconUrl}
                  alt={socialLink.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience / Training</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>My work experiences and trainings has enabled me to level up my Skills and team up with smart people. Here's the rundown:</p>
      </div>
      <div className='mt-12 flex'>
   
          <Chrono 
          mode="VERTICAL" 
          items={experiences} 
          slideShow
          slideItemDuration={2500}
          slideShowType="slide_from_sides"
          theme={{
            primary: '#EDC21F',
            secondary: '#F0EEBD',
            cardBgColor: '#EFEEEC',
            titleColor: 'black',
            titleColorActive: '#1E1BEF',
          }}
          >
          {experiences.map((experience) => (
              <div key={experience.cardSubtitle} cardTitle={experience.cardTitle}>
                <h3 className='text-black text-xl font-poppins font-semibold' >{experience.title}</h3>
                <p className='text-black-500 font-medium font-base'>{experience.cardSubtitle}</p>
                
                <div className="chrono-icons w-[4%] h-[4%] object-contain mb-3">
                  <img src={experience.icon} alt={experience.cardSubtitle} />
                </div>
                {experience.cardTitle}
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

      <hr className='border-slate-200'/>
     <CTA />
    </section>
  )
}

export default About