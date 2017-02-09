import React from 'react'
import OrderPageContainer from '../containers/OrderPageContainer'
import store from '../data/store'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import Coins from '../lib/coins'
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

    it('should have all available coins', () => {
      let form = OrderPageComponent.find('input[type="checkbox"]').nodes.map((n) => { return n.value})
      let values = Object.keys(Coins.available).map((key) => { return Coins.available[key].name })
      expect(form).toEqual(values)
    })
  })
  describe('when inputAmt is 3', () => {
    beforeEach(() => {
      let input = OrderPageComponent.find(".order-amt")
      input.simulate('change', {target: {value: '3'}})
    })
    it('should have a value of 3', () => {
      let input = OrderPageComponent.find(".order-amt")
      expect(input.prop('value') == 3)
    })
    it('should update the coin amount when it is checked', () => {
      let coin = OrderPageComponent.find('.DASH')
      coin.find('input').simulate('change')
      expect(coin.find('label').text()).toBe("3 - Dash")
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