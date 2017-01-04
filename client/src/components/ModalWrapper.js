import React from 'react'
const {PropTypes} = React


const ModalWrapper = (props) => {
  
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      props.hideModal()
    }
  }

  const onOk = () => {
  	props.onOk()
  	props.hideModal()
  }

  const okButton = props.showOk
    ? ( 
    	<button
          onClick={onOk}
          disabled={props.okDisabled}
        >
          {props.okText}
        </button>
      ) : null

  return (
  	<div onClick={handleBackgroundClick}>
  	  <header>
  	    <h1>{props.title}</h1>
  	    <button onClick={props.hideModal}>Close</button>
  	  </header>
  	  {props.children}
  	  {okButton}
  	</div>
  )

}

ModalWrapper.propTypes = {
  title: PropTypes.string,
  showOk: PropTypes.bool,
  okText: PropTypes.string,
  okDisabled: PropTypes.bool,
  width: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,

  hideModal: PropTypes.func,
  onOk: PropTypes.func,
}

ModalWrapper.defaultProps = {
  title: '',
  showOk: true,
  okText: 'OK',
  okDisabled: false,
  width: 400,
  onOk: () => {}
}

export default ModalWrapper