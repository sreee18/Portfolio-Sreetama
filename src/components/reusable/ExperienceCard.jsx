import React from 'react'

const ExperienceCard = ({ data }) => {
  return (
    <div className='flex flex-row  mx-2 p-2 xsm:gap-2 rounded-xl group/g2 bg-purple-200 group-hover/g1:bg-purple-100 '>

      {/* Left Part */}
      <div
        onClick={() => { window.open(`${data.link}`, '_blank') }}
        className='flex flex-col w-1/3 min-w-[100px] xsm:w-[200px] sm:w-[300px] md:w-[350px] cursor-pointer shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black] rounded-l-2xl border-2 border-purple-800 group-hover/g2:border-purple-950'>

        {/* Organization Image */}
        <div className='flex justify-center'>
          <img
            src={data.image}
            alt={data.name}
            className='rounded-tl-xl max-w-[100px] sm:max-w-[150px]'
          />
        </div>

        {/* Organization Name with clickable website link */}
        <button
          className='text-center 2xsm:text-lg xsm:text-xl sm:text-2xl h-full font-bold rounded-bl-xl bg-purple-800'
        >
          {data.name}
        </button>

      </div>

      {/* Right Part */}
      <div className='flex flex-col text-center mx-auto justify-between items-center  w-full rounded-r-2xl'>

        {/* Experience Type - Job or Internship */}
        <div className='bg-purple-500 text-white text-sm xsm:text-lg sm:text-xl md:text-2xl w-full rounded-tr-2xl'>{data.type}</div>

        {/* Duration and Description */}
        <div className='flex flex-col justify-around text-purple-600'>
          {/* Duration */}
          <div className='flex flex-row gap-4 mx-auto h-full text-sm xsm:text-lg sm:text-xl md:text-2xl'>
            <span className='font-bold '>From: {data.start}</span>
            <span>~</span>
            <span className='font-bold '>To: {data.end}</span>
          </div>

          {/* Domain */}
          <div className='flex gap-2 mx-auto text-sm xsm:text-lg sm:text-xl md:text-2xl'>
            <span>Domain:</span>
            <span className='font-bold'>{data.domain}</span>
          </div>

          {/* Description */}
          <div className='p-2 sm:text-[12px] md:text-[14px] lg:text-lg hidden sm:block'>
            {data.description}
          </div>
        </div>

        {/* Certificate */}
        <button
          className='bg-purple-800 text-slate-200 hover:bg-purple-950 hover:text-white text-lg xsm:text:2xl sm:text-3xl w-full rounded-br-2xl'
          onClick={() => { window.open(`${data.certificate}`, '_blank') }}
        >
          View Certificate
        </button>
      </div>
    </div>
  )
}

export default ExperienceCard