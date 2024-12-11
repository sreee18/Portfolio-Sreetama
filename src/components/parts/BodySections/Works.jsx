import React from 'react';
import ProjectCard from '../../reusable/ProjectCard';

import projectData from '../../../data/projectsData.json';
import { Fade } from 'react-awesome-reveal';

const Works = () => {
  return (
    <div className='bg-orange-500/20 '>

      <Fade duration={500} delay={200}>
        <div
          className='mx-2 sm:mx-auto p-2 sm:p-4 font-Roboto
          sm:w-[655px] md:w-[790px] lg:w-[1004px]
          bg-orange-100/70 hover:bg-orange-200 rounded-lg group/work
          shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'
        >
          <div className='flex flex-col mx-auto'>

            {/* Section Title */}
            <div className='text-orange-800 group-hover/work:text-orange-900 font-bold text-2xl sm:text-4xl text-center underline underline-offset-4 mb-4'>My works</div>

            {/* Project cards in grid */}
            <div className="relative flex flex-col w-full mx-auto">
              <ProjectCard projects={projectData.Projects} />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Works