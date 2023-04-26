import {React} from 'react'
import "./Main.scss"
import BeerCard from '../BeerCard/BeerCard'

const Main = (props) => {
  let filteredBeers
  const {beers, alcohol, year, acidity} =props
  
  const alcoholBeers = beers.filter((beer)=>{return beer.abv>6
  })

  const acidBeers = beers.filter((beer)=>{return beer.ph<4
  })

  const oldBeers = beers.filter((beer)=>{return Number(beer.first_brewed.substring(3))<2010
  })


  if (alcohol==true) {
    filteredBeers=alcoholBeers
  } else if (year==true){
    filteredBeers=oldBeers
  } else if (acidity==true) {
    filteredBeers=acidBeers
  } else if (acidity==true&&alcohol==true) {
    filteredBeers=alcoholBeers.filter((beer)=>{return beer.ph<4
    })
  } else if (year==true&&alcohol==true) {
    filteredBeers=alcoholBeers.filter((beer)=>{return Number(beer.first_brewed.substring(3))<2010
    })
  } else if (year==true&&acidity==true) {
    filteredBeers=acidBeers.filter((beer)=>{return Number(beer.first_brewed.substring(3))<2010
    })
  } else if (year==true&&acidity==true&&alcohol==true) {
    filteredBeers=acidBeers.filter((beer)=>{return Number(beer.first_brewed.substring(3))<2010
    }).filter((beer)=>{return beer.abv>6
    })
  } 
  else filteredBeers=beers
  


  return (
    <div className='beer-cards'>
        <BeerCard beers={filteredBeers}/>
    </div>
  )
}

export default Main