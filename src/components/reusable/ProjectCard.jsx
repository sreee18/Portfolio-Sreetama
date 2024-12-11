import React, { useState } from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const ProjectCard = ({ projects }) => {
  const defaultProjectPanelIndex = -1;
  const [projectPanelOpen, setProjectPanelOpen] = useState(defaultProjectPanelIndex);

  const [projectImages, setProjectImages] = useState(['']);

  const LoadImages = (currentProject) => {
    setProjectImages(currentProject.images);
  };
  // GetImages(project)

  // clicking button opens the project panel and loads all images 
  const OpenProjectPanel = async (currentProject) => {
    await LoadImages(currentProject); // Sets the loadeded images
    await setImageIndex(0); // Resets the index
    await setProjectPanelOpen(currentProject.id);
  }

  // clicking button sets the project panel to default
  const SetDefaultProjectPanel = () => {
    LoadImages([]);
    setProjectPanelOpen(defaultProjectPanelIndex);
  }

  // changing the index of the loaded images to get all the different project images
  const [imageIndex, setImageIndex] = useState(0);
  const handleChangeImage = (direction) => {
    if (direction === 'left') {
      if (imageIndex === 0) {
        setImageIndex(projectImages.length - 1);
      }
      else {
        setImageIndex(imageIndex - 1);
      }
    }
    else if (direction === "right") {
      if (imageIndex === projectImages.length - 1) {
        setImageIndex(0);
      }
      else {
        setImageIndex(imageIndex + 1);
      }
    }
    // console.log(`Change image button clicked: ${direction}`);
  };

  const getLeftIndex = () => (imageIndex - 1 + projectImages.length) % projectImages.length;
  const getRightIndex = () => (imageIndex + 1) % projectImages.length;

  return (
    <div className='group/g2 flex flex-col gap-2 sm:gap-4'>

      {projects.map((project, num) => (
        <Zoom key={num} delay={200} duration={800}><Fade duration={1000}>
          <div className="relative rounded-2xl border-2 border-orange-500 hover:border-orange-950 bg-orange-400/50 group/g3 group-hover/g2:bg-orange-400/70 transition-all duration-300 shadow-[0_0_10px_orange] shadow-orange-200 hover:shadow-[0_0_30px_purple] hover:shadow-orange-600">

            {/* Project Details */}
            <div
              className='flex flex-col min-h-[120px] rounded-2xl transition-all duration-300 group-hover/g3:bg-orange-300 text-lg'>

              {/* Project Title and Description and Link Button*/}
              {projectPanelOpen === project.id ? (
                <div className='flex flex-col sm:flex-row m-2 xsm:m-4 transition-all duration-300'>

                  {/* Link Button */}
                  {/* Link and Code buttons */}
                  <div className='flex flex-row sm:flex-col gap-4'>
                    {/* Link Button */}
                    <Slide direction='left' delay={1000}><Fade delay={1000}>
                      <button
                        onClick={() => { window.open(`${project.link}`, '_blank') }}
                        className='flex gap-2 items-center justify-center mx-auto bg-orange-200 group-hover/g3:border-orange-950
                  rounded-2xl border-2 border-orange-900 text-orange-950 group-hover/g3:bg-orange-800 hover:shadow-[0_0_15px_black]
                  transition-all duration-300 w-[122px] h-12 group/g4 group-hover/g3:text-orange-50 shadow-[0_0_5px_black]'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                          className="w-6 h-6 animate-pulse group-hover/g4:animate-none">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                        <p className='text-lg animate-wiggle group-hover/g4:animate-none'>CODE</p>
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                            className="w-6 h-6 animate-pulse group-hover/g4:animate-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                          </svg>
                        </div>
                      </button>

                    </Fade></Slide>

                    {/* Website Button */}
                    <Slide direction='left' delay={1000}><Fade delay={1000}>
                      <button
                        onClick={() => { window.open(`${project.website}`, '_blank') }}
                        className='flex gap-2 items-center justify-center mx-auto bg-orange-200 group-hover/g3:border-orange-950
                  rounded-2xl border-2 border-orange-900 text-orange-950 group-hover/g3:bg-orange-800 hover:shadow-[0_0_15px_black]
                  transition-all duration-300 w-[122px] h-12 group/g4 group-hover/g3:text-orange-50 shadow-[0_0_5px_black]'
                      >
                        <div>
                          <svg className="w-6 h-6 animate-pulse group-hover/g4:animate-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 7H16C18.7614 7 21 9.23858 21 12C21 14.7614 18.7614 17 16 17H14M10 7H8C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H10M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </div>
                        <p className='text-lg animate-wiggle group-hover/g4:animate-none'>LINK</p>
                        <div>
                          <svg className='w-6 h-6 animate-pulse group-hover/g4:animate-none' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="96" cy="96" r="74" stroke="currentColor" strokeWidth="12"></circle><ellipse cx="96" cy="96" stroke="currentColor" strokeWidth="12" rx="30" ry="74"></ellipse><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M28 72h136M28 120h136"></path></g></svg>
                        </div>
                      </button>

                    </Fade></Slide>
                  </div>

                  <button
                    onClick={() => (SetDefaultProjectPanel())}
                    className='p-0 xsm:p-2 h-full mx-auto'
                  >
                    <div className='text-xl xsm:text-2xl font-bold text-orange-800 group-hover/g3:text-orange-900 transition-colors duration-300'>
                      {project.title}
                    </div>
                    <div className='text-sm xsm:text-lg text-orange-800 group-hover/g3:text-orange-950'>
                      {project.description_short}
                    </div>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => (OpenProjectPanel(project))}
                  className='ml-auto w-2/3 h-[120px] p-2 overflow-hidden transition-all duration-300'
                >
                  <div className='text-xl xsm:text-2xl font-bold text-orange-800 group-hover/g3:text-orange-900 transition-colors duration-300'>
                    {project.title}
                  </div>
                  <div className='text-sm xsm:text-lg text-orange-800 group-hover/g3:text-orange-900'>
                    {project.description_short}
                  </div>
                </button>
              )}

              {/* image*/}
              {projectPanelOpen === project.id ? (
                <div className='relative overflow-hidden w-full sm:h-[300px] rounded-xl transition-all duration-300 mb-2'>
                  {/* Project Image Viewer */}
                  <div
                    className=" mx-2 xsm:mx-4 relative flex items-center justify-center border-2 transition-colors duration-300 border-orange-200 group-hover/g3:border-orange-900 bg-orange-200 h-full rounded-xl">
                    {/* Left Image */}
                    <div className=" rounded-xl absolute left-0 top-0 bottom-0 w-[15%] max-w-[65px] overflow-hidden">
                      <div className="bg-white h-full transform">
                        <img
                          src={projectImages[getLeftIndex()]}
                          alt={`Left`}
                          className="object-cover h-full w-full transform"
                        />
                      </div>
                    </div>
                    {/* Center Image */}
                    <img src={projectImages[imageIndex]}
                      alt={`Center`}
                      className=" h-full max-h-[150px] sm:max-h-[300px] max-w-full rounded-xl"
                    />
                    {/* Right Image */}
                    <div className="rounded-xl absolute right-0 top-0 bottom-0 w-[15%] max-w-[65px] overflow-hidden">
                      <div className="bg-white h-full transform">
                        <img
                          src={projectImages[getRightIndex()]}
                          alt={`Right`}
                          className="object-cover h-full w-full transform"
                        />
                      </div>
                    </div>

                    {/* Left button with SVG icon */}
                    <button
                      onClick={() => handleChangeImage('left')}
                      className="absolute left-0 top-0 bottom-0 w-[15%] max-w-[65px] min-w-12 bg-white bg-opacity-40 hover:bg-opacity-70 transition duration-300 flex items-center justify-center rounded-xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 animate-left-to-right"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                      </svg>
                    </button>

                    {/* Right button with SVG icon */}
                    <button
                      onClick={() => handleChangeImage('right')}
                      className="absolute right-0 top-0 bottom-0 w-[15%] max-w-[65px] bg-white bg-opacity-40 hover:bg-opacity-70 transition duration-300 flex items-center justify-center rounded-xl"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-10 h-10 animate-right-to-left"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => (OpenProjectPanel(project))}
                  className='absolute left-0 top-0 bottom-0 overflow-hidden transition-all duration-300 m-1 xsm:m-2 w-1/3 border-2 rounded-2xl border-orange-400 group-hover/g3:border-orange-800 bg-orange-200'>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className='mx-auto h-full rounded-lg'
                  />
                </button>
              )}

            </div>

            {/* Project click Button */}
            <button
              onClick={() => {
                projectPanelOpen === project.id ? SetDefaultProjectPanel() : OpenProjectPanel(project)
              }}
              className='absolute top-4 right-0 animate-pulse group-hover/g3:animate-none transition-all duration-300'
            >
              {projectPanelOpen !== project.id ? (
                <div className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.4" stroke="currentColor"
                    className="w-10 h-10 group-hover/g3:animate-bounce-down-to-up group-hover/g3:stroke-orange-950 transition-colors duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                  </svg>
                </div>
              ) : (
                <div className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.4" stroke="currentColor"
                    className="w-10 h-10 group-hover/g3:animate-bounce-up-to-down group-hover/g3:stroke-orange-950 transition-colors duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
              )}
            </button>

          </div>
        </Fade></Zoom>
      ))}
    </div>
  )
}

export default ProjectCard;