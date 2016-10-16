import React from 'react'

const FilterView = (props) => {
  const filter = (event) => props.onFilter(event.target.value)

  return (
    <input
      type="text"
      onChange={filter}
      tabIndex={props.tabIndex}
      placeholder="Type to filter list"
      className="filter-view margin-sm" />
  )
}

export default FilterView
