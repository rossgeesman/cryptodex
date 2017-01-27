import React, { PropTypes } from 'react'

const FlashMessage = (props) => {
  if (props.errors.length > 0) {
  	return (
  	   <div>
  	     {  props.errors.map((error, index) => { 
  	  	      return <p key={index} onClick={(e) => { props.dismissFlash(index)} }>
                       {error}
                     </p>
  	  	    })
  	     }
  	   </div>
  	)
  } else {
  	return null
  }
}

FlashMessage.PropTypes = {
  errors: PropTypes.array,
  dismissFlash: PropTypes.func.isRequired
}

export default FlashMessage