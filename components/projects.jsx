"use client";
import React from "react";
import { BsLaptop, BsLink } from "react-icons/bs";
import prime from "@/public/prime.png";
import dine from "@/public/dine.png";
import krataa from "@/public/krataa.png";
import andamo from "@/public/andamo.png";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules

const Projects = () => {
  const projects = [
    {
      image: prime,
      github: "https://github.com/H-erbie",
      demo: "https://prime-class-clothing.vercel.app",
    },
    {
      image: dine,
      github: "https://github.com/H-erbie/busyDine",
      demo: "https://h-erbie.github.io/busyDine/index.html",
    },
    {
      image: krataa,
      github: "https://github.com/H-erbie/krataa",
      demo: "https://krataa.netlify.app",
    },
    {
      image: andamo,
      github: "https://github.com/H-erbie",
      demo: "https://bby-grl-2-0-h-erbie.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="flex items-center justify-center  flex-col gap-y-3"
    >
      <h2 className="w-max flex items-center mx-auto text-3xl gap-2 font-bold mb-4">
        Projects <BsLaptop className="text-green-400 rotate-[-30deg]" />
      </h2>
      <div className="sm:w-[50%] flex flex-wrap justify-center items-center px-4 w-full lg:w-3/4 gap-x-4 sm:gap-x-9 gap-y-16 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg max-w-[40%] sm:max-w-[300px] min-w-[200px] shadow-lg hover:-translate-y-3 transition-all"
          >
            <Image
              src={project.image}
              alt="skill image"
              className=" w-full hover:backdrop-blur-xl rounded-t-2xl"
            />
            <div className="flex justify-between py-2 px-3 rounded-b-2xl bg-green-500">
              <Link href={project.github} className="flex gap-2 items-center">
                Github <BsLink />
              </Link>
              <Link
                target="_blank"
                className="flex gap-2 items-center"
                href={project.demo}
              >
                Demo
                <BsLink />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
