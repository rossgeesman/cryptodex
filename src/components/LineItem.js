import React from 'react'
import Coins from '../lib/coins'

var dataStyle = {
  textAlign: 'left'
}
const LineItem = ({coin}) => {
  
  return (
  	<tr>
  	  <td style={dataStyle}>{coin.name} </td>
  	  <td style={dataStyle}>{coin.amt ? (Coins.asBtc(coin.amt) * coin.rate).toFixed(2) : 0}</td>
  	</tr>
  )
}

export default LineItem