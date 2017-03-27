import React from 'react'
import { Route } from 'react-router'
import App from '../App'
import MainJumbotron from '../components/MainJumbotron'


export default (
  <Route path="/" component={App} >
    <Route path="order" component={MainJumbotron}/>

  </Route>
)