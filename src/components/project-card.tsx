'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectInfo } from '@/lib/types';
import Link from 'next/link';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  working_duration,
  projectUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  console.log(title);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-fit hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-justify">
            {description}
          </p>
          <ul className="flex flex-wrap pt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="pt-4 pb-4">{working_duration}</div>

          {working_duration.toLowerCase() !== 'coming soon' && (
            <Link href={projectUrl} target="_blank">
              <button className="w-fit bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition">
                Visit <FaArrowUpRightFromSquare size={15} />
              </button>
            </Link>
          )}
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={400}
          height={100}
          objectFit="cover"
          className="absolute hidden sm:block top-2 -right-28 rounded-t-lg 
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-28"
        />
      </section>
    </motion.div>
  );
}
