import React from 'react'
import Transaction from '../lib/transaction'


const LineItem = ({coin, fetchPrice}) => {
  
  Transaction.price(coin.symbol)
  .then(
    (result) => { fetchPrice(result.rate, coin.symbol) }
  )
  
  return (
  	<tr>
  	  <td>{coin.name} </td>
  	  <td>{coin.symbol}</td>
  	  <td>{coin.amt}</td>
  	  <td>{coin.price ? coin.price : '...'}</td>
      <td>{'...'}</td>
      <td>{'...'}</td>
  	</tr>
  )
}

export default LineItem