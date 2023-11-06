import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io"
import { AiOutlineSend } from 'react-icons/ai';
import { IoLocationSharp } from "react-icons/io5"
import { Link } from 'react-router-dom'

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {

  // form useState
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // form loading useState
  const [loading, setLoading] = useState(false);

  // event handlers functions
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_4pj2t5q",
        "template_4d1xv5d",
        {
          from_name: form.name,
          to_name: "Vivian",
          from_email: form.email,
          to_email: "viviantaoyh@gmail.com",
          message: form.message,
        },
        "k8j0mu4w4RaeaTcZr"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  function Footer() {
    return(
        <footer className="text-black-light dark:text-white-dark absolute bottom-0 w-[95%] md:w-full border-t-secondary dark:border-t-primary border-t-2 text-sm text-center md:text-sm pt-5">
        {/* <p className="px-3 display-font">
          Built using React, Tailwind CSS, Three.js, and Vercel.
        </p> */}
        <p className="display-font">&#169; 2023 viviantaoyh</p>
      </footer>
    )
  }


  return (
    <div className="flex flex-col gap-10 relative">

    {/* // Display styles for larger devices */}
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Animation for form section - to slide in from left */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-secondary dark:bg-primary p-8 rounded-2xl shadow-2xl shadow-indigo-500/50'
      >
        {/* header */}
        <p className="sm:text-[18px] text-[14px] text-black-light display-font uppercase tracking-wider">Get in touch</p>
        <h3 className="text-black-light font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

          <div className="flex items-center justify-left space-x-5 my-1 w-fit">
            <IoLocationSharp className="text-xl md:text-2xl text-primary dark:text-black" />
            <p className="text-base md:text-lg">
               Melbourne
            </p>
          </div>

          <div className="flex items-center justify-left space-x-5 my-1 w-fit">
            <IoIosMail className="text-xl md:text-2xl text-primary dark:text-black" />
            <a href="mailto:viviantao.dev@gmail.com" className="text-base md:text-lg">viviantao.dev@gmail.com</a>
          </div>
          
          <div className="flex items-center justify-left space-x-5 my-1 w-fit">
            <IoLogoGithub className="text-xl md:text-2xl text-primary dark:text-black" />
            <a href="https://github.com/viviantaoyh" target="_blank" className="text-base md:text-lg">github.com/viviantaoyh</a>
          </div>
          
          <div className="flex items-center justify-left space-x-5 my-1 w-fit">
            <IoLogoLinkedin className="text-xl md:text-2xl text-primary dark:text-black" />
            <a href="https://www.linkedin.com/in/viviantao/" target="_blank" className="text-base md:text-lg">linkedin.com/in/viviantao</a>
          </div>

        {/* contact form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/* Your name section */}
          <label className='flex flex-col gap-2'>
            <div className="flex items-center justify-left space-x-5 my-1 w-fit">
            <AiOutlineSend className="text-xl md:text-2xl text-primary dark:text-black" />
            <p className="text-base md:text-lg">Send me a message:</p>
          </div>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className='bg-white-light dark:bg-black-dark py-4 px-6 placeholder:text-secondary text-black-light dark:text-white-dark rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Your email section */}
          <label className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              className='bg-white-light dark:bg-black-dark py-4 px-6 placeholder:text-secondary text-black-light dark:text-white-dark rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Your message section */}
          <label className='flex flex-col'>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Your message'
              className='bg-white-light dark:bg-black-dark py-4 px-6 placeholder:text-secondary text-black-light dark:text-white-dark rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* submit button */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl w-fit text-black-light display-font font-bold shadow-md shadow-white'
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      </motion.div>

      {/* set animation for earth model - to slide in from right */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>

    <div className="mt-20">
      <Footer />
    </div>

    </div>
  );
};

export default SectionWrapper(Contact, "contact");