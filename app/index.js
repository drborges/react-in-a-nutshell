import React from 'react'
import ReactDOM from 'react-dom'

// This import tells Webpack to add the CSS code inline in the HTML
// avoiding multiple network calls, one for fetching the index.html
// and another for fetching the CSS file.
import 'app/assets/css/styles.scss'

const style = { fontWeight: 'bold' }
const body = <h1 style={style}>Hello, Power!</h1>

ReactDOM.render(body, document.getElementById('app'))
