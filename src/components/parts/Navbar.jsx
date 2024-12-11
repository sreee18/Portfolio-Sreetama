import React, { useState } from 'react';
import { scroller } from 'react-scroll';
import { Slide } from 'react-awesome-reveal';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarButton from '../reusable/NavbarButton';
import Sidebar from './Sidebar';

import otherData from '../../data/OtherData.json';
import profileData from '../../data/profileData.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Callback function to receive the parameter from the child
  const onSidebarButtonClick = () => {
    setIsOpen(false);
  };

  // for using react-scroll and react-router at the same time
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  const navigate = useNavigate();
  const scrollToSection = (section) => {
    // console.log(section);
    scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: 'easeOutBack',
      offset: -180
    });
  };

  // method applied to the navbar buttons when not in the default page
  const goToHomeAndScroll = async (section) => {
    await navigate('/');
    await scroller.scrollTo(section, {
      duration: 1500,
      delay: 100,
      smooth: 'easeOutBack',
      offset: -180
    });
  };

  return (
    <>
      <div className="sticky top-0 z-30 flex bg-purple-950  h-20 text-slate-200 justify-between border-b-2 border-orange-500 text-xl font-AveriaLibre">
        <div className=" flex flex-row justify-between mx-auto w-[1014px] ">

          {/* Left part */}
          <div className='flex flex-row h-fit my-auto ml-2 text-2xl 2xsm:text-3xl sm:text-4xl font-bold'>
            <button
              onClick={() => { goToHomeAndScroll(otherData.navbarOptionLinks[0]) }}
              className="px-[10px] py-[6px] font-DancingScript font-bold bg-clip-text text-transparent bg-gradient-to-br from-orange-100 via-orange-400 to-orange-600 flex items-center border-b-4 border-t-2 border-orange-500 rounded-2xl shadow-[0_0_30px_purple] hover:shadow-[0_0_50px_purple] hover:shadow-pink-800">
              {profileData.name.firstName + " " + profileData.name.lastName}
            </button>

          </div>

          {/* Right Side */}
          <div className='my-auto mr-2'>

            {/* Hamburger sign */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-orange-500 focus:outline-none relative"
              >

                {/* Hamburger icon */}
                <svg
                  className={`w-10 h-10 transform transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>

                {/* Cross icon */}
                <svg
                  className={`w-10 h-10 absolute top-0 left-0 transform transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'rotate-90 opacity-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>

              </button>
            </div>

            {/* navbar options */}
            <div className='hidden md:flex flex-row space-x-2 h-fit tracking-tighter text-[16px]'>
              {otherData.navbarOptions.map((link, num) => (
                <NavbarButton
                  key={num}
                  myOnClick={() => {
                    location === '' ? scrollToSection(otherData.navbarOptionLinks[num]) : goToHomeAndScroll(otherData.navbarOptionLinks[num])
                  }}
                  buttonName={otherData.navbarOptions[num]}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Transperant gradient - change the height acordingly*/}
      <div className="fixed top-20 z-30 h-32 w-full bg-gradient-to-b from-purple-950 via-purple-900/60 to-transparent transition-all pointer-events-none"></div>

      {/* Sidebar */}
      {isOpen && (<Sidebar onParameterChange={onSidebarButtonClick} />)}
    </>
  )
}

export default Navbar;