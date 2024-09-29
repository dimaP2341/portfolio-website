"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3 text-justify indent-8 text-xl'>
        Hi, I'm Dmytro,{" "}
        <span className='font-medium'> a frontend developer</span> currently
        studying at the Kharkiv National University of Radio Electronics. I
        specialize in building intuitive and responsive web interfaces using the
        MERN stack (MongoDB, Express, React, Node.js), Next.js, and TypeScript.
        I’m passionate about delivering seamless user experiences and
        continuously improving my skills. I'm ready to work full-time and
        excited to contribute to innovative projects. Let's create something
        awesome together!
      </p>
    </motion.section>
  );
}
