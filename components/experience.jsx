import React from "react";
import { MdWork } from "react-icons/md";
import { FaGlasses } from "react-icons/fa";

const Experience = () => {
  const exper_iences = [
    {
      company: "millennium tech hub",
      location: "remote",
      role: "web developer",
      from: "september 2023",
      to: "december 2023",
      tasks: [
        `Developed 4 user-facing web applications, including a cleaning service website with 15% user growth within 3 months, an e-commerce baby product site with 200 active users daily, and a real estate property listing platform`,
        `Designed the UI for 3 websites, resulting in a 10% increase in conversion rates for the e-commerce platform.`,
        "Utilized ReactJS, NodeJS, and MongoDB for full-stack development.",
      ],
    },
    {
      company: "bismuth inc.",
      location: "remote",
      role: "frontend developer",
      from: "june 2023",
      to: "september 2023",
      tasks: [
        `Developed the product detail pages and shopping cart functionality for an e-commerce website, allowing users to directly connect with the client via WhatsApp.`,
        `Researched and shortlisted 5 potential UI tools, with my recommendation ultimately chosen for its improved user experience.`,
      ],
    },
  ];
  return (
    <section
      id="experience"
      className="flex items-center justify-center  flex-col gap-y-3"
    >
      <h2 className="w-max flex items-center mx-auto text-3xl  font-bold mb-4">
        Experience <MdWork className="text-green-400" />
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
              <p className="w-max">{experience.from}</p>
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
