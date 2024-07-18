// import images
import Hero_person from './assets/images/Hero/person.png';
import Hero_react from './assets/images/Hero/react.png';

import Resume from './assets/Resume.pdf';

import figma from './assets/images/Skills/figma.png';
import laravel from './assets/images/Skills/laravel.png';
import ps from './assets/images/Skills/ps.png';
import reactjs from './assets/images/Skills/react.png';
// import nodejs from "./assets/images/Skills/node.png";
import php from './assets/images/Skills/php.png';
import js from './assets/images/Skills/js.png';
import html from './assets/images/Skills/html.png';
import css from './assets/images/Skills/css.png';
import git from './assets/images/Skills/git.png';
import sql from './assets/images/Skills/sql.png';

import services_logo1 from './assets/images/Services/logo1.png';
import services_logo2 from './assets/images/Services/logo2.png';
import services_logo3 from './assets/images/Services/logo3.png';

import project1 from './assets/images/projects/img1.png';
import project2 from './assets/images/projects/img2.png';
import project3 from './assets/images/projects/img3.png';
import project4 from './assets/images/projects/google-map.png';
import person_project from './assets/images/projects/person.png';

import avatar1 from './assets/images/Testimonials/avatar1.png';
import avatar2 from './assets/images/Testimonials/avatar2.png';
import avatar3 from './assets/images/Testimonials/avatar3.png';
import avatar4 from './assets/images/Testimonials/avatar4.png';

import Hireme_person from './assets/images/Hireme/person.png';

