import React from 'react'

const carouselItem = ({image,title}) => {
  return (
    <div className='CalatogContainer flex flex-col justify-center items-center'>
      <img className='catalogImg w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem]
      rounded-full object-cover object-center' src={image} alt=''></img>
      <span className='py-5 font-semibold text-1 text-gray-400'>{title}</span>
    </div>
  )
}

export default carouselItem
