'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { useSectionInView } from '@/lib/useInView';
import { useActiveSectionContext } from '@/containers/active-section';
import { DownloadCloud } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export default function Intro() {
  const { ref } = useSectionInView('#home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/profile-pic.png"
              width="360"
              height="360"
              alt="portrait"
              quality="100"
              priority={true}
              className="rounded-full object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-6xl absolute bottom-8 right-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <h1 className="mb-4 mt-4 px-4 text-3xl md:text-6xl">Muhammad Fauzan</h1>
        <p className="md:text-lg mb-6">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              3000,
              'BackEnd Developer',
              3000,
              'FrontEnd Developer',
              3000,
              'Fullstack Developer',
              3000,
              'Cloud Engineer',
              3000,
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            repeat={Infinity}
          />
        </p>
      </Fade>

      <motion.div
        className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="/Muhammad Fauzan CV English Version Update.pdf"
          download
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
        >
          Resume <DownloadCloud color={'#9ca3af'} />
        </a>

        <Link href="https://www.linkedin.com/in/muhammadfauzanis/">
          <FaLinkedin
            size={30}
            className="text-gray-950 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300"
          />
        </Link>

        <Link href="https://github.com/muhammadfauzanis">
          <FaGithub
            size={30}
            className="text-gray-950 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-300 transition-all duration-300"
          />
        </Link>
      </motion.div>
    </section>
  );
}
