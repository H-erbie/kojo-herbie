'use client'

import Image from "next/image";
import React from "react";
import blurDark from "@/public/aboutme.jpg";
import { RiUserFill,  RiQuoteText } from "react-icons/ri";
import { FaQuoteLeft, FaUser,  FaQuoteRight } from "react-icons/fa";
const About = () => {

  const ethics = [
    '💻',
    '🤖',
    '🎮',
    '🛠'
  ]

  return (
    <section
      id="about"
      className="flex justify-center items-center flex-col gap-y-4 sm:gap-y-16"
    >
      <h2 className="w-max flex items-center gap-2 mx-auto text-3xl font-bold mb-4">
        About me <RiUserFill className="text-green-400 rotate-[-30deg]" />
      </h2>
      <div className="flex items-center lg:flex-row gap-y-14 flex-col">
        <div className="lg:w-[25%] w-[40%] justify-between rounded-3xl mx-auto bg-green-200 min-w-[250px]">
          {" "}
          <Image
            src={blurDark}
            alt="about image"
            className="mx-auto rounded-3xl hover:rotate-0 transition-all h-full w-full rotate-[15deg]"
          />
        </div>
        <div className="sm:w-[60%] w-[80%] lg:w-[50%]">
          <div className="absolute inset-x-0 m-auto h-52   max-w-lg bg-gradient-to-tr dark:from-green-400 from-green-600 dark:via-teal-900 via-teal-300 dark:to-slate-200 to-slate-500 blur-[118px]"></div>
          {/* <p className=""><span><FaQuoteLeft/></span> A project of thousands of lines of codes begins with a a press on the keyboard <span><FaQuoteRight/></span> </p> */}
         <div className="flex mx-auto flex-wrap w-max sm:w-full lg:w-3/4 gap-y-3 gap-x-6">
         {
          ethics.map((ethic, index)=>(
            <div key={index} className="p-3 hover:bg-green-600 cursor-pointer bg-green-400 rounded-[100%] relative"><p className="text-3xl capitalize flex  gap-x-2 font-semibold text-white "><span className="hidden text-black dark:text-white sm:block">{ethic}</span></p></div>
          ))
         }
         </div>
          <p className="lg:w-3/4 mx-auto lg:text-start text-center mt-6 font-medium text-lg">
            I am a self-taught full-stack developer with 2+ years of industry experience.
            I also pursued a degree in Computer Science at the University of Energy and Natural Resources.
            I am passionate about building robust, scalable, and user-friendly applications.
            Beyond Software Engineering, I am also into Mechatronics, Game design/dev, Cyber Security and 2D/3D animation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
