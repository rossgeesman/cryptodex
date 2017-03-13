import React, { PropTypes } from 'react'
import InputCoin from './InputCoin'
const ProgressBar = require('react-progressbar.js')
const Circle = ProgressBar.Circle
import { Form, Button, Row, Col, FormText } from 'reactstrap'
import Styles from '../styles'
var _ = require('lodash')

var containerStyle = {
  paddingTop: '7px',
  minWidth: '220px',
  minHeight: '220px',
  verticalAlign: 'middle',
  display: 'inline-block',

}

var options = {
  strokeWidth: 6,
  trailWidth: 6,
  easing: 'easeInOut',
  text: { autoStyleContainer: false },
  from: { color: Styles.colors.brandBlue},
  to: { color: Styles.colors.brandGreen},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color)
  }
}

var purchaseBtnStyle = {
  width: '95%',
  paddingLeft: 'auto',
  paddingRight: 'auto',
  color: 'white',
  backgroundColor: Styles.colors.brandGreen,
  borderColor: Styles.colors.brandGreen,
  borderRadius: Styles.shapes.borderRadius
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
      <Col>
        <Row>
          <Col>
            <Circle
              progress={this.props.orderProgress}
              text={(this.props.orderState === 'requesting') ? ( 'Purchase' ) : ( 'Requested' )}
              initialAnimate={true}
              containerStyle={containerStyle}
              options={options}
            />
          </Col>
          <Col>
            <Form style={containerStyle} onSubmit={(e) => { this.validate(e) }}>
              <InputCoin id="inputCoin" updateInputAmt={this.props.onUpdateAmt} value={this.props.value}/>
              <Button style={purchaseBtnStyle}>Start Purchase</Button>
              <FormText style={{marginBottom: '7px', width: '95%', marginLeft: 'auto', marginRight: 'auto'}} color="muted">
                BTC deposit will be split evenly across all of the supported assets.
              </FormText>
            </Form>
          </Col>
        </Row>
      </Col>
    )
  }
}

OrderForm.propTypes = {
  onUpdateAmt: PropTypes.func,
  onOrderSubmit: PropTypes.func,
  onValidOrder: PropTypes.func,
  addEstimates: PropTypes.func.isRequired
}

export default OrderForm