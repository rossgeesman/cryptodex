import React from 'react'
import Coin from './Coin'
import InputCoin from './InputCoin'
import Coins from '../lib/coins'
var _ = require('lodash')

class OrderPage extends React.Component {
  constructor(props) {
    super(props)
    const coinsAvailable = _.mapValues(Coins.available, (c) => {return Object.assign(c, {checked: false})})
    this.state = {toPurchase: coinsAvailable, inputAmt: 0}
    this.updateOrder = this.updateOrder.bind(this)
    this.updateInputAmt = this.updateInputAmt.bind(this)
  }

  checked( ) {
    return _.filter(this.state.toPurchase, function(c) { return c.checked })
  }

  updateAmts(amt) {
    return _.mapValues(this.state.toPurchase, function(c) {
      if (c.checked === true ) {
        c.amt = amt
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
      let amt = this.state.inputAmt / this.checked().length
      this.setState({toPurchase: this.updateAmts(amt)})
    } else {
      return
    }
  }

  updateInputAmt(amt) {
    this.setState({inputAmt: amt})
    this.setState({toPurchase: this.updateAmts(amt)})
  }

  createCoinInput(coin) {
    return <Coin
             key={coin.symbol}
             label={coin.name}
             symbol={coin.symbol}
             amt={coin.amt}
             coin={coin}
             handleCoinChange={this.updateOrder}
           />
  }

  coinInputList(coins) {
    var res = Object.entries(coins).map(([prop, value]) => {
      return _.merge(value, {symbol: prop } )
    })
    return res.map((coin) => this.createCoinInput(coin))
  }

  render() {
  	return (
      <form>
        {this.coinInputList(this.state.toPurchase)}
        <InputCoin updateInputAmt={this.updateInputAmt}/>
      </form>
  	)
  }
}

export default OrderPage