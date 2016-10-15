import React from 'react'
import ReactDOM from 'react-dom'
import UserReposContainer from 'app/containers/UserReposContainer'

// Add the corresponding css inline in the HTML, avoiding multiple network calls
import 'app/assets/css/styles.scss'

const body = <UserReposContainer username="drborges" />
ReactDOM.render(body, document.getElementById('app'))
