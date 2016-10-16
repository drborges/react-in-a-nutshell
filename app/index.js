import React from 'react'
import ReactDOM from 'react-dom'
import UserReposContainer from 'app/containers/UserReposContainer'

// Add the corresponding css inline in the HTML, avoiding multiple network calls
import 'app/assets/css/styles.scss'

const body =
  <div className="flex flex-row">
    <UserReposContainer username="evancz" tabIndex="1" className="margin-sm" />
    <UserReposContainer username="drborges" tabIndex="2" className="margin-sm" />
  </div>

ReactDOM.render(body, document.getElementById('app'))
