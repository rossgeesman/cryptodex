import React from 'react'
import ErrorModal from './ErrorModal'
import * as actions from '../data/actions'
import {connect} from 'react-redux'

const ModalContainer = props => {
  console.log(props)
  switch (props.currentModal) {
  	case 'error':
  	  return <ErrorModal {...props}/>
  	case 'none':
  	  return null
  	default:
  	  return null

  }
}

ModalContainer.propTypes = {
  currentModal: React.PropTypes.string.isRequired,
  hideModal: React.PropTypes.func
}

export default connect(state => state, () => actions)(ModalContainer)