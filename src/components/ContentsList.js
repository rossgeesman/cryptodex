import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'reactstrap'
import LineItem from './LineItem'
var _ = require('lodash')

var contentsDivStyle = {
  overflow: 'auto', 
  maxHeight: '300px',
  paddingLeft: '16px', 
  paddingRight: '16px'
}

const ContentsList = ({coins}) => {
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
            _.map(coins, (coin) => (<LineItem key={coin.name} coin={coin}/> ))
          }
        </tbody>
      </Table>
    </div>
  )
}

ContentsList.propTypes = {
  coins: PropTypes.object.isRequired
}

export default ContentsList