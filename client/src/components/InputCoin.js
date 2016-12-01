import React from 'react'

class InputCoin extends React.Component {
  constructor(props) {
  	super(props)
  	this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
  	this.props.updateInputAmt(event.target.value)
  }

  render() {
  	return (
  	  <div>	
  	    <label>
          <input
            type="number"
            onChange={this.handleChange}
          />
        </label>
      </div>
  	)
  }
}

InputCoin.propTypes = {
  value: React.PropTypes.number
}

export default InputCoin