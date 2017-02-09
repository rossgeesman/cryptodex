import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes/routes'
import store from './data/store'
import { Provider } from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
  	<Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>, div)
})
