import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import routes from './routes/routes'
import store from './data/store'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
)