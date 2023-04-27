import {React} from 'react'
import "./Main.scss"
import BeerCard from '../BeerCard/BeerCard'

const Main = (props) => {
  let filteredBeers
  const {beers, acidity} =props
  
  const acidBeers = beers.filter((beer)=>{return beer.ph<4
  })
  
  if (acidity==true) {
    filteredBeers=acidBeers
  } else filteredBeers=beers

  return (
    <div className='beer-cards'>
        <BeerCard beers={filteredBeers}/>
    </div>
  )
}

export default Main