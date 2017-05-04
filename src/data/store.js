import { createStore } from 'redux'
import appReducers from '../reducers/index'
import { devToolsEnhancer } from 'redux-devtools-extension'

let store = createStore(
  appReducers,
  devToolsEnhancer()
)

export default store