import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './layouts/SecurityLayout'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
