import React from "react";
import { getBlurData } from "@/utils/blur-data-generator";
import Image from "next/image";
import blurDark from "@/public/mee.jpg";
// import resume from "@/public/resume.pdf";

const Header = () => {
  return (
    <section id="home" className="flex lg:flex-row flex-col-reverse gap-y-12 justify-center lg:justify-between items-center">
      <div className="relative lg:w-[55%] w-full flex justify-center items-center gap-y-5 flex-col">
        <p className="text-lg">Hi! I'm </p>
        <p className="text-3xl sm:text-4xl w-[80%] md:text-5xl lg:text-6xl sm:w-full lg:w-[70%] font-bold text-center z-20">Herbert Ansong Koranteng</p>
        <p className="text-lg">Full Stack Developer</p>
        <a
          href="/resume.pdf"
          download
          className="mx-auto z-20 w-max rotate-[15deg] hover:rotate-0 transition-all p-3 rounded-md bg-green-600 border-none"
        >
          My Resume
        </a>
        <div className="absolute inset-x-0 m-auto h-52  max-w-lg bg-gradient-to-tr dark:from-green-400 from-green-600 dark:via-teal-900 via-teal-300 dark:to-slate-200 to-slate-500 blur-[118px]"></div>
      </div>
      <div className=" rounded-3xl mx-auto bg-green-200 min-w-[250px] w-[25%] ">
        {" "}
        <Image
          src={blurDark}
          className="mx-auto rounded-3xl hover:rotate-0 transition-all h-full w-full rotate-[15deg]"
        />
      </div>{" "}
    </section>
  );
};
export default Header;
