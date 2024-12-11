import React from 'react';
import { Element } from "react-scroll";

import Home from './BodySections/Home';
import About from './BodySections/About';
import Skills from './BodySections/Skills';
import Works from './BodySections/Works';
import Experiences from './BodySections/Experiences';
import Education from './BodySections/Education';
// import Contact from './BodySections/Contact';

import otherData from '../../data/OtherData.json';

const Body = () => {
  return (
    <div className="relative z-20 ">

      <div className='flex bg-black bg-opacity-30 text-slate-200 font-Roboto justify-between'>
        {/* content of page */}
        <div className='w-screen' id={otherData.navbarOptionLinks[0]}>

          

          {/* Home Section */}
          <Element name={otherData.navbarOptionLinks[0]}>
            <Home />
            {/* Transperant gradient - change the height and colours acordingly*/}
            <div className="h-44 w-full bg-gradient-to-b from-transparent to-orange-500/20"></div>
          </Element>

          {/* About Section */}
          <Element name={otherData.navbarOptionLinks[1]}>
            <About />
            {/* Transperant gradient - change the height and colours acordingly*/}
            <div className="h-48 w-full bg-gradient-to-b from-orange-500/20 to-purple-500/20"></div>
          </Element>

          {/* Skills Section */}
          <Element name={otherData.navbarOptionLinks[2]}>
            <Skills />
            {/* Transperant gradient - change the height and colours acordingly*/}
            <div className="h-44 w-full bg-gradient-to-b from-purple-500/20 to-orange-500/20"></div>
          </Element>

          {/* Works Section */}
          <Element name={otherData.navbarOptionLinks[3]}>
            <Works />
            {/* Transperant gradient - change the height and colours acordingly*/}
            <div className="h-44 w-full bg-gradient-to-b from-orange-500/20 to-purple-500/20"></div>
          </Element>

          {/* Experiences Section */}
          <Element name={otherData.navbarOptionLinks[4]}>
            <Experiences />
            {/* Transperant gradient - change the height and colours acordingly*/}
            <div className="h-44 w-full bg-gradient-to-b from-purple-500/20 to-orange-500/20"></div>
          </Element>

          {/* Education Section */}
          <Element name={otherData.navbarOptionLinks[5]}>
            <Education />
            {/* Transperant gradient - change the height and colours acordingly*/}
            {/* <div className="h-44 w-full bg-gradient-to-b from-orange-500/20 to-purple-500/20"></div> */}
            <div className="h-44 w-full bg-gradient-to-b from-orange-500/20 to-orange-500/20"></div>
          </Element>

          {/* Contact Section */}
          {/* <Element name={otherData.navbarOptionLinks[6]}>
            <Contact /> */}
            {/* Transperant gradient - change the height and colours acordingly*/}
            {/* <div className="h-44 w-full bg-gradient-to-b from-purple-500/20 to-orange-500/20"></div>
          </Element> */}

          {/* Transperant gradient - change the height acordingly*/}
          <div className="h-32 w-full bg-gradient-to-b from-orange-500/20 via-orange-700/20 to-orange-950"></div>

          {/* Contact Me Section */}

        </div>

        {/* a gradiant gap - remember to add this in each page */}
        {/* <div className="w-full h-24 bg-gradient-to-b from-slate-200/50 to-transparent"></div> */}
      </div>

    </div>
  )
}

export default Body