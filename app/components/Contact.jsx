import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from 'next/link'
import { linkedin } from "../assets";

import AnimatedSection from "./AnimatedSection";
import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
        process.env.NEXT_PUBLIC_ALPHA,
        process.env.NEXT_PUBLIC_BETA,
        {
          from_name: form.name,
          to_name: "Justin Zakrajsek",
          from_email: form.email,
          to_email: "justin.zakrajsek@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_GAMMA
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

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

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 rounded-2xl'
    >
      <h1 className='pre-h1'>Get in touch</h1>
      <h1>Contact Me</h1>

      <div className='font-medium text-primary lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-6'>
        {/* <div className="flex gap-6 mt-8"> */}
        {/* <span>Visit my public platforms <FontAwesomeIcon icon={faLinkedin} /> <FontAwesomeIcon icon={faGithub} /></span> */}
        <span>Visit my public platforms</span>
        &nbsp;
        &nbsp;
        <Link rel="noopener noreferrer" target="_blank" href={'https://github.com/epicjazsax/'}>
          <FontAwesomeIcon icon={faGithub} inverse />
        </Link>
        &nbsp;
        &nbsp;
        <Link rel="noopener noreferrer" target="_blank" href={'https://www.linkedin.com/in/justin-zakrajsek-6b842082/'}>
          <FontAwesomeIcon icon={faLinkedin} inverse />
        </Link>
        &nbsp;
        &nbsp;
        <span>or just drop me a line below.</span>&nbsp;&nbsp;<span className='text-tertiary'>Feedback about the site is welcome.</span>
        {/* </div> */}
      </div>


      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      >

        {/* <button
            type='submit'
            className='bg-white py-3 px-8 rounded-xl outline-none w-fit text-tertiary font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button> */}

        <label className='flex flex-col'>
          {/* <span className='text-white font-medium mb-4'>Your Name</span> */}
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="Your name here"
            className='bg-primary-dark py-4 px-6 placeholder:text-primary-default text-white rounded-lg outline-none border-2 font-medium'
          />
        </label>
        <label className='flex flex-col'>
          {/* <span className='text-white font-medium mb-4'>Your email</span> */}
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="Your email address here"
            className='bg-primary-dark py-4 px-6 placeholder:text-primary-default text-white rounded-lg outline-none border-2 font-medium'
          />
        </label>
        <label className='flex flex-col'>
          {/* <span className='text-white font-medium mb-4'>Your Message</span> */}
          <textarea
            rows={7}
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='Message...'
            className='bg-primary-dark py-4 px-6 placeholder:text-primary-default text-primary-light rounded-lg outline-none border-2 font-medium'
          />
        </label>

        <button
          type='submit'
          className=' bg-primary-dark py-3 px-8 rounded-xl w-fit text-secondary-light font-bold shadow-md border-2 shadow-primary'
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  );
};

export default AnimatedSection(Contact, "contact");
