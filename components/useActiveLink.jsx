'use client'
import React, { useState, useEffect, useRef } from 'react';

const useActiveLink = (sectionsRef) => {
  const uniqueSectionsRef = new Set(sectionsRef.current);
  const newSectionsRef = Array.from(uniqueSectionsRef)
    console.log(newSectionsRef)

  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const options = { threshold: 0.5 }; // 50% visibility needed for active state
    const observer = new IntersectionObserver((entries) => {
      const newActiveLink = entries.find((entry) => entry.isIntersecting);
      setActiveLink(newActiveLink?.target); // Update active link only if intersecting
    }, options);

    newSectionsRef.forEach((section) => observer.observe(section)); // Observe all sections

    return () => observer.disconnect(); // Clean up on unmount
  }, [newSectionsRef]);

  return activeLink;
};

export default useActiveLink