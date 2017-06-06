import React from 'react'
import { Badge } from 'reactstrap';


var dataStyle = {
  textAlign: 'left'
}
const StatusBadge = ({paid, link}) => {
    if (paid === false) {
      return <a href={link}>
               <Badge color="warning">{'Pending'}</Badge>
             </a>
    } else if (paid === true) {
      return <a href={link}>
               <Badge color="success">{'Paid'}</Badge>
             </a>
    } else {
      return null
    }

}
const InvoiceItem = ({item, amount, paid, txId}) => {
  return (
    <tr>
      <td style={dataStyle}>{item}</td>
      <td style={dataStyle}>{amount.toFixed(2)}</td>
      <td style={dataStyle}>
        <StatusBadge paid={paid} link={'https://shapeshift.io/#/status/' + txId}/>
      </td>
    </tr>
  )
}

export default InvoiceItem