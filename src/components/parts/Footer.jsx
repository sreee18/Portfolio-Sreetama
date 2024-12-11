import React from 'react';

import profileData from '../../data/profileData.json';

const Footer = () => {
  const redirectToGmail = (mail) => {
    const subject = "[Redirected from Sreetama's-portfolio]";
    const body = 'Greetings of the day Sreetama,\n';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mail}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="relative z-20">
      <div className="bg-orange-500 border-t-2 border-purple-500 h-fit">
        <div className='grid grid-cols-1 gap-2 sm:gap-1 sm:grid-cols-2 text-center text-purple-950 items-center py-4 px-1 sm:px-4 lg:w-[1014px] mx-auto'>

          {/* Part 1 */}
          <div className='flex flex-col gap-1 text-lg sm:text-xl'>

            {/* Thank you note */}
            <div className='font-bold'>Thank you for visiting my Portfolio</div>

            {/* Gmail button */}
            <div className='bg-purple-950 text-orange-500 w-fit mx-auto px-4 py-2 rounded-lg flex flex-col'>
              <p onClick={() => redirectToGmail(profileData.email_gmail)}
                className='hover:underline underline-offset-2 cursor-pointer'
              >{profileData.email_gmail}</p>
              <p onClick={() => redirectToGmail(profileData.email_gmail2)}
                className='hover:underline underline-offset-2 cursor-pointer'
              >{profileData.email_gmail2}</p>
              <p onClick={() => redirectToGmail(profileData.email_KIIT)}
                className='hover:underline underline-offset-2 cursor-pointer'
              >{profileData.email_KIIT}</p>
            </div>

          </div>

          {/* Part 2 */}
          <div className='flex flex-col gap-2'>

            {/* Section heading */}
            <p className='text-lg sm:text-xl'>Connect me over my socials</p>

            {/* Contact Icons */}
            <div className="flex flex-row flex-wrap gap-2 mx-auto">

              {/* Linkedin button */}
              <button
                onClick={() => { window.open(`${profileData.links.link_linkedin}`, '_blank') }}
                className=''
              >
                <div className="bg-purple-950 hover:bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full p-1 sm:p-3 hover:p-[2px] sm:hover:p-2 transition-all duration-300">
                  <svg
                    className=' rounded-full'
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin"><g fill="none" fillRule="evenodd"><g><rect width="72" height="72" fill="#117EB8" rx="4"></rect>
                      <path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"
                      ></path></g></g></svg>
                </div>
              </button>

              {/* Github button */}
              <button
                onClick={() => { window.open(`${profileData.links.link_github}`, '_blank') }}
                className=''
              >
                <div className="bg-purple-950 hover:bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full p-1 sm:p-3 hover:p-[2px] sm:hover:p-2 transition-all duration-300">
                  <div className='w-full h-full bg-black text-white rounded-full'>
                    <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github" fill='currentColor'>
                      <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
                    </svg>
                  </div>
                </div>
              </button>

              {/* Hackerrank button */}
              <button
                onClick={() => { window.open(`${profileData.links.link_leetcode}`, '_blank') }}
                className=''
              >
                <div className="bg-purple-950 hover:bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full p-1 sm:p-3 hover:p-[2px] sm:hover:p-2 transition-all duration-300">
                  <svg className='rounded-full text-purple-100 bg-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="leetcode">
                    <path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>
                    <path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>
                    <path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path>
                  </svg>
                </div>
              </button>

              {/* Instagram Button */}
              <button
                onClick={() => { window.open(`${profileData.links.link_instagram}`, '_blank') }}
                className=''
              >
                <div className="bg-purple-950 hover:bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full p-1 sm:p-3 hover:p-[2px] sm:hover:p-2 transition-all duration-300">
                  <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                  </svg>
                </div>
              </button>

              {/* Spotify */}
              <button
                onClick={() => { window.open(`${profileData.links.link_spotify}`, '_blank') }}
                className=''
              >
                <div className="bg-purple-950 hover:bg-purple-600 w-8 h-8 sm:w-12 sm:h-12 rounded-full p-1 sm:p-3 hover:p-[2px] sm:hover:p-2 transition-all duration-300 ">
                  <div className='w-full h-full bg-black rounded-full text-[#1cb351]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className=''>
                      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />
                    </svg>
                  </div>
                </div>
              </button>

            </div>
          </div>
        </div>
        <div className='text-[11px] text-yellow-900 sm:text-sm text-center hidden w-hit'>
          <button
            className='hover:bg-orange-400 cursor-default flex gap-1 mx-auto'
          >
            <span>Website developed by me (Sreetama Mukherjee) taken help from various YT videos, online sources, CHATGPT and friends</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer;