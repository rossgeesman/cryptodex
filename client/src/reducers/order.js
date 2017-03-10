import update from 'immutability-helper'
import Coins from '../lib/coins'
import payoutAddress from '../lib/payout_address'
import OrderStates from '../lib/OrderStates'
var _ = require('lodash')


let initalState = {activeTab: 'purchase', coins: Coins.available, orderProgress: 0, popoverIsOpen: false, orderState: OrderStates.preRequesting, inputAmt: '', errors: []}

function setAmt(amt, coin) {
  return update(coin, {
    amt: {$set: amt}
  })
}

function setAmts(amt, state) {
  let perCoin = Coins.asSatoshis(amt / Object.keys(state.coins).length)
  return update(state, {
    coins: {$set: _.mapValues(state.coins, (c) => {
      return setAmt(perCoin, c)
    })},
    perCoin: {$set: perCoin},
    inputAmt: {$set: amt }
  })
}

function setAddress(coin) {
  return update((coin), { 
    $merge: {address: payoutAddress.generate(coin.symbol)}
  })
}

const hasCoinsSelected = (coins) => {
  return _.filter(coins, (c) => { return c.checked }).length <= 0
}

function validate(order) {
  let errors = []
  if (hasCoinsSelected(order.coins))
    errors.push("The order should have at least one asset selected.")
  if (order.inputAmt <= 0)
    errors.push("The order needs an input amount.")

  return update(order, {
    errors: {$set: errors},
    orderState: {$set: errors.length === 0 ? 'requested' : 'requesting'}
  })
}


const order = (state = initalState, action) => {
  switch (action.type) {
    case 'START_ORDER':
      return update(state, {
        orderState: {$set: OrderStates.requesting}
      })
    case 'UPDATE_TOTAL':
      return setAmts(action.total, state)
    case 'VALIDATE_ORDER':
      return validate(state)
    case 'DISMISS_FLASH':
      let updated = state.errors.filter((err, index) => (index !== action.index))
      return update(state, {
        errors: {$set: updated}
      })
    case 'ADD_PRICE':
      return update(state, {
        coins: {
          [action.symbol]: {
            price: { $set: action.price }
          }
        }
      })
    case 'INITIATE_ORDER':
      return update(state, {
        orderState: {$set: 'initiated'},
        coins: {$set: _.mapValues(state.coins, (c) => {
          return setAddress(c)
        })},
        orderProgress: {$set: 0.1 }
      })
    case 'ADD_TXS':
      return update(state, {
        transactions: {$set: action.txs},
        orderState: {$set: OrderStates.opened},
        orderProgress: {$set: 0.8 }
      })
    case 'ADD_AVAILABLE':
      return update(state, {
        coins: {$set: action.coins }
      })
    case 'ADD_ESTIMATES':
      return update(state, {
        estimates: {$set: action.estimates}
      })
    case 'UPDATE_PROGRESS':
      return update(state, {
        orderProgress: {$set: action.amt}
      })
    case 'TOGGLE_POPOVER':
      return update(state, {
        popoverIsOpen: {$set: !state.popoverIsOpen}
      })
    case 'SWITCH_TAB':
      return update(state, {
        activeTab: {$set: action.tab}
      })
    case 'TOGGLE_MODAL':
      let foo = update(state, {
        visibleModal: {$set: action.modal},
        modalData: {$set: action.modalData}
      })
      console.log(foo)
      return foo
  	default:
  	  return state
  }
}

export default order


