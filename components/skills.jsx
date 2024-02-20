'use client'

import React from "react";
import { BsStack, BsLaptopFill } from "react-icons/bs";
import html from "@/public/html.png";
import css from "@/public/css.png";
import js from "@/public/js.jpg";
import react from "@/public/react.png";
import next from "@/public/nextjs3.webp";
import tailwind from "@/public/tailwindcss.webp";
import firebase from "@/public/firebase.png";
import express from "@/public/express.png";
import figma from "@/public/figma.svg";
import mongo from "@/public/mongo.png";
import node from "@/public/node.png";
import Image from "next/image";

const Skills = () => {

  const skillsIcon = [
    {skill: html},
    {skill: css},
    {skill: js},
    {skill: react},
    {skill: next},
    {skill: firebase},
    {skill: tailwind},
    {skill: express},
    {skill: figma},
    {skill: node},
    {skill: mongo},

  ]
  return (
    <section      
    id="skills" className="flex items-center justify-center  flex-col gap-y-3">
      <h2 className="w-max flex gap-2 items-center mx-auto text-3xl font-bold mb-4">
        Skills <BsStack className="text-green-400 rotate-[-30deg]" />
      </h2>
      <div className="sm:w-[85%] flex flex-wrap justify-center items-center px-4 w-full lg:w-3/4 gap-x-4 sm:gap-x-9 gap-y-8 ">
      {
  skillsIcon.map((icon, index)=>(
    <Image src={icon.skill} alt="skill image" key={index} className="max-w-[40%] shadow-md sm:max-w-[150px]"/>
  )) 
}
      </div>
    </section>
  );
};

export default Skills;
