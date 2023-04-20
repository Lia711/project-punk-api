import React from 'react'
import "./Filters.scss"

const Filters = (props) => {
    const filterText=props.filterText;
  return (
    <div className='filters'>
        <label className='label'>{filterText}</label>
        <input type="checkbox"></input>
        <span className='checkmark'></span>
    </div>
  )
}

export default Filters