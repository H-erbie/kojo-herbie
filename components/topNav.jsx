"use client";
import React from "react";
import darkLogo from "@/public/logoLight.png";
import lightLogo from "@/public/lightsOn.png";
import Image from "next/image";
import Link from "next/link";

const TopNav = () => {
  return (
    <div className=" py-3 px-2 absolute top-0 left-0 sm:right-0 z-[60] flex justify-between  items-center  w-screen">
      <Link href="#" className="hover:opacity-50 bg-white dark:bg-[#181B1F] sm:bg-transparent rounded-[100%]  py-4 px-1 relative">
        <Image
          src={lightLogo}
          alt="profile"
          width={80}
          height={80}
          className=" w-full absolute rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0  "
        />
         <Image
          src={darkLogo}
          alt="profile"
          width={80}
          height={80}
          className=" w-full  rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100 "
        />
      </Link>
    </div>
  );
};

export default TopNav;
