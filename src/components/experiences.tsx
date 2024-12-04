'use client';

import { useSectionInView } from '@/lib/useInView';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { experiencesData } from '@/lib/data';

const Experiences = () => {
  const { ref } = useSectionInView('#projects', 0.1);

  return (
    <motion.section
      className="w-fit mt-24 leading-8 mb-28 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
      id="experiences"
    >
      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        <SectionHeading>Experiences</SectionHeading>
      </Fade>

      <Fade
        direction="up"
        delay={400}
        cascade
        damping={1e-1}
        triggerOnce={true}
      >
        {experiencesData.map((experience, index) => (
          <div
            className="w-[50%] m-auto flex justify-between gap-x-10 pt-4"
            key={index}
          >
            <div className="w-4/5">
              <h3 className="text-xl font-semibold">{experience.position}</h3>
              <p className="">{experience.company} </p>
              <p className="text-justify text-gray-500">
                {experience.description}
              </p>
            </div>
            <div className="w-1/5">{experience.duration}</div>
          </div>
        ))}
      </Fade>
    </motion.section>
  );
};

export default Experiences;
