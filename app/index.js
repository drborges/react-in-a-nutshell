import React from 'react'
import ReactDOM from 'react-dom'
import ListView from 'app/components/ListView'

// Add the corresponding css inline in the HTML, avoiding multiple network calls
import 'app/assets/css/styles.scss'

const body =
  <ListView direction="vertical">
    <span>Harry</span>
    <span>Diego</span>
    <span>Wade</span>
    <span>Matheus</span>
    <span>Greg</span>
  </ListView>

ReactDOM.render(body, document.getElementById('app'))
