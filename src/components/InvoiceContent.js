import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap'
import InvoiceItem from './InvoiceItem'
import Coins from '../lib/coins'
var _ = require('lodash')

var contentsDivStyle = {
  overflow: 'auto', 
  maxHeight: '300px', 
  paddingLeft: '16px', 
  paddingRight: '16px'
}

function composeContent(coins, transactions, perCoin) {
  return _.map(transactions, (tx) => {
      return <InvoiceItem key={tx.withdrawalType} item={tx.withdrawalType} amount={Coins.asBtc(coins[tx.withdrawalType].rate) * perCoin} paid={tx.paid} txId={tx.orderId}/>
    }
  )
}

const InvoiceContent = ({transactions, coins, perCoin}) => {
  return (
    <div style={contentsDivStyle}>
      <Table size="sm">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { 
            composeContent(coins, transactions, perCoin)
          }
        </tbody>
      </Table>
    </div>
  )
}

InvoiceContent.propTypes = {
  perCoin: PropTypes.number.isRequired,
  coins: PropTypes.object.isRequired,
  transactions: PropTypes.array.isRequired
}

export default InvoiceContent