import React from 'react'

const singleCarouselItem = ({image}) => {
  return (
    <div className='CaraouselContainer'>
    <img className='CaraouselImage' src={image} alt=''></img>
  </div>
  )
}

export default singleCarouselItem
