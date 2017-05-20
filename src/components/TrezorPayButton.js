/*global TrezorConnect*/
import React, { PropTypes } from 'react'
import { Button } from 'reactstrap'
import OrderStates from '../lib/OrderStates'
import paymentRequest from '../lib/paymentRequest'
var _ = require('lodash')

//Should be abstracted later into a PaymentButton that can be extended for multiple payment methods
class TrezorPayButton extends React.Component {

  componentWillReceiveProps(newProps) {
    if (newProps.orderState === OrderStates.paymentInitiated) {
      let currentTx = _.takeWhile(newProps.transactions, (tx) => (tx.paid === false))[0]  
      let txOutput = paymentRequest.trezorOutput(currentTx.deposit, newProps.perCoin)
      TrezorConnect.composeAndSignTx(txOutput, (result) => {
        if (result.success) {
          //TrezorConnect.pushTransaction(result.serialized_tx, (pushResult) => {
            let pushResult = {success: true }
            if (pushResult.success) {
              this.props.markPaid(currentTx.deposit)
              //console.log('Transaction pushed. Id:', pushResult.txid)
            } else {
              //console.error('Error:', pushResult.error)
              
            }
          //})
        } else {
          console.error('Error:', result.error)
        }
      })
    }
  }

  render() {
    return (
      <Button onClick={this.props.startPayment}>
        Pay with Trezor
      </Button>
    )
  }
}

TrezorPayButton.propTypes = {
  transactions: PropTypes.array.isRequired,
  startPayment: PropTypes.func.isRequired,
  orderState: PropTypes.string.isRequired,
  perCoin: PropTypes.number.isRequired
}

export default TrezorPayButton