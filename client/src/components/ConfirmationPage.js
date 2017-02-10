import React, { PropTypes } from 'react'
import { Table, Button } from 'reactstrap'
import LineItem from './LineItem'
var _ = require('lodash')



class ConfirmationPage extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.orderState === 'initiated') {
      
    }
  }

  handleClick(e) {
    e.preventDefault
    this.props.initiateOrder()
  }

  render() {
    return (
      <div>
        <Table responsive size='sm'>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Output Address</th>
              <th>Deposit Address</th>
            </tr>
          </thead>
          <tbody>
            {
              _.values(this.props.coins).map((coin) => {
                if (coin.checked === true) {
                  return <LineItem key={coin.symbol} fetchPrice={this.props.fetchPrice} coin={coin}/>
                }
              })
            }
          </tbody>
        </Table>

        <Button color="primary" onClick={ (e) => {this.handleClick(e)} }>Initiate Order</Button>
      </div>
    )
  }
}

ConfirmationPage.propTypes = {
  coins: PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string,
    amt: PropTypes.number
  }).isRequired,
  value: PropTypes.string.isRequired,
  fetchPrice: PropTypes.func.isRequired,
  initiateOrder: PropTypes.func.isRequired
}

export default ConfirmationPage