import * as icons from 'react-icons';
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export const content = {
  nav: [
    {
      link: '#home',
      icon: TbSmartHome,
    },
    {
      link: '#projects',
      icon: RiProjectorLine,
    },
    {
      link: '#skills',
      icon: RiServiceLine,
    },
    {
      link: '#contact',
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Hello, I'm Khaled Dawod",
    subtitle: "I'm a Frontend Engineer",
    firstName: 'KHALED',
    LastName: 'DAWOD',
    btnText: 'Resume',
    btnLink: Resume,
    image: Hero_person,
    reactImage: Hero_react,
    social_icons: [
      {
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/in/khaled-daowd-1526a9271/',
      },
      {
        icon: FaGithub,
        link: 'https://github.com/khaled-dawoud',
      },
      // {
      //   icon: FaFacebook,
      //   link: 'https://www.facebook.com/profile.php?id=100023086821374',
      // },
      {
        icon: FaWhatsapp,
        link: 'https://wa.me/+201080520065',
      },
    ],
    hero_content: [
      {
        count: '2+',
        text: 'Years of Experinse in Web development',
      },
      {
        count: '20+',
        text: 'Projects Worked in my career',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'MY TOP SKILLS',
    skills_content: [
      {
        name: 'Css3',
        para: 'Experience with CSS3 styling and responsive design.',
        logo: css,
        disc: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML. It is used to create visually appealing web pages with responsive design.',
      },
      {
        name: 'Html5',
        para: 'Experience with HTML5 structure and semantic markup.',
        logo: html,
        disc: 'Hypertext Markup Language (HTML) is the standard markup language used for creating web pages and web applications. HTML5 is the latest version of HTML and includes new features such as improved semantics and multimedia support.',
      },
      {
        name: 'JavaScript',
        para: 'Experience with JavaScript and DOM manipulation.',
        logo: js,
        disc: 'JavaScript is a programming language used for creating interactive web pages and web applications. It is commonly used for client-side scripting and DOM manipulation.',
      },
      {
        name: 'React js',
        para: 'Experience with building web applications using React.',
        logo: reactjs,
        disc: 'React is a JavaScript library used for building user interfaces. It allows developers to create reusable UI components and easily manage the state of an application.',
      },
      {
        name: 'Git & Github',
        para: 'Experience with version control using Git.',
        logo: git,
        disc: 'Git is a distributed version control system used for tracking changes in source code during software development. GitHub is a web-based hosting service for version control using Git.',
      },
      {
        name: 'Figma',
        para: 'Experience with designing user interfaces using Figma.',
        logo: figma,
        disc: 'Figma is a web-based interface design tool used for creating user interfaces, prototypes, and design systems. It allows designers to collaborate in real-time and easily share their work with others.',
      },
      {
        name: 'Adobe Photoshop',
        para: 'Experience with photo editing and graphic design using Photoshop.',
        logo: ps,
        disc: 'Adobe Photoshop is a raster graphics editor used for photo editing, compositing, and graphic design. It is widely used by designers, photographers, and artists.',
      },
      {
        name: 'Laravel',
        para: 'Experience with building web applications using Laravel.',
        logo: laravel,
        disc: 'Laravel is a free, open-source PHP web framework used for developing web applications. It follows the model-view-controller (MVC) architectural pattern and includes features such as routing, authentication, and database management.',
      },
      {
        name: 'PHP',
        para: 'Experience with server-side development using PHP.',
        logo: php,
        disc: 'PHP is a server-side scripting language used for creating dynamic web pages and web applications. It is commonly used for building content management systems, e-commerce websites, and web applications.',
      },
      {
        name: 'SQL',
        para: 'Experience with database management and SQL queries.',
        logo: sql,
        disc: 'Structured Query Language (SQL) is a programming language used for managing and manipulating relational databases. It is used for creating, modifying, and querying databases.',
      },
    ],

    icon: MdArrowForward,
  },
  services: {
    title: 'Services',
    subtitle: 'WHAT I OFFER',
    service_content: [
      {
        title: 'Frontend Development',
        para: 'I specialize in building responsive and dynamic user interfaces using modern web technologies such as HTML5, CSS3, and JavaScript. I have experience with popular frontend frameworks such as React, and I always strive to create visually appealing and user-friendly designs.',
        logo: services_logo1,
      },
      {
        title: 'Photoshop Editing',
        para: 'I have extensive experience with Adobe Photoshop, and I can create high-quality photo edits, retouching, and graphic designs. Whether you need product images for an e-commerce website or custom graphics for your social media posts, I can help you create professional and visually appealing designs.',
        logo: services_logo3,
      },
      {
        title: 'Backend Development',
        para: 'I have experience with server-side programming languages such as PHP and frameworks such as Laravel. I can build robust and scalable web applications that can handle large amounts of traffic and complex business logic. I also have experience with database management and can design and optimize databases for maximum efficiency.',
        logo: services_logo1,
      },
    ],
  },
  Projects: {
    title: 'Projects',
    subtitle: 'MY CREATION',
    image: person_project,
    project_content: [
      {
        title: 'Shoe Store',
        image: project1,
        url: 'https://modern-ui-tech-store.netlify.app/',
        details: [
          'This project was created using React.js and Tailwind CSS.',
          'It utilizes Redux and Redux Toolkit for state management.',
          'The project follows best practices and utilizes dynamic components to create a modern and full responsive UI.',
        ],
      },
      {
        title: 'Delivery & Directions Google Maps',
        image: project4,
        url: 'https://effortless-eclair-19214c.netlify.app/',
        details: [
          'This project was created using React.js and Custom CSS.',
          'It utilizes Google Maps API for directions and places.',
          'The project follows best practices and utilizes dynamic components to create a modern and full responsive UI.',
          'I used context api and custom hooks for state management.',
        ],
      },
      {
        title: 'Advanced Dashboard',
        image: project2,
        url: 'https://reactjs-dashboard2.netlify.app/',
        details: [
          'This project was created using React.js and Tailwind CSS.',
          'It utilizes ContextApi for state management.',
          'The project follows best practices and utilizes dynamic components to create a modern and full responsive UI.',
        ],
      },
      {
        title: 'Twitter Clone',
        image: project3,
        url: 'https://twitter-khaled.netlify.app/',
        details: [
          'This project was created using HTML CSS for styling.',
          'It utilizes JavaScript for DOM manipulation.',
          'The project follows best practices to create a modern UI.',
          "btw, I didn't make it responsive because it was a challenge from an academy that I joined.",
        ],
      },
    ],
  },
  Testimonials: {
    title: 'Testimonials',
    subtitle: 'MY CLIENT REVIEWS',
    testimonials_content: [
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar2,
        name: 'Tom Alex',
      },
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar3,
        name: 'Johnny',
      },
      {
        review:
          '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
        img: avatar4,
        name: 'ROBBIN',
      },
    ],
  },
  Hireme: {
    title: 'Hire Me',
    subtitle: 'FOR YOUR PROJECTS',
    image1: Hireme_person,
    para: 'With 2+ years of experience in web Development, I can help bring your projects to life. I am dedicated to providing personalized solutions that meet your unique needs and exceed your expectations.',
    btnText: 'Hire Me',
  },
  Contact: {
    title: 'Contect Me',
    subtitle: 'GET IN TOUCH',
    social_media: [
      {
        text: 'Gmail',
        icon: GrMail,
        link: 'mailto:khalid.daowd@gmail.com',
      },
      {
        text: 'WhatsApp',
        icon: MdCall,
        link: 'https://wa.me/+20 108 052 0065',
      },
      {
        text: 'Instagram',
        icon: BsInstagram,
        link: 'https://www.instagram.com/khalid.daowd1/',
      },
    ],
  },
  Footer: {
    text: 'All © Copy Right Reserved 2022',
  },
};
