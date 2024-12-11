import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import ExperienceCard from '../../reusable/ExperienceCard';

import experienceData from '../../../data/experienceData.json';

const Experiences = () => {
  return (
    <div className='bg-purple-500/20 '>
      <Fade duration={500} delay={200}>
        <div
          className='flex flex-col mx-2 sm:mx-auto p-2 sm:p-4 gap-4 
          sm:w-[645px] md:w-[780px] lg:w-[994px] font-Roboto
          bg-purple-900/60 hover:bg-purple-200 rounded-lg group/g1
          shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'
        >
          {/* title */}
          <div className='flex text-purple-400 group-hover/g1:text-purple-900 font-bold text-2xl sm:text-4xl text-center justify-center underline underline-offset-4'>My Experiences</div>

          <div className='flex flex-col gap-4'>
            {experienceData.data.map((exp, num) => (
              <Fade key={num} duration={1200} delay={300} ><Zoom>
                <ExperienceCard data={exp} />
              </Zoom></Fade>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Experiences