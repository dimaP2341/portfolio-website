"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-30 scroll-mt-28 w-[min(100%, 37rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Feel free to reach out to me at{" "}
        <a className='underline' href='mailto:Plotkin2016@gmail.com'>
          Plotkin2016@gmail.com
        </a>{" "}
        or via this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          const form = e.currentTarget;
          const formData = new FormData(form);

          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          if (emailRef.current) {
            emailRef.current.value = "";
          }
          if (messageRef.current) {
            messageRef.current.value = "";
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          ref={emailRef}
          type='email'
          name='email'
          required
          maxLength={100}
          placeholder='Your email'
          className='h-14 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        />
        <textarea
          ref={messageRef}
          name='message'
          required
          maxLength={500}
          placeholder='Your message'
          className='h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
