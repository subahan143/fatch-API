import React from 'react'
import "./cards.css"

const Cards = ({thumbnail,id,title,price,rating}) => {
  return (
    <div className='cards'>
      <img src={thumbnail} alt="" />
      <span>{id}</span>
      <span>{title}</span>
      <span>{price}</span>
      <span>{rating}</span>
    </div>
  )
}

export default Cards;
