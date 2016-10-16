import React from 'react'

const ListView = (props) => {
  let classes = `list-view flex flex-column ${props.loading ? 'loading' : null}`

  return (
    <div className={classes}>{props.children}</div>
  )
}

export default ListView
