import React from 'react'
import { Button } from 'reactstrap'
import paymentRequest from '../lib/paymentRequest'

const TrezorPayButton = ({transactions, amount}) => {
  //console.log(transactions)
  var outputs = paymentRequest.trezorOutputs(transactions.map((tx) => ( tx.deposit )), amount)
  //console.log(outputs)
  return (
    <Button onClick={() => {paymentRequest.generateTrezorRequest(outputs)}}>
      Pay with Trezor
    </Button>
  )
}

export default TrezorPayButton