import React from 'react'

const PaginateView = (props) => {
  const currentPage = parseInt(props.page)
  const next = () => { props.onNextPage(currentPage + 1) }
  const prev = () => { if (currentPage > 1) props.onPreviousPage(currentPage - 1) }
  const goto = (index) => () => { props.onGotoPage(index) }

  return (
    <div className="paginate-view flex flex-row flex-center">
      <div>
        <button className="paginate-prev" onClick={prev}>&#10094;</button>
        <button className='paginate-item' onClick={goto(currentPage)}>{currentPage}</button>
        <button className="paginate-next" onClick={next}>&#10095;</button>
      </div>
    </div>
  )
}

export default PaginateView
