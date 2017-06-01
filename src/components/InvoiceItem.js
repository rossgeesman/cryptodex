import React from 'react'

var dataStyle = {
  textAlign: 'left'
}
const InvoiceItem = ({item, amount, paid}) => {
  
  return (
    <tr>
      <td style={dataStyle}>{item}</td>
      <td style={dataStyle}>{amount.toFixed(2)}</td>
      <td style={dataStyle}>{paid ? 'Paid' : 'Pending'}</td>
    </tr>
  )
}

export default InvoiceItem