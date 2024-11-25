import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

interface Experience {
  title: string
  location: string
  description: string
  icon: React.ReactNode
  date: string
}

export const experiencesData: Experience[] = [
  {
    title: 'Kharkiv National University of Radio Electronics',
    location: 'Kharkiv, Ukraine',
    description:
      'Kharkiv National University of Radio Electronics, NURE, is one of the most distinctly profiled universities in Ukraine, where applied IT and innovation for sustainable are in focus.  NURE has the vision to conduct education and research in which engineering and IT can be integrated with other disciplines. Everything we do at NURE has three distinct perspectives: innovation, sustainability and in real life, which means collaboration and exchange with both the business and industry as well as society.',
    icon: React.createElement(LuGraduationCap),
    date: '2023-2027',
  },
  {
    title: 'WebUI Project-Based Learning',
    location: 'remote',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2024',
  },
]

export const projectsData = [
  {
    title: 'CorpComment',
    description: 'A personal project where I built a platform for users to give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'A pet project designed as a job board for remote developer jobs, with filtering, sorting, and pagination features. Focused on front-end development.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A personal web app for quick text analytics, including word and character counts and social media post limits. Built to explore web development concepts.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
]

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'GitHub',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Express',
  'PostgreSQL',
  'Framer Motion',
]

export const links = [
  { name: 'Home', hash: '#home' },
  { name: 'About', hash: '#about' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Skills', hash: '#skills' },
  { name: 'Experience', hash: '#experience' },
  { name: 'Contact', hash: '#contact' },
] as const
