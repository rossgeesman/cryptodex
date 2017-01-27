import update from 'immutability-helper'

const flashReducer = (state = [], action) => {
  if (action.type === 'DISMISS_FLASH') {
  	let updated = state.splice(action.index, 1)
  	return update(state, {
  	  errors: {$set: updated}
  	})
  } else {
  	return state
  }
}

export default flashReducer