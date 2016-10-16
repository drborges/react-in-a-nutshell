import React from 'react'

const FilterView = ({ onFilter, tabIndex }) => {
  const filter = (event) => onFilter(event.target.value)

  return (
    <input
      type="text"
      onChange={filter}
      tabIndex={tabIndex}
      placeholder="Type to filter list"
      className="filter-view margin-sm" />
  )
}

export default FilterView
