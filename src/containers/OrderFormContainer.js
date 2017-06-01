import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index.js'
import OrderForm from '../components/OrderForm'
import Transaction from '../lib/transaction'
import Coins from '../lib/coins'
import OrderStates from '../lib/OrderStates'
var _ = require('lodash')


class OrderFormContainer extends React.Component {

  componentWillMount() {
    Coins.currentlyAvailable()
    .then((coins) => {
      this.props.updateAvailableCoins(coins)
    })
  }

  componentWillReceiveProps(newProps) {
    if (newProps.orderState === 'initiated' && _.filter(newProps.coins, 'address').length > 0) {
      Promise.all( _.map(_.filter(newProps.coins, 'address'), (coin) => {
        return Transaction.open(coin.address.address, coin.symbol, newProps.returnAddress.address)
      }))
      .then((responses) => { 
        this.props.addTransactions(responses)
      })
    }
    if (newProps.orderState === 'opened') {
      let addresses = _.mapValues(newProps.coins, 'address')
      addresses.returnAddress = newProps.returnAddress
      this.props.toggleModal('addressesModal', addresses)
    }
    if (newProps.orderState === OrderStates.requestingPayment && this.props.orderState === OrderStates.opened) {
      this.props.switchTab('invoice')
    }
  }

  render() {
    return (
      <OrderForm
      onUpdateAmt={this.props.onUpdateAmt}
      onOrderSubmit={this.props.onOrderSubmit}
      onValidOrder={this.props.onValidOrder}
      addTransactions={this.props.addTransactions}
      value={this.props.value}
      errors={this.props.errors}
      orderState={this.props.orderState}
      orderProgress={this.props.orderProgress}
      coins={this.props.coins}
      transactions={this.props.transactions}
      updateProgress={this.props.updateProgress}
      popoverIsOpen={this.props.popoverIsOpen}
      togglePopover={this.props.togglePopover}
      addEstimates={this.props.addEstimates}
      estimates={this.props.estimates}
      updateAvailableCoins={this.props.updateAvailableCoins}
      perCoin={this.props.perCoin}
      returnAddress={this.props.returnAddress}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  value: state.order.inputAmt,
  errors: state.order.errors,
  orderState: state.order.orderState,
  orderProgress: state.order.orderProgress,
  coins: state.order.coins,
  transactions: state.order.transactions,
  popoverIsOpen: state.order.popoverIsOpen,
  perCoin: state.order.perCoin,
  estimates: state.order.estimates,
  returnAddress: state.order.returnAddress
})

const mapDispatchToProps = ({
  onUpdateAmt: actions.updateTotal,
  onOrderSubmit: actions.validateOrder,
  onValidOrder: actions.initiateOrder,
  addTransactions: actions.addTransactions,
  addEstimates: actions.addEstimates,
  updateProgress: actions.updateProgress,
  togglePopover: actions.togglePopover,
  updateAvailableCoins: actions.updateAvailableCoins,
  toggleModal: actions.toggleModal,
  switchTab: actions.switchTab
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFormContainer)