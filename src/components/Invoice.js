import React from 'react'
import { Card, CardHeader, CardTitle, CardBlock, CardFooter, CardText } from 'reactstrap'
import TrezorPayButton from './TrezorPayButton'
import OrderStates from '../lib/OrderStates'

var invoiceCardStyle = {
  margin: '10px'	
}

var invoiceContentStyle = {
  textAlign: 'left'
}

const Invoice = ({orderState, perCoin, transactions}) => {
  if (orderState === OrderStates.requestingPayment) {
    return (
      <Card style={invoiceCardStyle}>
        <CardHeader>Invoice</CardHeader>
        <CardBlock style={invoiceContentStyle}>
          <CardTitle>Order Details</CardTitle>
          <CardText>Total Amount: {perCoin * transactions.length} Satoshis</CardText>
          <CardText>Per Coin Amount: {perCoin} Satoshis</CardText>
        </CardBlock>
        <CardFooter>
          <TrezorPayButton transactions={transactions} amount={perCoin}/>
        </CardFooter>
      </Card>
    )
  } else {
  	return (
  	  <Card style={invoiceCardStyle}>
        <CardHeader>Invoice</CardHeader>
        <CardBlock>
          <CardTitle>Order Details</CardTitle>
          <CardText>No current invoice. Start an order first.</CardText>  
        </CardBlock>
      </Card> 
  	)
  }
}

export default Invoice