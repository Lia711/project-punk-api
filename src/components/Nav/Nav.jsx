import {React} from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
import Search from '../Search/Search'
import Filters from '../Filters/Filters'

const Nav = (props) => {
  const { searchTerm, handleInput, toggleAlcoholFilter, toggleYearFilter, toggleAcidityFilter } = props;
  
  return (
    <div className='nav'>
      <Search searchTerm={searchTerm} handleInput={handleInput}/>
      <Filters filterText={"Alcohol>6%"} onClick={toggleAlcoholFilter}/>
      <Filters filterText={"Classic Range(<2010)"} onClick={toggleYearFilter}/>
      <Filters filterText={"Acidity<4ph"} onClick={toggleAcidityFilter}/>
      <Link className="button" to="/">Home</Link>  
    </div>
  )
}

export default Nav