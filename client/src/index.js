import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router, browserHistory } from 'react-router'
import routes from './routes/routes'
import { Provider } from 'react-redux'
import store from './data/store'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'




const networkInterface = createNetworkInterface('/graphql')

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    req.options.headers.authorization = localStorage.getItem('token') ? localStorage.getItem('token') : 'thisismytoken'
    next();
  }
}])

const client = new ApolloClient({
  networkInterface,
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)