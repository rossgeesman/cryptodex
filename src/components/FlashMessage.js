import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'

const FlashMessage = ({errors, dismissFlash}) => {
  if (errors.length > 0) {
  	return (
  	   <div>
  	     {  errors.map((error, index) => { 
  	  	      return <Alert color="warning" key={index} toggle={(e) => { dismissFlash(index)} }>
                       {error}
                     </Alert>
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