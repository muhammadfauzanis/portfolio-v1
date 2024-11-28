'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { Fade } from 'react-awesome-reveal';
import { useSectionInView } from '@/lib/useInView';

export default function About() {
  const { ref } = useSectionInView('#about');

  return (
    <motion.section
      className="max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="about"
    >
      <div className="container mx-auto">
        <Fade
          direction="up"
          delay={400}
          cascade
          damping={1e-1}
          triggerOnce={true}
        >
          <SectionHeading>About Me</SectionHeading>
        </Fade>

        <div className="flex justify-center flex-col w-[70%] m-auto">
          <Fade
            direction="up"
            delay={600}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="mt-2 leading-relaxed text-justify text-gray-500 dark:text-gray-500">
              An Informatics Engineering student who passionately pursues
              programming, especially in{' '}
              <span className="text-gray-950 dark:text-gray-100 ">
                front-end web development, backend development, and cloud
                computing.
              </span>{' '}
              I graduated from Bangkit Academy 2024 Batch 1 as a{' '}
              <span className="text-gray-950 dark:text-gray-100 ">
                Cloud Computing Distinction Graduate.
              </span>{' '}
              I can use React.js or Next.js to build frontend applications, use
              Express.js to build backend systems, also build cloud
              infrastructure. I am always motivated to keep learning every day
              so that I can improve myself and be useful in any environment.
            </p>
          </Fade>
        </div>
      </div>
    </motion.section>
  );
}
