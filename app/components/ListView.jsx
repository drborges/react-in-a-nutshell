import React from 'react'

const ListView = ({ mode, loading, children }) => {
  let classes = `list-view ${loading ? 'loading' : ''} flex-${mode}`
  let items = <div className={classes}>{children}</div>
  let empty = <div className="empty-list"><div>No Results.</div></div>
  let content = children.length > 0 ? items : empty

  return (
    <div className="list-view">{content}</div>
  )
}

export default ListView
