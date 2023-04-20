import React from 'react'
import "./App.scss"
import Main from './components/Main/Main'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <div className='app'>
      <Nav/>
      <Main/>
    </div>
  )
}

export default App
