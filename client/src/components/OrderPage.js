import React from 'react'
import Coin from './Coin'



class OrderPage extends React.Component {
  render() {
  	var coins = this.props.route.coins.map((coin) => {
  	  return <Coin key={coin.symbol}coin={coin}/>
  	})
  	console.log(coins) 
  	return (
  	  <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>{coins}</tbody>
      </table>

  	)
  }
}

export default OrderPage