import {React} from 'react'
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
      <button>Home</button>
    </div>
  )
}

export default Nav