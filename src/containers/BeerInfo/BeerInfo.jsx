import React from 'react'
import {useParams} from "react-router-dom"
import "./BeerInfo.scss"


const BeerInfo = (props) => {
    const {beers}=props;
    const {beerId}=useParams();
    const currentBeer = beers.find(beer => beer.id == beerId);
    const {name, image_url, description, first_brewed, abv, ph, food_pairing} = currentBeer

  return (
    <div className='beerinfo'>
        <img src={image_url}/>
        <div>
        <h2>{name}</h2>
        <p>{description}</p>
        <h2>Facts</h2>
        <ul>
          <li>first brewed: {first_brewed}</li>
          <li>alcohol content: {abv}%</li>
          <li>acidity: {ph}ph</li>
        </ul>
        <h2>Goes well with:</h2>
        <p>{food_pairing.join(", ")}</p>
        </div> 
    </div>   
      
  )
}

export default BeerInfo