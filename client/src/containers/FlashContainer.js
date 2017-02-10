import { connect } from 'react-redux'
import * as actions from '../actions/index.js'
import FlashMessage from '../components/FlashMessage'

const errors = (appState) => {
  return appState.order.errors
}

const mapStateToProps = (state) => ({
  errors: errors(state)
})

const mapDispatchToProps = ({
  dismissFlash: actions.dismissFlash
})

const FlashContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashMessage)

export default FlashContainer