import React from 'react'

const ListView = ({ mode, loading, children }) => {
  let classes = `list-view ${loading ? 'loading' : ''} flex-${mode}`
  let empty = <div className="empty-list">No Results.</div>
  let content = children && children.length > 0 ? children : empty

  return (
    <div className={classes}>{content}</div>
  )
}

export default ListView
