import React from 'react'
import { Input, FormGroup, InputGroupAddon, InputGroup } from 'reactstrap'
import Styles from '../styles'

var inputCoinGroupStyle = {
  display: 'inline-block',
  width: '300px'
}

var inputFieldStyle = {
  borderRadius: Styles.shapes.borderRadius
}

const InputCoin = ({updateInputAmt, value}) => (
  <div>
    <FormGroup style={inputCoinGroupStyle}>
      <legend>Order Details</legend>
      <InputGroup>
        <InputGroupAddon style={inputFieldStyle}>BTC</InputGroupAddon>
        <Input
          style={inputFieldStyle}
          type='number'
          step='0.01'
          min='0'
          className={'order-amt'}
          value={value}
          onChange={(e) => {updateInputAmt(e.target.value)}}
          placeholder="Deposit Amount"
        />
      </InputGroup>
    </FormGroup>
  </div>
)

InputCoin.propTypes = {
  updateInputAmt: React.PropTypes.func,
  value: React.PropTypes.string
}

export default InputCoin