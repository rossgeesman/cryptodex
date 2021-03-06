import { connect } from 'react-redux'
import * as actions from '../actions/index.js'
import React from 'react';
import { Modal, ModalHeader, ModalBody, Input, ListGroup, ListGroupItem, Button } from 'reactstrap'
import '../Modal.css'

var addressStyle = {
  marginTop: '15px',
  minHeight: '275px',
  backgroundColor: 'white'
}
const AddressesModal = ({addresses, toggleModal, isOpen, acknowledgeAddr}) => {
  
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader toggle={acknowledgeAddr}>Order Addresses</ModalHeader>
        <ModalBody>
            <ListGroup>
              <ListGroupItem color="danger">
                ATTENTION: Copy these keys before proceeding with the transaction and save them in a safe place. Failing to secure the keys may result in the loss of all funds from this transaction.
              </ListGroupItem>
            </ListGroup>
            <Input style={addressStyle} type="textarea" readOnly={true} value={JSON.stringify(addresses, null, 2)}/>
            <Button onClick={acknowledgeAddr}>Finish</Button>
        </ModalBody>
      </Modal>
    </div>
  )
}

const ModalContainer = (props) => {
  switch (props.visibleModal) {
    case 'addressesModal':
      return <AddressesModal isOpen={true} toggleModal={props.toggleModal} addresses={props.modalData} acknowledgeAddr={props.acknowledgeAddr} />
    default:
      return null
  }
}


const mapStateToProps = (state) => ({
  visibleModal: state.order.visibleModal,
  modalData: state.order.modalData
})

const mapDispatchToProps = ({
  toggleModal: actions.toggleModal,
  acknowledgeAddr: actions.acknowledgeAddr
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer)