
import React from 'react'
import { Route } from 'react-router'

import App from '../App'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import UserProfile from '../components/UserProfile'
import OrderPage from '../components/OrderPage'


export default (
  <Route component={App} >
    <Route path="/" component={SignupForm}/>
    <Route path="/login" component={LoginForm}/>
    <Route path="/user/:id" component={UserProfile}/>
    <Route path="/order" component={OrderPage}/>
  </Route>
)