import update from 'immutability-helper'
import Coins from '../lib/coins'
import payoutAddress from '../lib/payout_address'
import OrderStates from '../lib/OrderStates'
var _ = require('lodash')


let initalState = {coins: Coins.available, orderProgress: 0, popoverIsOpen: false, orderState: OrderStates.preRequesting, inputAmt: '', errors: []}

function setAmt(coin, total) {
  let amt = coin.checked ? total : 0
  return update(coin, {
    amt: {$set: amt}
  })
}

function setAmts(state) {
  return update(state, {
    coins: {$set: _.mapValues(state.coins, (c) => {
      return setAmt(c, findPerCoinAmt(state))
    })}
  })
}

function setAddress(coin) {
  return update((coin), { 
    $merge: {address: payoutAddress.generate(coin.symbol)}
  })
}

function findPerCoinAmt(state) {
  let count = _.filter(state.coins, (c) => { return c.checked }).length
  return state.inputAmt / count
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
      return setAmts(update(state, {
        inputAmt: {$set: action.total }
      }))
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
        orderState: {$set: 'opened'},
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
  	default:
  	  return state
  }
}

export default order


