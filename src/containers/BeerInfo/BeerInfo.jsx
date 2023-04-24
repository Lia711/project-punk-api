import React from 'react'
import {useParams} from "react-router-dom"

const BeerInfo = () => {
  return (
    <div>
        <img className="beer-info__img"/>
        <h2 className="beer-info__heading">name</h2>
        <p className='beer-info__content'>description</p>
        <h2 className="beer-info__heading">Facts</h2>
        <ul className="album-info__facts">
          <li>first brewed :  </li>
          <li>alcohol content :  </li>
          <li>acidity :  </li>
        </ul>
        <p className='beer-info__content'>food pairing</p>
    </div>   
      
  )
}

export default BeerInfo