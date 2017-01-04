import React from 'react'
import OrderPage from './OrderPage'
import { mount } from 'enzyme'
import Coins from '../lib/coins'

describe('OrderPage', () => {
  const OrderPageComponent = mount(
  	<OrderPage />
  )
  describe('initial state', () => {
    it('should have an inputAmt of 0', () => {
       expect(OrderPageComponent.state().inputAmt).toBe(0)
    })

    it('should have all available coins', () => {
      let coins = Coins.available
      expect(OrderPageComponent.state().toPurchase).toEqual(coins)
    })
  })
  describe('when inputAmt is 3', () => {
    it('should update the coin amount when it is checked', () => {
      OrderPageComponent.setState({inputAmt: 3})
      let coin = OrderPageComponent.find('.BTC')
      coin.find('input').simulate('change')
      expect(coin.find('label').text()).toBe("3 - Bitcoin")
    })
    it('should divide the inputAmt across multiple coins', () =>{
      let btc = OrderPageComponent.find('.BTC')
      let eth = OrderPageComponent.find('.ETH')
      eth.find('input').simulate('change')
      expect(btc.find('label').text()).toBe("1.5 - Bitcoin")
      expect(eth.find('label').text()).toBe("1.5 - Ether")
    })
  })
  describe('when submitting an order', () => {
    describe('when there is no inputAmt', () => {
      it('should warn there is no input amt', () => {
        OrderPageComponent.setState({inputAmt: 0})
        let form = OrderPageComponent.find('form')
        form.simulate('submit')
        expect(OrderPageComponent.find('.modal-dialog').text()).toBe("You must enter an amount.")
      })
    })
    describe('when there is no coin selected', () => {
      it('should warn there are no coins selected', () => {


      })
    })
  })
})