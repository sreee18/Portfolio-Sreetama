import React, { useState } from 'react'

const EducationCard = ({props}) => {
  const [cardHovered, setCardHovered] = useState(false)
  const buttonCardHovered = () => {
    setCardHovered(true);
  }
  const buttonCardNotHovered = () => {
    setCardHovered(false);
  }

  return (
    <button
      onMouseEnter={buttonCardHovered}
      onMouseLeave={buttonCardNotHovered}
      className='bg-orange-100 hover:bg-orange-50
      rounded-lg p-2 sm:flex w-full cursor-default
      border-2 border-orange-600 hover:border-orange-900'
    >

      {/* Institute Image */}
      <div 
        className='h-[160px] sm:h-[200px] xl:h-[240px]
        w-full sm:w-5/12 lg:w-2/5 xl:w-1/3
        mb-1 mx-auto sm:mr-4 sm:mb-0'
      >
        <img
          className='h-full w-full rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg'
          src={props.image}
          alt={props.alt}
        />
      </div>

      {/* Education Details */}
      <div className='flex flex-col
        w-full sm:w-7/12 lg:w-3/5 xl:w-2/3
        sm:h-[200px] xl:h-[240px]
        '>

        {/* Degree Achieved */}
        <div 
          className={`font-bold text-lg lg:text-xl xl:text-3xl
          ${cardHovered ? 'text-orange-700' : 'text-orange-500'}
          text-center`}
        >
          <p>{props.achieved}</p>
        </div>

        {/* Horizontal line */}
        <hr className='border-orange-900 my-1'/>

        {/* Name and Board */}
        <div 
          className={`text-sm text-left xl:text-xl
          ${cardHovered ? 'text-orange-900' : 'text-orange-800'}
        `}>

          {/* Institute Name */}
          <div className=''>
          <span className='font-bold mr-2'>Institute:</span>
            <span className=''>{props.name}</span>
          </div>

          {/* Institute Place */}
          <div className=''>
          <span className='font-bold mr-2'>Place:</span>
            <span className=''>{props.place}</span>
          </div>

          {/* Institute Board */}
          <div className=''>
            <span className='font-bold mr-2'>Board:</span>
            <span className=''>{props.board}</span>
          </div>

        </div>

        {/* Horizontal line */}
        <hr className='sm:mt-auto border-orange-900 my-1'/>

        {/* Institute Study Year Duration */}
        <div 
          className={`font-bold 
          ${cardHovered ? 'text-orange-700' : 'text-orange-500'}
          text-lg lg:text-xl xl:text-2xl flex`}
        >
          <span>{props.yearStart}</span>
          <span>-</span>
          <span>{props.yearEnd}</span>
          <span className='mx-auto'>~</span>
          <span className={`${props.status==="Pursuing"?"animate-[pulse_.9s_ease-in-out_infinite]":""}`}>
            {props.status}
          </span>
        </div>

      </div>

    </button>
  )
};

export default EducationCard;