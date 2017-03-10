import React, { PropTypes } from 'react'
import { Table } from 'reactstrap'
import LineItem from './LineItem'
import Coins from '../lib/coins'
var _ = require('lodash')

var contentsDivStyle = {
  overflow: 'auto', 
  maxHeight: '300px', 
  paddingLeft: '16px', 
  paddingRight: '16px'
}

function composeContent(coins, estimates) {
  return estimates.map((est) => {
    let coin_sym = Coins.pairToSym(est.pair)
    return { 
      name: `${coins[coin_sym].name} (${coin_sym})`,
      amount: (Coins.asBtc(coins[coin_sym].amt) * est.rate).toFixed(2)
    }
  })
}

const ContentsList = ({coins, estimates}) => {
  return (
    <div style={contentsDivStyle}>
      <Table size="sm">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            composeContent(coins, estimates).map((coin) => {
              return <LineItem key={coin.name} coin={coin}/>
            }) 
          }
        </tbody>
      </Table>
    </div>
  )
}

ContentsList.propTypes = {
  coins: PropTypes.object.isRequired,
  estimates: PropTypes.array.isRequired
}

export default ContentsList