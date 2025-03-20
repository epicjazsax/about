"use client";

import { React, useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { logo, menu, close, src } from "../assets";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const navLinks = [
  { page: "/", fragment: "", id: "/#", title: "Welcome", },
  { page: "/", fragment: "experience", id: "/#experience", title: "Experience", },
  { page: "/", fragment: "overview", id: "/#overview", title: "Overview", },
  { page: "/", fragment: "domains", id: "/#domains", title: "Technology Domains", },
  { page: "/", fragment: "languages", id: "/#languages", title: "Programming Languages", },
  { page: "/", fragment: "contact", id: "/#contact", title: "Contact Me", },
  { page: "about", fragment: "", id: "/about#", title: "About", },
  // { page: "qrcode", fragment: "", id: "/qrcode#", title: "QR Code", },
  // { page: "domains", fragment: "", id: "/domain#", title: "Domains", },
  // { page: "languages", fragment: "", id: "/languages#", title: "Languages", },
];


const NameLogo = () => {
  return (
    <span className="flex flex-row items-center gap-5">
      {/* < Link href='/debug' className='flex items-center gap-2' onClick={() => { window.scrollTo(0, 0); }} >
        <Image src={logo} alt='logo' className='w-9 h-9 object-contain' />
      </Link > */}

      <Link rel="noopener noreferrer" href={'https://github.com/epicjazsax/'}>
        <FontAwesomeIcon icon={faGithub} size="2x" inverse />
      </Link>

      <Link rel="noopener noreferrer" href={'https://www.linkedin.com/in/justin-zakrajsek-6b842082/'}>
        <FontAwesomeIcon icon={faLinkedin} size="2x" inverse />
      </Link>

      {/* < Link href={'https://github.com/epicjazsax/about'} className='flex items-center gap-2'  >
        <Image src={src} alt='source' className='w-9 h-9 object-contain' />
      </Link > */}
    </span>
  );
}

const FullMenu = ({ showSize }) => {
  return (
    <ul className={`list-none hidden lg:flex ${showSize} flex-row gap-10`}>
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={'text-primary-light hover:text-secondary-light text-xl font-medium cursor-pointer'}
        >
          <a href={`${nav.page}#${nav.fragment}`}>{nav.title}</a>
        </li>
      ))}
      {/* <li
        key={'login-button'}
        className={` text-secondary hover:text-white text-[18px] font-medium cursor-pointer`}
      >
        <Button />
      </li> */}
    </ul>
  );
}

const CompressedMenu = ({ hideSize }) => {
  // I'm not sure why, but if I pass the initial toggle value in
  // it is not correctly set
  const [toggle, setToggle] = useState(false);

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setToggle(false);
    }
  };

  const handleEscape = (event) => {
    if (event.key === 'Escape') {
      if (menuRef.current) {
        setToggle(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);


  return (
    <div className={`${hideSize} flex flex-1 justify-start items-center`} >
      <Image
        src={toggle ? close : menu}
        alt='menu'
        ref={buttonRef}
        className='w-[28px] h-[28px] object-contain'
        onClick={() => setToggle(!toggle)}
      />

      <div
        // p-6 bg-primary-dark absolute top-20 left-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
        ref={menuRef}
        className={`${!toggle ? "hidden" : "flex"}
          p-6 absolute top-10 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className='bg-secondary-dark list-none flex justify-end items-start flex-1 flex-col gap-4 p-4 border-2 rounded-2xl'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-primary-light text-xl font-bold hover:bg-primary-dark hover:text-secondary-light`}
              onClick={() => { setToggle(!toggle); }}
            >
              <a href={`${nav.page}#${nav.fragment}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}
// Intended behavior:
// When scrolling down, if you are more than 100px from the top of the page,
// the navbar should be hidden.  When scrolling up, the navbar should be shown.

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  let prevScrollTop = 0;  // window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > prevScrollTop && scrollTop > 100) {
        // if scrolling down and we are down >100px from the top,
        // hide the Navbar
        setScrolled(true);
      } else if (prevScrollTop - scrollTop > 10) {
        // if scrolling up, and moved enough, show Navbar
        setScrolled(false);
      }
      prevScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-6 w-full flex items-center py-5 fixed top-0 z-20 text-base ${
        // scrolled ? "hidden" : "bg-primary-dark"  // "bg-transparent"
        // "bg-transparent"  // ignore scrolled for now
        // "bg-primary-dark"  // ignore scrolled for now
        scrolled ? "hidden" : "bg-primary-dark"
        } `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* <FullMenu showSize={'lg:flex'} />
        <CompressedMenu hideSize={'lg:hidden'} /> */}
        <CompressedMenu />
        <NameLogo />
      </div>
    </nav>
  );

};

export default Navbar;