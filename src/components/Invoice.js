import React from 'react'
import { Card, CardHeader, CardTitle, CardBlock, CardFooter, CardText } from 'reactstrap'
import ContentsList from './ContentsList'
import TrezorPayButton from './TrezorPayButton'
import InvoiceContent from './InvoiceContent'
import OrderStates from '../lib/OrderStates'
import Coins from '../lib/coins'

var invoiceCardStyle = {
  margin: '10px'	
}

var invoiceContentStyle = {
  textAlign: 'left'
}

const Invoice = ({orderState, coins, perCoin, transactions, startPayment, markPaid}) => {
  if (orderState === OrderStates.requestingPayment || orderState === OrderStates.paymentInitiated) {
    return (
      <Card style={invoiceCardStyle}>
        <CardHeader>Invoice</CardHeader>
        <CardBlock style={invoiceContentStyle}>
          <CardTitle>Order Details</CardTitle>
          <InvoiceContent transactions={transactions} coins={coins} perCoin={perCoin}/>
          <CardText>Total Amount: {perCoin * transactions.length} Satoshis</CardText>
          <CardText>Per Coin Amount: {perCoin} Satoshis</CardText>
        </CardBlock>
        <CardFooter>
          <TrezorPayButton orderState={orderState} startPayment={startPayment} markPaid={markPaid} transactions={transactions} perCoin={perCoin}/>
        </CardFooter>
      </Card>
    )
  } else {
  	return (
  	  <Card style={invoiceCardStyle}>
        <CardHeader>Invoice</CardHeader>
        <CardBlock>
          <CardTitle>Order Details</CardTitle>
          <ContentsList coins={Coins.filterAvailable(coins)}/>
        </CardBlock>
      </Card> 
  	)
  }
}

export default Invoice