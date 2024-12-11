import React from 'react';
import { Fade, Zoom } from "react-awesome-reveal";

// importing data from local files
import profileData from "../../../data/profileData.json";

const About = () => {
  const revealDelay = 50;
  const revealDuration = 1000;

  const redirectToGmail = (mail) => {
    const subject = "[Redirected from Sreetama's-portfolio]";
    const body = 'Greetings of the day Sreetama,\n';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <div className='bg-orange-500/20 '>

      {/* All the contents */}
      <Fade duration={500} delay={200}>
        <div
          className='mx-2 sm:mx-auto p-2 sm:p-4 font-Roboto
          sm:w-[655px] md:w-[790px] lg:w-[1004px]
          bg-orange-100/70 hover:bg-orange-200 rounded-lg group/about
          shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500'
        >
          {/* Heading */}
          <div className='text-orange-800 group-hover/about:text-orange-900 font-bold text-2xl sm:text-4xl text-center underline underline-offset-4'>About Me</div>

          {/* Content of About Section */}
          <Fade duration={revealDuration} delay={revealDelay}>
            <div className='text-orange-900 group-hover/about:text-orange-950'>

              {/* About Me Text */}
              <div className='mt-4 text-justify text-xs xsm:text-sm sm:text-lg md:text-2xl'>
                <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                  <div className='mb-4'>
                    {profileData.about1}
                    {new Date().toLocaleDateString()}
                    {profileData.about2}
                  </div>
                </Fade></Zoom>
                {profileData.about3.map((text, num) =>
                  <Zoom key={num} duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                    <div className='mb-4'>
                      {text}
                    </div></Fade></Zoom>
                )}
              </div>

              {/* Some Contact details */}
              <div className='mt-12 text-sm sm:text-xl md:text-2xl '>

                {/* Primary Email */}
                <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                  <div className='mb-2 '>
                    <span className='mr-2 font-bold'>Primary Email:</span>
                    <span>
                      <button
                        onClick={() => redirectToGmail(profileData.email_gmail)}
                        className='hover:underline'
                      >
                        {profileData.email_gmail}
                      </button>
                    </span>
                  </div>
                </Fade></Zoom>

                {/* Secondary Email */}
                {/* <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                  <div className='mb-2 '>
                    <span className='mr-2 font-bold'>Secondary Email:</span>
                    <span>
                      <button
                        onClick={() => redirectToGmail(profileData.email_gmail2)}
                        className='hover:underline'
                      >
                        {profileData.email_gmail2}
                      </button>
                    </span>
                  </div>
                </Fade></Zoom> */}

                {/* KIIT Email */}
                <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                  <div className='mb-2'>
                    <span className='mr-2 font-bold'>KIIT Email:</span>
                    <span>
                      <button
                        onClick={() => redirectToGmail(profileData.email_KIIT)}
                        className='hover:underline'
                      >
                        {profileData.email_KIIT}
                      </button>
                    </span>
                  </div>
                </Fade></Zoom>

                {/* Place Details */}
                <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                  <div className=''>
                    <span className='mr-2 font-bold'>Place:</span>
                    <span>{profileData.home}</span>
                  </div>
                </Fade></Zoom>
              </div>

              {/* Resume Button */}
              <Zoom duration={revealDuration}><Fade delay={revealDelay} duration={revealDuration}>
                <div className='w-fit'>
                  <button
                    onClick={() => { window.open(`${profileData.resume}`, '_blank') }}
                    className='mt-12 transition duration-300 w-[160px] rounded-lg
                    bg-orange-500 hover:bg-orange-900 hover:text-orange-200 hover:font-bold group/g2'
                  >
                    <div className='flex items-center p-4 justify-center'>
                      <p
                        className='text-2xl
                        transition duration-300'
                      >Resume</p>
                      <svg
                        className='w-8 h-8
                        group-hover/g2:translate-x-2'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                      ><path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </Fade></Zoom>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  )
}

export default About