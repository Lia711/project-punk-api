import {React} from 'react'
import "./Main.scss"
import BeerCard from '../BeerCard/BeerCard'

const Main = (props) => {
  let filteredBeers
  const {beers, alcohol} =props
  
  const alcoholBeers = beers.filter((beer)=>{return beer.abv>6
  })

  if (alcohol==true) {
    filteredBeers=alcoholBeers
  } else filteredBeers=beers

  return (
    <div className='beer-cards'>
        <BeerCard beers={filteredBeers}/>
    </div>
  )
}

export default Main