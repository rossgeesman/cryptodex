import React from 'react'
import { Input, FormGroup, InputGroupAddon, InputGroup } from 'reactstrap'

var inputCoinGroupStyle = {
  display: 'inline-block',
  minWidth: '200px'
}

const InputCoin = ({updateInputAmt, value}) => (
  <div>
    <FormGroup style={inputCoinGroupStyle}>
      <InputGroup>
        <InputGroupAddon>BTC</InputGroupAddon>
        <Input
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