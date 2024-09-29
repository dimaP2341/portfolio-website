"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import useSectionInView from "@/hooks/useSectionInView";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id='projects'
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    >
      <SectionHeading>My projects</SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
