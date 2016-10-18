import React from 'react'

const ListView = ({ mode, loading, children }) => {
  let listModeClasses = 'flex flex-column'
  let gridModeClasses = 'flex flex-row flex-wrap'
  let classes = `list-view-items ${loading ? 'loading' : ''} ${mode == 'list' ? listModeClasses : gridModeClasses}`

  const listItems = children.length > 0 ?
    <div className={classes}>{children}</div> :
    <div className="empty-list"><div>Empty list.</div></div>

  return (
    <div className="list-view">{listItems}</div>
  )
}

export default ListView
