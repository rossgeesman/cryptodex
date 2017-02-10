
import React from 'react'
import { Route } from 'react-router'

import App from '../App'
import OrderPageContainer from '../containers/OrderPageContainer'
import ConfirmationPageContainer from '../containers/ConfirmationPageContainer'


export default (
  <Route path="/" component={App} >
    <Route path="order" component={OrderPageContainer}/>
    <Route path="confirmation" component={ConfirmationPageContainer}/>
  </Route>
)