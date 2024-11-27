"use client";
import React from "react";
import { BsLaptop, BsLink } from "react-icons/bs";
import prime from "@/public/prime.png";
import dine from "@/public/dine.png";
import krataa from "@/public/krat.png";
import andamo from "@/public/andamo.png";
import hexleap from "@/public/hexleap.png";
import cesa from "@/public/cesa.png";
import wog from "@/public/wog.png";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules

const Projects = () => {
  const fullstackProjects = [
    {
      image: andamo,
      github: "https://github.com/H-erbie",
      demo: "https://bby-grl-2-0-h-erbie.vercel.app/",
    },{
      image: prime,
      github: "https://github.com/H-erbie",
      demo: "https://prime-class-clothing.vercel.app",
      
    },
    
    {
      image: dine,
      github: "https://github.com/H-erbie/dine",
      demo: "https://h-erbie.github.io/busyDine/index.html",
    },
    {
      image: cesa,
      github: "https://github.com/H-erbie",
      demo: "https://cesa-uenr.vercel.app",
    },
    
  ];

  const frontendProjects = [

    {
      image: hexleap,
      github: "https://github.com/H-erbie/hexleap",
      demo: "https://hexleap-zeta.vercel.app/",
    },
    {
      image: krataa,
      github: "https://github.com/H-erbie/coal",
      demo: "https://coal-ten.vercel.app/",
    },{
      image: wog,
      github: "https://github.com/H-erbie/wog",
      demo: "https://wog-one.vercel.app/",
    },
  ]

  return (
    <section
      id="projects"
      className="flex items-center justify-center  flex-col gap-y-3"
    >
      <h2 className="w-max flex items-center mx-auto text-3xl gap-2 font-bold mb-4">
        Projects <BsLaptop className="text-green-400 rotate-[-30deg]" />
      </h2>
      <Tabs defaultValue='fullstack' className='w-full'>
        <TabsList className='w-full'>
          <TabsTrigger value='fullstack'>Fullstack Projects</TabsTrigger>
          <TabsTrigger value='frontend'>Frontend Projects</TabsTrigger>
        </TabsList>
        <TabsContent value='fullstack' className='mt-24'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center place-items-center px-4 w-full  gap-x-9 gap-y-16 ">
        {fullstackProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg  w-full h-32 shadow-lg hover:-translate-y-3 transition-all"
          >
            <Image
              src={project.image}
              alt="skill image"
          
              className=" w-full bg-gray-200 h-full object-cover hover:backdrop-blur-xl rounded-t-2xl"
            />
            <div className="flex justify-between py-2 px-3 rounded-b-2xl bg-green-500">
              <Link href={project.github} className="flex gap-2 items-center">
                Github <BsLink className=""/>
              </Link>
              <Link
                target="_blank"
                className="flex gap-2 items-center"
                href={project.demo}
              >
                Demo
                <BsLink className=""/>
              </Link>
            </div>
          </div>
        ))}
      </div>
        </TabsContent>
        <TabsContent value='frontend' className='mt-24'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center place-items-center px-4 w-full  gap-x-9 gap-y-16 ">
        {frontendProjects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg  w-full h-32 shadow-lg hover:-translate-y-3 transition-all"
          >
            <Image
              src={project.image}
              alt="skill image"
          
              className=" w-full bg-gray-200 h-full object-cover hover:backdrop-blur-xl rounded-t-2xl"
            />
            <div className="flex justify-between py-2 px-3 rounded-b-2xl bg-green-500">
              <Link href={project.github} className="flex gap-2 items-center">
                Github <BsLink className=""/>
              </Link>
              <Link
                target="_blank"
                className="flex gap-2 items-center"
                href={project.demo}
              >
                Demo
                <BsLink className=""/>
              </Link>
            </div>
          </div>
        ))}
      </div>

        </TabsContent>
      </Tabs>
      
    </section>
  );
};

export default Projects;
