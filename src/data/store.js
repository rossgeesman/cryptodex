import { createStore } from 'redux'
import appReducers from '../reducers/index'

let store = createStore(appReducers)

export default store