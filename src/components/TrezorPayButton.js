/*global TrezorConnect*/
import React, { PropTypes } from 'react'
import { Button } from 'reactstrap'
import OrderStates from '../lib/OrderStates'
import paymentRequest from '../lib/paymentRequest'
var _ = require('lodash')

//Should be abstracted later into a PaymentButton that can be extended for multiple payment methods
class TrezorPayButton extends React.Component {
  constructor(props) {
    super(props)
    this.onSuccessfulPayment = this.onSuccessfulPayment.bind(this)
  }

  onSuccessfulPayment(result) {
    if (result.success) {
      TrezorConnect.pushTransaction(result.serialized_tx, (pushResult) => {
        if (pushResult.success) {
          console.log('Transaction pushed. Id:', pushResult.txid)
          let currentTx = _.filter(this.props.transactions, (tx) => (tx.paid === false))[0]
          this.props.markPaid(currentTx.deposit)
        } else {
          console.error('Error:', pushResult.error)
        }
      })
    } else {
      console.error('Error:', result.error)
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.orderState === OrderStates.paymentInitiated) {
      let currentTx = _.filter(newProps.transactions, (tx) => (tx.paid === false))[0]
      if (currentTx !== undefined) {
        let txOutput = paymentRequest.trezorOutput(currentTx.deposit, newProps.perCoin)
        TrezorConnect.closeAfterSuccess(false)
        TrezorConnect.composeAndSignTx(txOutput, this.onSuccessfulPayment)
      } else {
        console.log("All Transactions Paid")
      }
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
  perCoin: PropTypes.number.isRequired,
  startPayment: PropTypes.func.isRequired,
  markPaid: PropTypes.func.isRequired
}

export default TrezorPayButton