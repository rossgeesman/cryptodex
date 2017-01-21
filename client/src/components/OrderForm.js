import React, { PropTypes } from 'react'
import InputCoin from './InputCoin'
import Coin from './Coin'
var _ = require('lodash')


const OrderForm = ({ value, coins, onUpdateAmt, onToggleCoin}) => (

  <form >
    {
      _.values(coins).map((coin) => {
        return <Coin
          key={coin.symbol}
          coin={coin}
          handleCoinChange={onToggleCoin}
        />
      })
    }
    <InputCoin updateInputAmt={onUpdateAmt} value={value}/>
    <input type="submit" value="Submit" />
  </form>
)

OrderForm.propTypes = {
  coins: PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string,
    amt: PropTypes.number
  }).isRequired,
  onToggleCoin: PropTypes.func
}

export default OrderForm