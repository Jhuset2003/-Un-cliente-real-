import React from 'react'
import "./MiniCarousels.css"


const MiniCarousels = (props) => {
  return (
    <div className="mini-carousels">
        <h1>{props.typesproduct}</h1>
        <img src={props.typesimg} alt="" />
        <h2>{props.typesvalue}</h2>
    </div>
  )
}


export default MiniCarousels