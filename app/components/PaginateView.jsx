import React from 'react'

const PaginateView = ({ page, onNextPage, onPreviousPage, onGotoPage }) => {
  const next = () => { onNextPage(page + 1) }
  const prev = () => { if (page > 1) onPreviousPage(page - 1) }
  const goto = (index) => () => { onGotoPage(index) }

  return (
    <div className="paginate-view flex flex-row flex-center">
      <div>
        <button className="paginate-prev" onClick={prev}>&#10094;</button>
        <button className='paginate-item' onClick={goto(page)}>{page}</button>
        <button className="paginate-next" onClick={next}>&#10095;</button>
      </div>
    </div>
  )
}

export default PaginateView
