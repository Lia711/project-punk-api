import React from 'react'
import "./Nav.scss"
import Search from '../Search/Search'
import Filters from '../Filters/Filters'

const Nav = () => {
  return (
    <div className='nav'>
      <Search/>
      <Filters filterText={"Alcohol"}/>
      <Filters filterText={"Classic Range"}/>
      <Filters filterText={"Acidity"}/>
    </div>
  )
}

export default Nav