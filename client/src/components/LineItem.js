import React from 'react'


const LineItem = ({coin}) => {
  
  return (
  	<tr>
  	  <td>{coin.name} </td>
  	  <td>{coin.amount}</td>
  	</tr>
  )
}

export default LineItem