import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index.js'
import Invoice from '../components/Invoice'

class InvoiceContainer extends React.Component {

  render() {
    return (
      <Invoice
        orderState={this.props.orderState}
        estimates={this.props.estimates}
        perCoin={this.props.perCoin}
        transactions={this.props.transactions}
        startPayment={this.props.startPayment}
        markPaid={this.props.markPaid}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  orderState: state.order.orderState,
  estimates: state.order.estimates,
  perCoin: state.order.perCoin,
  transactions: state.order.transactions
})

const mapDispatchToProps = ({
  startPayment: actions.startPayment,
  markPaid: actions.markPaid
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceContainer)