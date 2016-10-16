import React from 'react'

const PaginateView = (props) => {
  const next = () => { props.onNextPage(props.page + 1) }
  const prev = () => { if (props.page > 1) props.onPreviousPage(props.page - 1) }
  const goto = (index) => () => { props.onGotoPage(index) }

  return (
    <div className="paginate-view flex flex-row flex-center">
      <div>
        <button className="paginate-prev" onClick={prev}>&#10094;</button>
        <button className='paginate-item' onClick={goto(props.page)}>{props.page}</button>
        <button className="paginate-next" onClick={next}>&#10095;</button>
      </div>
    </div>
  )
}

export default PaginateView
