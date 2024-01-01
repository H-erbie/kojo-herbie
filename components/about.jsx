import Image from "next/image";
import React from "react";
import blurDark from "@/public/aboutme.jpg";
import { RiUserFill, RiQuoteText } from "react-icons/ri";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const About = () => {
  return (
    <section
      id="about"
      className="flex justify-center items-center flex-col gap-y-4 sm:gap-y-16"
    >
      <h2 className="w-max flex items-center mx-auto text-3xl font-bold mb-4">
        About me <RiUserFill className="text-green-400" />
      </h2>
      <div className="flex sm:items-center lg:flex-row flex-col">
        <div className="w-[25%] z-10 justify-between rounded-3xl mx-auto bg-green-200 min-w-[250px]">
          {" "}
          <Image
            src={blurDark}
            alt="about image"
            className="mx-auto rounded-3xl hover:rotate-0 transition-all h-full w-full rotate-[15deg]"
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="absolute inset-x-0 m-auto h-52   max-w-lg bg-gradient-to-tr dark:from-green-400 from-green-600 dark:via-teal-900 via-teal-300 dark:to-slate-200 to-slate-500 blur-[118px]"></div>
          <p className=""><span><FaQuoteLeft/></span> A project of thousands of lines of codes begins with a a press on the keyboard <span><FaQuoteRight/></span> </p>
          <p>
           I am a self-taught full-stack developer and a junior majoring in
            computer science in the University of Energy and Natural Resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
