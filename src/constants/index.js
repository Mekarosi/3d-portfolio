import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    twitter,
    
    
} from "../assets/icons";

import facebook  from "../assets/extras/facebook.png"
import instagram  from "../assets/extras/instagram.png"
import dev  from "../assets/extras/dev.png"
import coding  from "../assets/extras/coding.png"
import crypto  from "../assets/extras/crypto.png"
import family  from "../assets/extras/family.png"
import aeroplane  from "../assets/extras/aeroplane.png"
import ror from "../assets/extras/ror.png" 
import cohit from "../assets/extras/cohit.JPG" 
import h4h from "../assets/extras/h4h.JPG" 
import midland from "../assets/extras/midland.JPG" 


export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: ror,
        name: "Ruby on Rails",
        type: "Full stack",
    }
];

export const experiences = [
    {
        title: "Full-stack Developer",
        company_name: "Midland Digital Solutions",
        icon: midland,
        iconBg: "#accbe1",
        date: "June 2021 - Jan 2022",
        points: [
            "Developing and maintaining web applications using React.js for frontend and Nodejs for backend.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            
        ],
    },
    {
        title: "React Developer",
        company_name: "Cohit",
        icon: cohit,
        iconBg: "#fbc3bc",
        date: "Feb 2021 - June 2022",
        points: [
            "Design and implementation of user interfaces (UIs) and UI components using React, a front-end JavaScript library.",
            "Collaborating with back-end developers and web designers to improve usability",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Implementation of SEO principles"
        ],
    },
    {
        title: "Web Developer(Remote)",
        company_name: "Health4Humanity Inc",
        icon: h4h,
        iconBg: "#b7e4c7",
        date: "May 2020 - Jan 2021",
        points: [
            "Using markup languages like HTML to create user-friendly web pages",
            "Maintaining and improving website",
            "Implementing responsive design and ensuring cross-browser compatibility.",
           
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Mekarosi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mekarosi-assa-5b268516b',
    },
    {
        name: 'X',
        iconUrl: twitter,
        link: 'https://twitter.com/MercyAssa',
    },
    {
        name: 'DEV.io',
        iconUrl: dev,
        link: 'https://dev.to/mekarosi',
    },
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com/kidslovecode/',
    },
    {
        name: 'Facebook',
        iconUrl: facebook,
        link: 'https://web.facebook.com/mercy.assa',
    }
   
];

export const projects = [


    {
        iconUrl: crypto,
        theme: 'btn-back-red',
        name: 'Cryptoverse',
        description: "A cryptocurrency app built with react and antD that consumes an api to display information about all you need to know regarding cryptocurrency.",
        preview: 'https://crypto-app122.netlify.app/',
        link: 'https://github.com/Mekarosi/cryptoverse'
    },
    {
        iconUrl: estate,
        theme: 'btn-back-green',
        name: 'Real Estate App',
        description: "A real estate app that consumes an api where users can search for properties to rent and buy.",
        preview: 'https://realestate-app-henna.vercel.app/',
        link: 'https://github.com/Mekarosi/real_estate_app'
    },
    
    {
        iconUrl: family,
        theme: 'btn-back-blue',
        name: 'Contact Keeper',
        description: 'An app for keeping connects of friends',
        preview: 'http://desolate-waters-70900.herokuapp.com/',
        link: 'https://github.com/Mekarosi/contact-keeper'
    },
    {
        iconUrl: coding,
        theme: 'btn-back-pink',
        name: 'DevMatch App',
        description: "A developer's social-networking app, built with MERN stack, allowing users to connect with friends in a familiar social media environment.",
        preview: 'https://devmatch-cdju.onrender.com/',
        link: 'https://github.com/Mekarosi/dematch_frontend'
    },
  
    {
        iconUrl: aeroplane,
        theme: 'btn-back-yellow',
        name: 'Open flight app',
        description: "An app for reviewing customers' experience with airlines, built with React.js for frontend and ruby on rails for backend respectively.",
        preview: 'https://open-flights101.herokuapp.com/',
        link: 'https://github.com/Mekarosi/open-flight-app'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Github Finder App',
        description: " An app for finding developers by username on Github, built with MERN stack",
        preview: 'https://vibrant-carson-812949.netlify.app/',
        link: 'https://github.com/Mekarosi/open-flight-app'
    }
];