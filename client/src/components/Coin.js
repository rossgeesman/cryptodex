import React, { PropTypes } from 'react'
import { FormGroup } from 'reactstrap'

const Coin = ({coin, handleCoinChange}) => (

  <FormGroup className={coin.symbol}>
    <label>
      {coin.amt} - {coin.name}
      
        <input
          type='checkbox'
          value={coin.name}
          onChange={handleCoinChange.bind(this, coin.symbol)}
        />
      
    </label>
  </FormGroup>
)

Coin.propTypes = {
  coin: PropTypes.object.isRequired,
  handleCoinChange: PropTypes.func.isRequired
}


export default Coin