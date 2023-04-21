import {React} from 'react'
import "./Main.scss"
import BeerCard from '../BeerCard/BeerCard'

const Main = (props) => {
  const {beers} =props
  console.log(beers)
  return (
    <div className='beer-cards'>
        <BeerCard beers={beers}/>
    </div>
  )
}

export default Main