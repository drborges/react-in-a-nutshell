import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => <div>Hello World!!!</div>

ReactDOM.render(
  <Hello msg="world" />,
  document.getElementById('app'),
)
