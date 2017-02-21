import React, { PropTypes } from 'react'
import InputCoin from './InputCoin'
const ProgressBar = require('react-progressbar.js')
const Circle = ProgressBar.Circle
import { Form, Button } from 'reactstrap'
import '../Order.css'
var _ = require('lodash')

var containerStyle = {
    width: '300px',
    height: '300px'
}
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
    if (newProps.orderState === 'requested' && this.props.orderState === 'requesting') {
      this.props.onValidOrder()
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={(e) => { this.validate(e) }}>
          <InputCoin updateInputAmt={this.props.onUpdateAmt} value={this.props.value}/>
          <Button className="btnCircle" disabled={this.props.orderState === 'requesting' ? false : true}>
            <Circle
              progress={this.props.orderProgress}
              text={(this.props.orderState === 'requesting') ? ( 'Buy Coins' ) : ( 'Requested' )}
              initialAnimate={true}
              containerStyle={containerStyle}
              containerClassName={''} 
            />
          </Button>
        </Form>
      </div>
    )
  }
}

OrderForm.propTypes = {
  onUpdateAmt: PropTypes.func,
  onOrderSubmit: PropTypes.func,
  onValidOrder: PropTypes.func
}

export default OrderForm