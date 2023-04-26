import {React, useState, useEffect} from 'react'
import "./App.scss"
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
//import beers from './data/beers'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BeerInfo from './containers/BeerInfo/BeerInfo'

const App = () => {

  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm]=useState("")
  const [useAlcoholFilter, setUseAlcoholFilter]=useState(false)
  const [useYearFilter, setUseYearFilter]=useState(false)
  const [useAcidityFilter, setUseAcidityFilter]=useState(false)

  const getBeers = async () => {
    const url="https://api.punkapi.com/v2/beers";
    const response = await fetch(url)
    const data = await response.json()
    setBeers(data) 
  }

  const searchedBeers = beers.filter((beer)=> {
    return beer.name.includes(searchTerm)
  })
  
  useEffect(()=>{
    getBeers();
  },[])

  console.log(beers)

  const handleInput = (event) => {
    setSearchTerm(event.target.value)
  }

  const toggleAlcoholFilter=()=>{
    setUseAlcoholFilter(!useAlcoholFilter);
  }

  const toggleYearFilter=()=>{
    setUseYearFilter(!useYearFilter);
  }

  const toggleAcidityFilter=()=>{
    setUseAcidityFilter(!useAcidityFilter);
  }

  return (
    <Router>
      <div className='app'>
      <Nav handleInput={handleInput} searchTerm={searchTerm} toggleAlcoholFilter={toggleAlcoholFilter} toggleYearFilter={toggleYearFilter} toggleAcidityFilter={toggleAcidityFilter}/>
      
      <Routes>
        
        <Route
        path="/"
        element={<Main alcohol={useAlcoholFilter} year={useYearFilter} acidity={useAcidityFilter}
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
