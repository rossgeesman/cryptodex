import React from 'react'
import Coin from './Coin.js'
import { shallow } from 'enzyme'

const btc = {symbol: 'BTC', name: "Bitcoin", available: true, amt: 2 }
const updateOrder = jest.fn()

describe('Coin', () => {
  const coinComponent = shallow(
  	  <Coin
        coin={btc}
        handleCoinChange={updateOrder}
      />
  	)

  it("displays a label", () => {
    expect(coinComponent.find('label').text()).toEqual('2 - Bitcoin')
  })

  it("updates its parent when checked", () => {
    coinComponent.find('input').simulate('change')
    expect(updateOrder.mock.calls.length).toEqual(1)
    expect(updateOrder.mock.calls[0]).toContain(btc.symbol)
  })
})