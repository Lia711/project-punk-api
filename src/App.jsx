import {React, useState} from 'react'
import "./App.scss"
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'
import beers from './data/beers'

const App = () => {

  const [searchTerm, setSearchTerm]=useState("")

  const handleInput = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchedBeers = beers.filter((beer)=> {
    return beer.name.includes(searchTerm)
  })

  return (
    <div className='app'>
      <Nav handleInput={handleInput} searchTerm={searchTerm}/>
      <Main beers={searchedBeers}/>
    </div>
  )
}

export default App
