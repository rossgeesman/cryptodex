import { connect } from 'react-redux'
import * as actions from '../actions/index.js'
import OrderForm from '../components/OrderForm'


const OrderPage = (coins) => {
  return coins
}

const mapStateToProps = (state) => ({
  coins: OrderPage(state.order.coins),
  value: OrderPage(state.order.inputAmt),
  errors: OrderPage(state.order.errors),
  orderState: OrderPage(state.order.orderState)
})

const mapDispatchToProps = ({
  onToggleCoin: actions.toggleCoin,
  onUpdateAmt: actions.updateTotal,
  onOrderSubmit: actions.validateOrder
})

const OrderPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderForm)

export default OrderPageContainer