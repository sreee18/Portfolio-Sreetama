import React from 'react';
import { Fade } from "react-awesome-reveal";

// reusable components
import EducationCard from '../../reusable/EducationCard';

// importing data from local storage
import educationData from "../../../data/educationData.json";

const Education = () => {
  return (
    <div className='bg-orange-500/20 '>

      {/* All the contents */}
      <Fade duration={500} delay={200}>
        <div
          className='mx-2 sm:mx-auto p-2 sm:p-4 font-Roboto
          sm:w-[655px] md:w-[790px] lg:w-[1004px]
          bg-orange-100/70 hover:bg-orange-200 rounded-lg group/edu1
          shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'
        >

          {/* Section Title */}
          <div className='text-orange-800 group-hover/edu1:text-orange-900 font-bold text-2xl sm:text-4xl text-center underline underline-offset-4'>My Education</div>

          {/* Section Body */}
          <div className='flex flex-col text-center gap-2 sm:gap-4 mt-4'>
            {educationData.data.map((e, num) => (
              <Fade key={num} delay={100}><EducationCard props={e} /></Fade>
            ))}
          </div>

        </div>
      </Fade>
    </div>
  )
}

export default Education