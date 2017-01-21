import update from 'immutability-helper'
import Coins from '../lib/coins'
var _ = require('lodash')
let initalState = {coins: Coins.available, inputAmt: 0}

function setAmt(coin, total) {
  let amt = coin.checked ? total : 0
  return update(coin, {
    amt: {$set: amt}
  })
}

function checkCoin(coins, key) {
  return update(coins, {
    [key]:
      {checked:
        {$apply: function(bool) {return !bool}}
      }
  })
}

function setAmts(state) {
  return update(state, {
    coins: {$set: _.mapValues(state.coins, (c) => {
      return setAmt(c, findPerCoinAmt(state))
    })}
  })
}

function findPerCoinAmt(state) {
  let count = _.filter(state.coins, (c) => { return c.checked }).length
  return state.inputAmt / count
}


const order = (state = initalState, action) => {
  switch (action.type) {
  	case 'TOGGLE_COIN':
      let toggledState = update(state, {
        coins: {$set: checkCoin(state.coins, action.coin)}
      })
      return setAmts(toggledState)
    case 'UPDATE_TOTAL':
      return setAmts(update(state, {
        inputAmt: {$set: action.total }
      }))
  	default:
  	  return state
  }
}

export default order


