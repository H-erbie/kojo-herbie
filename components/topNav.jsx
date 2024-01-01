'use client'
import React from 'react'
import { ThemeToggle } from './themeToggle'
import Image from 'next/image'
import darkLogo from '@/public/logoDark.png'
import lightLogo from '@/public/logoLight.png'
import { RiHome2Fill, RiUserFill } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { BsStack, BsLaptopFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
const TopNav = () => {

  

  const navIcons = [
    {icon: <RiHome2Fill/>, url: '#home'},
    {icon: <RiUserFill/>, url: '#about'},
    {icon: <MdWork/>, url: '#experience'},
    {icon: <BsStack/>, url: '#skills'},
    {icon: <BsLaptopFill/>, url: '#projects'},
    {icon: <IoMdMail/>, url: '#contact'},
  ]
  return (
    <nav className="w-screen overflow-hidden  z-50  flex  justify-center  items-center fixed bottom-0 left-0 sm:px-3 sm:py-4">
<div className='justify-evenly sm:justify-between  w-full sm:w-max sm:gap-x-4  sm:rounded-[2rem] py-3 px-3 flex items-center backdrop-brightness-[0.7] backdrop-blur-lg'>
  

{/* <div className="flex gap-y-6 items-center"> */}
{
  navIcons.map((icon, index) => (
    <a href={icon.url} key={index} className='link px-3 py-3 rounded-[100%] text-2xl sm:text-3xl transition-all  dark:hover:bg-[#181B1F] hover:bg-white bg-background'>{icon.icon}</a>
  ))
}</div>
{/* </div> */}

    </nav>
  )
}

export default TopNav