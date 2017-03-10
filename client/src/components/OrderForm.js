import React, { PropTypes } from 'react'
import InputCoin from './InputCoin'
const ProgressBar = require('react-progressbar.js')
const Circle = ProgressBar.Circle
import { Form, Button, Row, Col, FormGroup, FormText } from 'reactstrap'
import Styles from '../styles'
var _ = require('lodash')

var containerStyle = {
  width: '250px',
  height: '250px',
  verticalAlign: 'middle',
  display: 'inline-block',

}

var formStyle = {
  margin: '20px'
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

var btnGroupStyle = {
  paddingTop: '15px',
  display: 'inline-block'
}

var purchaseBtnStyle = {
  width: '300px',
  textAlign: 'center',
  color: 'white',
  backgroundColor: Styles.colors.brandGreen,
  borderColor: Styles.colors.brandGreen,
  borderRadius: Styles.shapes.borderRadius,
  lineHeight: 1.42
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
      <Row>
        <Col xs="12">
          <Form style={formStyle} onSubmit={(e) => { this.validate(e) }} inline>
            <Col md="6">
              <Circle
                progress={this.props.orderProgress}
                text={(this.props.orderState === 'requesting') ? ( 'Purchase' ) : ( 'Requested' )}
                initialAnimate={true}
                containerStyle={containerStyle}
                options={options}
              />
            </Col>
            <Col md="6">
              <InputCoin id="inputCoin" updateInputAmt={this.props.onUpdateAmt} value={this.props.value}/>
              <FormGroup style={btnGroupStyle}>
                <Button style={purchaseBtnStyle}>Start Purchase</Button>
                <FormText style={{textAlign: 'left', width: '300px'}}color="muted">
                  Deposit will be split evenly across all of the supported coins.
                </FormText>
              </FormGroup>
            </Col>
          </Form>
        </Col>
      </Row>
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