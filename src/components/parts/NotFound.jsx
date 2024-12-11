import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='relative z-20'>
      <div className='flex flex-col items-center bg-black/20'>

        {/* Transperant gradient - change the height acordingly*/}
        <div className="h-32 w-full bg-purple-100/20"></div>

        {/* Page Content */}
        <div className='w-full bg-orange-100/20 h-[70px] h-xsm:h-[170px] h-sm:h-[320px] h-md:h-[570px] h-lg:h-screen  '>
          <div className='sm:mx-auto px-2 sm:p-4 w-fit text-orange-200 hover:text-orange-900 mx-auto
          sm:w-[655px] md:w-[790px] lg:w-[1004px] text-2xl sm:text-4xl group/notfound p-8
          text-center bg-orange-500/50 hover:bg-orange-200 rounded-lg group/about 
          shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] transition duration-500 flex flex-col justify-center items-center'>
            <p className='font-bold  mx-auto'>मुझे लगता है आप खो गए हैं</p>
            <p className=''>(I think you are lost)</p>
            <Link to={'/'} className='w-fit'>
              <button className='mt-8 bg-orange-600 hover:bg-orange-700 
              border-4 border-orange-700 text-orange-200 hover:text-orange-100 hover:border-orange-900
              flex flex-col gap-2 mx-auto px-4 py-2 rounded-lg'>
                <p className='text-center mx-auto'>यहां वापस आओ</p>
                <p className='text-center mx-auto'>(Go Back Home)</p>
              </button>
            </Link>
          </div>
        </div>

        {/* Transperant gradient - change the height acordingly*/}
        <div className="h-32 w-full bg-gradient-to-b from-orange-100/20 via-orange-500/20 to-orange-950"></div>
        {/* <div className="h-44 w-full bg-gradient-to-b from-orange-100/20 to-orange-500/20"></div> */}
      </div>
    </div>
  )
}

export default NotFound