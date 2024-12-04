'use client';

import React from 'react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/containers/active-section';
import { Link } from '@/lib/types';

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="hidden h-screen lg:flex lg:fixed z-[999] w-fit mt-4 pl-6">
      <motion.div
        className="flex p-1  dark:bg-transparent "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex flex-col items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify relative w-full"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <NextLink
                className={clsx(
                  'flex w-full items-center justify-start gap-x-5  px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-100 group',
                  {
                    'text-gray-950 dark:text-gray-100':
                      activeSection === link.hash,
                    'text-gray-500 dark:text-gray-500':
                      activeSection !== link.hash,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                }}
              >
                <hr
                  className={clsx(
                    'border-[1.5px] group-hover:border-gray-950 dark:border-gray-500 dark:group-hover:border-gray-100 w-10 group-hover:w-20 transition-all duration-500',
                    {
                      ' border-gray-950 dark:border-gray-100 w-20':
                        activeSection === link.hash,
                      ' border-gray-500 dark:border-gray-500':
                        activeSection !== link.hash,
                    }
                  )}
                />

                <p>{link.nameEng}</p>
                {link.hash === activeSection && (
                  <motion.span
                    className=" text-gray-950 dark:text-gray-100"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </NextLink>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}
