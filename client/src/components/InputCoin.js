import React from 'react'

const InputCoin = ({updateInputAmt, value}) => (
  <div>
    <label>
      <input
        type="number"
        className={'order-amt'}
        value={value}
        onChange={(e) => {updateInputAmt(Number(e.target.value))}}
      />
    </label>
  </div>
)

InputCoin.propTypes = {
  updateInputAmt: React.PropTypes.func,
  value: React.PropTypes.number
}

export default InputCoin