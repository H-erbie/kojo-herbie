'use client'
import React, {useRef, useState, useEffect} from 'react'
import { ThemeToggle } from './themeToggle'
import Image from 'next/image'
import darkLogo from '@/public/logoDark.png'
import lightLogo from '@/public/logoLight.png'
import { RiHome2Fill, RiUserFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { BsStack, BsLaptopFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import useActiveLink from './useActiveLink';


const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const observer = useRef(null);

  useEffect(() => {
//create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
//Update state with the visible section ID
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

//Get custom attribute data-section from all sections
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      observer.current.observe(section);  
    });
//Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);
  

  const navIcons = [
    {icon: <RiHome2Fill/>, url: '#home'},
    {icon: <RiUserFill/>, url: '#about'},
    {icon: <MdWork/>, url: '#experience'},
    {icon: <BsStack/>, url: '#skills'},
    {icon: <BsLaptopFill/>, url: '#projects'},
    {icon: <IoMdMail/>, url: '#contact'},
  ]

  return (
    <nav className="lg:w-1/2 md:left-[20% ] lg:left-[25%] sm:w-[70%] sm:left-[15%] md:w-[60%]  w-full sm:rounded-[2rem] dark:backdrop-brightness-[0.7] backdrop-brightness-[0.9] backdrop-blur-lg z-40  flex   fixed bottom-0 left-0 ">
    <div className='justify-evenly sm:justify-between  w-full  sm:gap-x-4    flex items-center '>
      {navIcons.map((icon, index) => {
        const linkName = icon.url.split('#')
        return <a
          href={icon.url}
          key={index}
          className={activeSection === linkName[1] ? 'bottomNavLinks bg-green-400' : 'bottomNavLinks'}
        >
          {icon.icon}
        </a>
      })}
      <ThemeToggle/>
    </div>
  </nav>
  )
}

export default BottomNav