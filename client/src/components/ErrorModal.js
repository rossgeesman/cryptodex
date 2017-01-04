import React from 'react'
import ModalWrapper from './ModalWrapper'

const ErrorModal = props => {
  return (  
    <ModalWrapper
      title='This is an error'
      width={400}
      showOk={false}
      hideModal={props.hideModal}
  
    >

    </ModalWrapper>  
  )
  

}


export default ErrorModal