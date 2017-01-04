import { combineReducers } from 'redux'

const initialModal = 'none'

function currentModal(state = initialModal, action) {
  switch (action.type) {
  	case 'SHOW_MODAL':
  	  return action.modal
    case 'HIDE_MODAL':
      return initialModal
  	default:
  	  return state
  }
  
}


//export default function appReducers(state = {}, action) {
//  return {
//  	currentModal: currentModal(state.currentModal, action)
//  }
//}

const appReducers = combineReducers({
  currentModal
})

export default appReducers