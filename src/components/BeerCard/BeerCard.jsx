import React from 'react'
import "./BeerCard.scss"

const BeerCard = (props) => {
  const {beers}=props
  return beers.map((beer)=> (
    <div className='beer-container'>
        <img className='beer-container__image' src={beer.image_url} alt="beer" />
        <h1 className='beer-container__name'>{beer.name}</h1>
        <p className='beer-container__description'>{beer.description}</p>
    </div>

  ))
}

export default BeerCard