import React, { useState } from 'react';
import { BsMoonStars, BsSun } from "react-icons/bs"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, darkLogo } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isdarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!isdarkMode);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-white-light dark:bg-black-dark`}>

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo and Title */}
        <Link 
          to="/" 
          className="flex items-center gap-2"
          onClick={() => { 
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src={isdarkMode? darkLogo : logo} 
            alt="logo" 
            className="w-10 h-10 object-contain" />
          {/* <p className="text-black-light dark:text-white-dark text-[18px] font-bold cursor-pointer hover:text-secondary dark:hover:text-secondary">Vivian Tao.</p> */}
        </Link>

        {/* NavLinks */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                active === link.title
                ? "text-secondary"
                : "text-black-light dark:text-white-dark"
              } hover:text-secondary dark:hover:text-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          
          {/* Button to toggle dark mode */}
          <button
            className="text-black-light dark:text-white-dark dark:hover:text-secondary cursor-pointer hover:text-secondary"
            onClick={toggleDarkMode}
          >
            {isdarkMode 
            ? <BsSun size={23} />
            : <BsMoonStars size={23} />
            }
          </button>
        </ul>
        
        {/* NavLinks Mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">

          {/* Toggle Button */}
          {isdarkMode 
          ? (toggle 
              ? <AiOutlineClose className="w-[28px] h-[28px] object-contain cursor-pointer dark:text-white" onClick={() => setToggle(!toggle)}/> 
              : <AiOutlineMenu className="w-[28px] h-[28px] object-contain cursor-pointer dark:text-white" onClick={() => setToggle(!toggle)}/>) 
          : (toggle 
              ? <AiOutlineClose className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}/> 
              : <AiOutlineMenu className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}/>)} 


          {/* Toggle NavLinks */}
          <div className={`${!toggle ? 'hidden' : 'flex' } p-6  black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li 
                key={link.id}
                className={`${
                  active === link.title
                  ? "text-secondary"
                  : "text-white-dark"
                } hover:text-secondary dark:hover:text-secondary text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            {/* Button to toggle dark mode */}
            <button
              className="text-white cursor-pointer hover:text-secondary"
              onClick={toggleDarkMode}
            >
              {isdarkMode 
              ? <BsSun size={23} />
              : <BsMoonStars size={23} />
              }
            </button>
            </ul>
          </div>

        </div>


      </div>

    </nav>

  )
}

export default Navbar