import React, { PropTypes } from 'react'
import InputCoin from './InputCoin'
import Coin from './Coin'
import { Form, Button } from 'reactstrap'
import { browserHistory } from 'react-router'
var _ = require('lodash')


class OrderForm extends React.Component {

  constructor(props) {

    super(props)
    this.validate = this.validate.bind(this)
  }

  validate = (e) => {
    e.preventDefault()
    this.props.onOrderSubmit()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.orderState === 'requested')
      browserHistory.push('confirmation')
  }

  render() {
    return (

      <Form onSubmit={(e) => { this.validate(e) }}>
        {
          _.values(this.props.coins).map((coin) => {
            return <Coin
              key={coin.symbol}
              coin={coin}
              handleCoinChange={this.props.onToggleCoin}
            />
          })
        }
        <InputCoin updateInputAmt={this.props.onUpdateAmt} value={this.props.value}/>
        <Button>Submit</Button>
      </Form>
    )
  }
}

OrderForm.propTypes = {
  coins: PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string,
    amt: PropTypes.string
  }).isRequired,
  onToggleCoin: PropTypes.func,
  onOrderSubmit: PropTypes.func
}

export default OrderForm