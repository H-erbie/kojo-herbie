import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import darkLogo from "@/public/lightsOn.png";
import lightLogo from "@/public/logoLight.png";
const Footer = () => {
  const socials = [
    {
      name: "x",
      icon: <FaTwitter />,
      url: "https://www.twitter.com/ansongherbie",
    },
    {
      name: "instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/her_bie__",
    },
    {
      name: "facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/profile.php?id=100058721127259",
    },
    {
      name: "github",
      icon: <FaGithub />,
      url: "https://github.com/H-erbie?tab=repositories",
    },
    {
      name: "linkedin",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/herbert-koranteng-1661231b2/",
    },
    {
      name: "whatsapp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/233553187203",
    },
  ];

  const navIcons = [
    { name: "home", url: "#home" },
    { name: "about me", url: "#about" },
    { name: "experience", url: "#experience" },
    { name: "skills", url: "#skills" },
    { name: "projects", url: "#projects" },
    { name: "contact", url: "#contact" },
  ];
  return (
    <div className="bg-gray-200 pb-24 dark:bg-[#3f434a] gap-10 h-max pt-8 flex flex-col justify-evenly p-4">
      <div className="flex flex-col lg:flex-row w-3/4  mx-auto  items-center gap-3">
        <Link
          href="#"
          className="hover:opacity-50 lg:mx-0 my-2 lg:my-0 w-40 mx-auto bg-[#181B1F] dark:bg-transparent relative"
        >
          <Image
            src={lightLogo}
            alt="profile"
            width={200}
            height={200}
            className="w-full"
          />
        </Link>
        <div className="flex flex-col gap-y-3 sm:gap-y-0 w-full justify-evenly sm:items-center sm:gap-x-3 sm:flex-row ">
          <div className="flex flex-col border-gray-300 dark:border-gray-400 border-t sm:border-none pt-3">
            {navIcons.map((link, index) => (
              <Link
                href={link.url}
                key={index}
                className="text-lg capitalize hover:text-white text-green-400 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col border-gray-300 dark:border-gray-400 sm:border-none border-t pt-3 gap-3">
            {socials.map((social, index) => (
              <Link
                href={social.url}
                key={index}
                className="text-2xl hover:text-green-400 transition-all flex gap-x-3 items-center"
              >
                <span className="text-lg capitalize">{social.name}</span>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-gray-300 dark:border-gray-400 w-full border-t py-2">
        {" "}
        <p className=" mx-auto w-full sm:w-max text-start ">
          2024 &copy; Copyright Kojo Herbie. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
