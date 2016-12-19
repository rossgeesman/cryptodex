import React from 'react'
import Coin from './Coin'
import InputCoin from './InputCoin'
import Coins from '../lib/coins'
var _ = require('lodash')

class OrderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {toPurchase: Coins.available, inputAmt: 0}
    this.updateOrder = this.updateOrder.bind(this)
    this.updateInputAmt = this.updateInputAmt.bind(this)
    this.updateAmts = this.updateAmts.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.checked = this.checked.bind(this)
  }

  checked( ) {
    return _.filter(this.state.toPurchase, function(c) { return c.checked })
  }

  updateAmts(amt) {
    let count = this.checked().length
    return _.mapValues(this.state.toPurchase, function(c) {
      if (c.checked === true ) {
        c.amt = amt / count
        return c
      } else {
        c.amt = 0
        return c
      }
    })
  }

  updateOrder(updatedCoin) {
    let order = this.state.toPurchase
    order[updatedCoin].checked = ! this.state.toPurchase[updatedCoin].checked
    this.setState({toPurchase: order})
    if (this.state.inputAmt > 0) {
      let amt = this.state.inputAmt
      this.setState({toPurchase: this.updateAmts(amt)})
    } else {
      return
    }
  }

  updateInputAmt(amt) {
    this.setState({inputAmt: amt, toPurchase: this.updateAmts(amt)})
  }

  createCoinInput(coin) {
    return <Coin
             key={coin.symbol}
             label={coin.name}
             symbol={coin.symbol}
             amt={coin.amt}
             handleCoinChange={this.updateOrder}
           />
  }

  coinInputList(coins) {
    return _.values(coins).map((coin) => this.createCoinInput(coin))
  }

  onFormSubmit(evt) {
    evt.preventDefault()
    console.log(this)
  }

  render() {
  	return (
      <form onSubmit={this.onFormSubmit}>
        {this.coinInputList(this.state.toPurchase)}
        <InputCoin updateInputAmt={this.updateInputAmt}/>
        <input type="submit" value="Submit" />
      </form>
  	)
  }
}

export default OrderPage