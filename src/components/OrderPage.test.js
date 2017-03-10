import React from 'react'
import OrderPageContainer from '../containers/OrderPageContainer'
import store from '../data/store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
var _ = require('lodash')

describe('OrderPage', () => {
  const OrderPageComponent = mount(
    <Provider store={store}>
      <OrderPageContainer />
    </Provider>
  )
  describe('initial state', () => {
    it('should have an inputAmt of 0', () => {
       let input = OrderPageComponent.find('.order-amt')
       expect(input.prop('value') == 0)
    })
  })
  describe('when inputAmt is 3', () => {
    beforeEach(() => {
      let input = OrderPageComponent.find(".order-amt")
      input.simulate('change', {target: {value: '3'}})
    })
    it('should have a value of 3', () => {
      let input = OrderPageComponent.find(".order-amt")
      console.log(store.getState())
      expect(input.prop('value') == 3)
    })
    
    it('should divide the inputAmt across multiple coins', () => {
      let dash = OrderPageComponent.find('.DASH')
      let eth = OrderPageComponent.find('.ETH')
      eth.find('input').simulate('change')
      expect(eth.find('label').text()).toBe("1.5 - Ether")
      expect(dash.find('label').text()).toBe("1.5 - Dash")
    })
  })
})