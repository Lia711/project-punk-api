import {React, useState} from 'react'
import "./App.scss"
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import beers from './data/beers'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BeerInfo from './containers/BeerInfo/BeerInfo'

const App = () => {

  const [searchTerm, setSearchTerm]=useState("")

  const handleInput = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedBeers = beers.filter((beer)=> {
    return beer.name.includes(searchTerm)
  })

  return (
    <Router>
      <div className='app'>
      <Nav handleInput={handleInput} searchTerm={searchTerm}/>
      
      <Routes>
        
        <Route
        path="/"
        element={<Main 
          beers={searchedBeers}/>
        }
        />

        <Route
        path={"beer/:beerId"}
        element={<BeerInfo beers={beers}/>
        }
        />
        


      </Routes>

    </div>
    </Router>
    
  )
}

export default App
