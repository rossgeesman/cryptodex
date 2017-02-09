import React from 'react'
import { Input, FormGroup, Label } from 'reactstrap'

const InputCoin = ({updateInputAmt, value}) => (
  <div>
    <FormGroup>
      <Label>
        <Input
          type='number'
          step='0.01'
          min='0'
          className={'order-amt'}
          value={value}
          onChange={(e) => {updateInputAmt(e.target.value)}}
        />
      </Label>
    </FormGroup>
  </div>
)

InputCoin.propTypes = {
  updateInputAmt: React.PropTypes.func,
  value: React.PropTypes.string
}

export default InputCoin