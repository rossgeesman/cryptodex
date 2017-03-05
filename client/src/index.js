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
var PaymentProtocol = require('bitcore-payment-protocol')
var bitcore = require('bitcore-lib')

var now = Date.now() / 1000 | 0

// construct the payment details
var details = new PaymentProtocol().makePaymentDetails()
var address = bitcore.Address.fromString('mwkXG8NnB2snbqWTcpNiK6qqGHm1LebHDc')
details.set('network', 'test')
var output = new PaymentProtocol.Output({script: address.toBuffer(), amount: 10000})
details.set('outputs', output)
details.set('time', now)
details.set('expires', now + 60 * 60 * 24)
details.set('memo', 'A payment request from the merchant.')
details.set('payment_url', 'https://localhost/-/pay')

var request = new PaymentProtocol().makePaymentRequest()
request.set('payment_details_version', 1)
request.set('serialized_payment_details', details.serialize())
var rawbody = request.serialize()
console.log(new String(rawbody))


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