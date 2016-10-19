import React from 'react'
import ReactDOM from 'react-dom'
import UserReposContainer from 'app/containers/UserReposContainer'

// Add the corresponding css inline in the HTML, avoiding multiple network calls
import 'app/assets/css/styles.scss'

const body =
  <div className="flex flex-row flex-wrap">
    <UserReposContainer owner="evancz" tabIndex="1" className="margin-sm flex-grow-even" />
    <UserReposContainer owner="powerhome" tabIndex="2" className="margin-sm flex-grow-even" />
    <UserReposContainer owner="drborges" tabIndex="3" className="margin-sm flex-grow-even" />
  </div>

ReactDOM.render(body, document.getElementById('app'))
