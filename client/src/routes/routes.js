import React from 'react'
import { Route } from 'react-router'
import App from '../App'
import OrderFormContainer from '../containers/OrderFormContainer'


export default (
  <Route path="/" component={App} >
    <Route path="order" component={OrderFormContainer}/>
  </Route>
)