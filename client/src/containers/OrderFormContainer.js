import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index.js'
import OrderForm from '../components/OrderForm'
import Transaction from '../lib/transaction'
import Coins from '../lib/coins'
var _ = require('lodash')


class OrderFormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.beginPayment = this.beginPayment.bind(this)
  }

  componentWillMount() {
    Coins.availableNow()
    .then((coins) => {
      this.props.updateAvailableCoins(coins)
    })
  }

  beginPayment(outputs) {
    

  }

  componentWillReceiveProps(newProps) {
    if (newProps.value !== this.props.value && newProps.value !== 0)
      Promise.all( _.map(newProps.coins, (coin) => {
        return Transaction.price(coin.symbol)
      }))
      .then((responses) => { this.props.addEstimates(responses) })
    if (newProps.orderState === 'initiated' && _.every(newProps.coins, 'address')) {
      Promise.all( _.map(newProps.coins, (coin) => {
        return Transaction.open(coin.address.address, coin.symbol)
      }))
      .then((responses) => { 
        this.props.addTransactions(responses) 
      })
    }
    if (newProps.orderState === 'opened') {
      this.props.toggleModal('addressesModal', _.mapValues(newProps.coins, 'address'))
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
  estimates: state.order.estimates
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
  toggleModal: actions.toggleModal
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderFormContainer)