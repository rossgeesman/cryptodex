import React, { PropTypes } from 'react'
import InputCoin from './InputCoin'
import ContentsPopover from './ContentsPopover'
const ProgressBar = require('react-progressbar.js')
const Circle = ProgressBar.Circle
import { Form, Button, Row, Col, FormGroup } from 'reactstrap'
var _ = require('lodash')

var containerStyle = {
  width: '237px',
  height: '237px',
  verticalAlign: 'middle',
  display: 'inline-block',

}

var options = {
  strokeWidth: 4,
  trailWidth: 0,
  easing: 'easeInOut',
  text: { autoStyleContainer: false },
  from: { color: '#aaa'},
  to: { color: '#3ab764'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color)
  }
}

var btnGroupStyle = {
  display: 'inline-block'
}

var btnCircleStyle = {
  width: '250px',
  height: '250px',
  textAlign: 'center',
  padding: 0,
  fontSize: '22px',
  borderWidth: 7,
  backgroundColor: '#f3f3f3',
  lineHeight: 1.42,
  borderRadius: '50%'
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
          <Form onSubmit={(e) => { this.validate(e) }} inline>
            <Col md="4">
              <InputCoin id="inputCoin" updateInputAmt={this.props.onUpdateAmt} value={this.props.value}/>
            </Col>
            <Col md="4">
              <FormGroup style={btnGroupStyle}>
                <Button style={btnCircleStyle}>
                  <Circle
                    progress={this.props.orderProgress}
                    text={(this.props.orderState === 'requesting') ? ( 'Purchase' ) : ( 'Requested' )}
                    initialAnimate={true}
                    containerStyle={containerStyle}
                    options={options}
                  />
                </Button>
              </FormGroup>
            </Col>
            <Col md="4">
              <ContentsPopover 
                togglePopover={this.props.togglePopover} 
                popoverIsOpen={this.props.popoverIsOpen} 
                estimates={this.props.estimates}
                coins={this.props.coins}
              />
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