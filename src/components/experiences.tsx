'use client';

import { useSectionInView } from '@/lib/useInView';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

const Experiences = () => {
  const { ref } = useSectionInView('#projects', 0.1);

  return (
    <motion.section
      className="w-fit mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28"
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
        <div className="w-[50%] m-auto flex justify-between gap-x-10 pt-4">
          <div className="w-4/5">
            <h3 className="text-xl font-semibold">Cloud Computing Cohort</h3>
            <p className="">
              Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
            </p>
            <p className="text-justify text-gray-500">
              Bangkit Academy is a place to upgrade skills in tech and enhance
              soft skills. There are three learning paths at Bangkit, but I
              chose Cloud Computing. This program offers online courses and
              classes about cloud computing, as well as online classes to
              enhance soft skills and English speaking skills. After following
              this program for about 5 months, I graduated from Bangkit Academy
              with the precious title of Cloud Computing Distinction Graduate.
              This achievement places me in the top 10% of the cohort,
              recognizing my dedication and excellence in the field. In this
              program, I learned a lot about how to manage a team, be a leader
              of a project team, and also gained technical skills such as
              frontend development, backend development, and cloud computing. At
              the end of this program, my team and I created an app called
              FurniScan. We took one and a half months to complete this app. In
              this project, I developed the backend and managed the cloud
              environment.
            </p>
          </div>
          <div className="w-1/5">Feb 2024 - Jul 2024</div>
        </div>
      </Fade>
    </motion.section>
  );
};

export default Experiences;
