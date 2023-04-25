import React from 'react'
import "./Filters.scss"

const Filters = (props) => {
  const {filterText, onClick} =props;
  return (
    <div className='filters'>
        <label className='label'>{filterText}</label>
        <input onClick={onClick} type="checkbox"></input>
    </div>
  )
}

export default Filters