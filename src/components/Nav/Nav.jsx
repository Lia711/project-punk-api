import {React} from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
import Search from '../Search/Search'
import Filters from '../Filters/Filters'

const Nav = (props) => {
  const { searchTerm, handleInput } = props;
  
  return (
    <div className='nav'>
      <Search searchTerm={searchTerm} handleInput={handleInput}/>
      <Filters filterText={"Alcohol"}/>
      <Filters filterText={"Classic Range"}/>
      <Filters filterText={"Acidity"}/>
      <Link className="button" to="/">Home</Link>  
    </div>
  )
}

export default Nav