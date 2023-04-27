import {React, useState, useEffect} from 'react'
import "./App.scss"
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import BeerInfo from './containers/BeerInfo/BeerInfo'

const App = () => {

  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm]=useState("")
  const [page, setPage]=useState(1)
  const [useAlcoholFilter, setUseAlcoholFilter]=useState(false)
  const [useYearFilter, setUseYearFilter]=useState(false)
  const [useAcidityFilter, setUseAcidityFilter]=useState(false)

  const getBeers = async (alcoholFilter, yearFilter, page) => {
    let url=`https://api.punkapi.com/v2/beers`+`?page=${page}`;
    console.log(url)
  

    if (alcoholFilter) {
      url+=`&abv_gt=6`
    } 

    if (yearFilter) {
      url+=`&brewed_before=01-2010`
    }

    const response = await fetch(url)
    const data = await response.json()
    setBeers(data) 
  }

  const searchedBeers = beers.filter((beer)=> {
    return beer.name.includes(searchTerm)
  })
  
  useEffect(()=>{
    getBeers(useAlcoholFilter, useYearFilter, page);
  },[useAlcoholFilter, useYearFilter, page])

  const addPage=()=> {
    const count=page+1
    setPage(count)
  }

  const removePage=()=> {
    const count=page-1
    setPage(count)
  }

  const handleInput = (event) => {
    setSearchTerm(event.target.value)
  }

  const toggleAcidityFilter=()=>{
    setUseAcidityFilter(!useAcidityFilter);
  }

  const toggleAlcoholFilter=()=>{
    setUseAlcoholFilter(!useAlcoholFilter)
  }

  const toggleYearFilter=()=>{
    setUseYearFilter(!useYearFilter)
  }

  return (
    <Router>
      <div className='app'>
      <Nav handleInput={handleInput} searchTerm={searchTerm} toggleAlcoholFilter={toggleAlcoholFilter} toggleYearFilter={toggleYearFilter} toggleAcidityFilter={toggleAcidityFilter} addPage={addPage} removePage={removePage}/>
      
      <Routes>
        
        <Route
        path="/"
        element={<Main acidity={useAcidityFilter}
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
