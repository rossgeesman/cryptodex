import React from 'react'
import PropTypes from 'prop-types'
import InputCoin from './InputCoin'
import { Form, Button, Row, Col, FormText } from 'reactstrap'
import Styles from '../styles'

const ProgressBar = require('react-progressbar.js')
const Circle = ProgressBar.Circle

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
            <Col md='6' xs='12'>
              <Circle
                progress={this.props.orderProgress}
                text={(this.props.orderState === 'requesting') ? ( 'Purchase' ) : ( 'Requested' )}
                initialAnimate={true}
                containerStyle={containerStyle}
                options={options}
              />
            </Col>
            <Col md='6' xs='12'>
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