import React from 'react'
import "./CategoryCarouselCard.css"

const CategoryCarouselCard = (props) => {
  return (
    <div className="category-carousel">
      <div className="sub-container">
        <h1>{props.products}</h1>
        <img src={props.images} alt="" />
      </div>
    </div>
  )
}

export default CategoryCarouselCard