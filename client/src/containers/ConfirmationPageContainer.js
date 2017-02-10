import { connect } from 'react-redux'
import * as actions from '../actions/index.js'
import ConfirmationPage from '../components/ConfirmationPage'


const OrderToConfirm = (order) => {
  return order
}

const mapStateToProps = (state) => ({
  coins: OrderToConfirm(state.order.coins),
  value: OrderToConfirm(state.order.inputAmt),
  orderState: OrderToConfirm(state.order.orderState)
})

const mapDispatchToProps = ({
  fetchPrice: actions.fetchPrice,
  initiateOrder: actions.initiateOrder
})


const ConfirmationPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmationPage)

export default ConfirmationPageContainer