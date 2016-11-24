import React from 'react'

class Coin extends React.Component {
  render() {
  	
  	return (
  	  <tr>
  	    <td>{this.props.coin.name}</td>
  	    <td>{this.props.coin.symbol}</td>
  	  </tr>
  	)
  }
}

export default Coin