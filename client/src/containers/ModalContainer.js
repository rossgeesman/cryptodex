import { connect } from 'react-redux'
import * as actions from '../actions/index.js'
import React from 'react';
import { Modal, ModalHeader, ModalBody, Input, ListGroup, ListGroupItem } from 'reactstrap'
import '../Modal.css'

var addressStyle = {
  marginTop: '15px',
  minHeight: '275px',
  backgroundColor: 'white'
}
const AddressesModal = ({addresses, toggleModal, isOpen}) => {
  
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Order Addresses</ModalHeader>
        <ModalBody>
            <ListGroup>
              <ListGroupItem color="danger">
                ATTENTION: Copy these keys before proceeding with the transaction and save them in a safe place. Failing to secure the keys may result in the loss of all funds from this transaction.
              </ListGroupItem>
            </ListGroup>
            <Input style={addressStyle} type="textarea" readOnly={true} value={JSON.stringify(addresses, null, 2)}/>
        </ModalBody>
      </Modal>
    </div>
  )
}

const ModalContainer = (props) => {
  switch (props.visibleModal) {
    case 'addressesModal':
      return <AddressesModal isOpen={true} toggleModal={props.toggleModal} addresses={props.modalData} />
    default:
      return null
  }
}


const mapStateToProps = (state) => ({
  visibleModal: state.order.visibleModal,
  modalData: state.order.modalData
})

const mapDispatchToProps = ({
  toggleModal: actions.toggleModal
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer)