import React from 'react'

var dataStyle = {
  textAlign: 'left'
}
const LineItem = ({coin}) => {
  
  return (
  	<tr>
  	  <td style={dataStyle}>{coin.name} </td>
  	  <td style={dataStyle}>{coin.amount}</td>
  	</tr>
  )
}

export default LineItem