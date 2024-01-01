"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".link");

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop - section.clientHeight / 3;
        // console.log(sectionBottom, section.offsetHeight);
        if (currentScrollPosition >= sectionBottom) {
          navLinks.forEach((link) => {
            link.classList.remove("text-green-400");
            link.classList.remove("text-[#3f434a]");
            link.classList.remove("dark:text-white");
            link.classList.remove("bg-[#3f434a]");
            link.classList.remove("dark:bg-[#181B1F]");

            if (link.getAttribute("href") === `#${section.id}`) {
              link.classList.add("text-green-400");
              link.classList.add("bg-[#3f434a]");
              link.classList.add("dark:bg-[#181B1F]");

              // console.log(link);
            } else {
              link.classList.add("text-[#3f434a]");
              link.classList.add("dark:text-white");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check on page load
    handleScroll();
  }, []);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
export const GlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
