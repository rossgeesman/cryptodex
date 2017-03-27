import React from 'react'
import { Button, Card, CardHeader, CardTitle, CardBlock, CardFooter, CardText } from 'reactstrap'
import OrderStates from '../lib/OrderStates'
import { Link } from 'react-router-dom'

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
          <Button>Pay with Trezor</Button>
          <Button>
            Bitcoin Wallet
          </Button>
          
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