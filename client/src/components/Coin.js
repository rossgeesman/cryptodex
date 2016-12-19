import React from 'react'

class Coin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isChecked: false}
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(event) {
    this.setState({isChecked: ! this.state.isChecked })
    this.props.handleCoinChange(this.props.symbol)
  }

  render() {
  	
  	return (
      <div className={this.props.symbol}>
        <label>
          {this.props.amt} - {this.props.label}
          <input
            type='checkbox'
            value={this.props.label}
            onChange={this.handleChange}
          />
        </label>
      </div>
  	)
  }
}

export default Coin