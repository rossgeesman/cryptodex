import React from 'react'
import { Input, FormGroup, InputGroupAddon, InputGroup } from 'reactstrap'
import Styles from '../styles'

var inputCoinGroupStyle = {
  width: '95%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

var inputFieldStyle = {
  borderRadius: Styles.shapes.borderRadius
}

const InputCoin = ({updateInputAmt, value}) => (
  <div>
    <FormGroup style={{paddingBottom: '2%', marginBottom: '0px'}} >
      <legend>Order Details</legend>
      <InputGroup style={inputCoinGroupStyle}>
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