import {
    mobile,
    backend,
    debug,
    web,
    javascript,
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
    opc,
    agb,
    freelance,
    carrent,
    ticTacToe,
    wishJourney,
    ServoLight,
    ServoDark,
    portfolio,
    comingSoon,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "work",
      title: "Work",
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
      icon: debug,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Framer Motion",
      icon: framer,
    },
    {
      name: "Express",
      icon: express,
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
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "A web showcase driven by React and Javascript. Featuring a starry landing page, web/app services, and projects with TailwindCSS. Immerse in 3D, toggle dark mode, and connect seamlessly. A fusion of tech and creativity. I expanded my expertise in UX/UI, responsive design, and API-driven headless CMS while crafting this project.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink-text-gradient",
        },
        {
          name: "contentful",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        
      ],
      image: portfolio,
      source_code_link: "https://github.com/viviantaoyh/project04-portfolio",
      demo_link: "https://viviantao.surge.sh/"
    },
    {
      name: "Servo App",
      description:
        "The Servo App, a collaborative project by a team of five, focuses on creating an intuitive Single Page Application (SPA) for locating petrol stations via geographical coordinates. It utilizes JavaScript, Node.js, Express, Postgres, and RESTful APIs to offer users a comprehensive experience, pinpointing fuel stations and providing insights into fuel pricing and station statistics.",
      tags: [
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: ServoLight,
      source_code_link: "https://github.com/viviantaoyh/project03-servo-app",
      demo_link: ""
    },
    {
      name: "WishJourney",
      description:
        "WishJourney, a visionary platform for travelers and dreamers, combines technology and wanderlust. Using JavaScript, Node.js, and Postgres, it transforms travel aspirations into visual boards, going beyond traditional lists. Meticulously crafted features help users plan and experience their adventures. Dive in and let your wanderer's heart find its compass.",
      tags: [
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "ejs",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: wishJourney,
      source_code_link: "https://github.com/viviantaoyh/project02-wishjourney",
      demo_link: "https://project02-wishjourney.onrender.com/"
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "This project presents a contemporary take on the classic 'Tic-Tac-Toe' game. Crafted with HTML, CSS, and JavaScript, it seamlessly combines modern gaming experience with the enduring appeal of the original. It's easy to play: select a cell, take turns marking 'X' or 'O,' and aim to achieve a row of three. Enjoy this blend of nostalgia and modern gaming convenience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: ticTacToe,
      source_code_link: "https://github.com/viviantaoyh/project01-tic-tac-toe",
      demo_link: "https://viviantaoyh.github.io/project01-tic-tac-toe/"
    },
    {
      name: "Burgulator",
      description:
        "Coming Soon.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: comingSoon,
      source_code_link: "",
      demo_link: ""
    },
  ];

  const contacts = [
    {
      id: "email",
      name: "viviantao.dev@gmail.com",
      url: "mailto:viviantao.dev@gmail.com",
    },
    {
      id: "githuub",
      name: "github.com/viviantaoyh",
      url: "https://github.com/viviantaoyh",
    },
    {
      id: "linkedin",
      name: "linkedin.com/in/viviantao",
      url: "https://www.linkedin.com/in/viviantao/",
    },
  ];
  
  export { services, technologies, experiences, projects, contacts };