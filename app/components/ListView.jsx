import React from 'react'

let direction2class = {
  'vertical': 'flex-column',
  'horizontal': 'flex-row',
}

const ListView = (props) => {
  let direction = props.direction || 'vertical'
  let classes = `flex ${direction2class[direction]}`

  return (
    <div className={classes}>{props.children}</div>
  )
}

export default ListView
