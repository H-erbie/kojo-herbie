'use client'

import React from "react";
import { MdWork } from "react-icons/md";
import { FaGlasses } from "react-icons/fa";

const Experience = () => {

  const exper_iences = [
    
    {
      company: "Freelance & Volunteer",
      location: "remote",
      role: "Full Stack developer",
      from: "august 2023",
      to: "present",
      tasks: [
`Developed and maintained 5+ full-stack applications, increasing user engagement by 20% for Client A.`,
`Migrated a legacy codebase to Next.js, improving performance by 30% and reducing maintenance costs.`,
`Collaborated with cross-functional teams to deliver high-quality solutions`      ],
    },
    
    {
      company: "monza careers",
      location: "remote",
      role: "Full Stack developer",
      from: "june 2024",
      to: "october 2024",
      tasks: [
`Enhanced website builder user productivity by 60% through optimized performance and intuitive UI`,
`Implemented interactive elements to improve user engagement.`,
`Leveraged React.js, Tailwind CSS, Next.js, TypeScript, Node.js, Express.js, MongoDB, and Figma to build scalable and performant web applications`        
      ],
    },
    {
      company: "millennium tech hub",
      location: "remote",
      role: "Full stack developer",
      from: "september 2023",
      to: "december 2023",
      tasks: [
        `Developed and launched 3 full-stack web applications, including a cleaning service website, e-commerce baby product site, and real estate property listing platform.`,
        `Designed user-friendly UI for all 3 platforms, increasing conversion rates by 10% for the e-commerce site.`,
        `Utilized HTML, CSS, JavaScript, Sass, React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Figma to build robust and scalable applications.`,
        
      ],
    },
    {
      company: "bismuth inc.",
      location: "remote",
      role: "frontend developer",
      from: "june 2023",
      to: "september 2023",
      tasks: [
        `Developed product detail pages and shopping cart functionality for an e-commerce website, facilitating direct user-to-client communication via WhatsApp.`,
        `Employed React.js, Next.js, Node.js, Express.js, and Firebase to build a seamless user experience.`
      ],
    },
  ];
  return (
    <section
      id="experience"
      className="flex items-center justify-center  flex-col gap-y-3"
    >
      <h2 className="w-max flex gap-2 items-center mx-auto text-3xl  font-bold mb-4">
        Experience <MdWork className="text-green-400 rotate-[-30deg]" />
      </h2>
      <div className="sm:w-[85%] px-4 w-full lg:w-3/4 flex gap-5 flex-col">
        {exper_iences.map((experience, index) => (
          <div className="" key={index}>
            <div className="flex capitalize flex-col sm:flex-row sm:items-center gap-x-4">
              <h2 className="text-xl  font-bold">{experience.company}</h2>
              <p className="w-max">{experience.location}</p>
              <div className="flex items-center gap-x-2"><p className="w-max italic">{experience.role}</p>
              <FaGlasses className="text-green-400 text-xl" /></div>
            </div>
            <div className="flex capitalize gap-x-4 my-2 text-gray-400">
              <p className="w-max">{experience.from}</p> -
              <p className="w-max">{experience.to}</p>
            </div>
            <ul className="flex flex-col gap-y-4">
              {experience.tasks.map((task, index) => (
                <li className="list-disc ml-8" key={index}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
