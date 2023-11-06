import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    python,
    html,
    css,
    reactjs,
    express,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    postgres,
    framer,
    meta,
    opc,
    agb,
    freelance,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Mobile App Development",
      icon: mobile,
    },
    {
      title: "Server Side Construction",
      icon: backend,
    },
    {
      title: "Quality Assurance",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Framer Motion",
      icon: framer,
    },
  ];
  
  const experiences = [
    {
      title: "Graduate Software Engineer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#383E56",
      date: "Jul 2020 - Present",
      points: [
        "Collaborate with clients to determine project scope and requirements.",
        "Develop custom themes and plugins using HTML, CSS, and JavaScript",
        "700+ hours of coding experience, proactive problem solving, refactoring mine (and others) code.",
        "Completed a Full stack web development course using modern technologies such as Node.js, React, Ruby, CSS, HTML, Express and SQL Databases.",
        "Ongoing skills development.",
      ],
    },
    {
      title: "Accounts Officer",
      company_name: "Aussie Global Books",
      icon: agb,
      iconBg: "#383E56",
      date: "Dec 2019 - Present",
      points: [
        "Managed account receivables, payables, and oversaw payroll procedures.",
        "Compiled BASs and comprehensive financial reports leveraging MYOB.",
        "Efficiently addressed and resolved email inquiries from clients, team members, and third-party accountants.",
      ],
    },
    {
      title: "Tax Accountant",
      company_name: "Oxygen Private Client",
      icon: opc,
      iconBg: "#383E56",
      date: "Aug 2021 - Apr 2023",
      points: [
        "Honored with the 2022 Employee Excellence Award for outstanding performance.",
        "Prepared tax returns and financial statements for over 100 client groups utilizing Xero, MYOB and Reckon.",
        "Served as second in charge for over 30 client groups, managing client relationships and providing liaison services.",
        "Streamlined account receivable, account payable, and payroll processes for multi million dollar organizations.",
        "Drafted internal procedural guidelines and documentation for clients.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };