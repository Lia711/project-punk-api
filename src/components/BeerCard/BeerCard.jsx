import React from 'react'
import "./BeerCard.scss"
import {Link} from "react-router-dom"

const BeerCard = (props) => {

  const {beers}=props
  return beers.map((beer)=> (
    <div className='beer-container'>
        <img className='beer-container__image' src={beer.image_url} alt="beer" />
        <Link to={`/beer/${beer.id}`} className='beer-container__name'>{beer.name.split(" ").splice(0, 4).join(" ")}</Link>
        <p className='beer-container__description'>{beer.tagline}</p>
    </div>

  ))
}

export default BeerCard