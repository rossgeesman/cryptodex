import React, { PropTypes } from 'react'

const Coin = ({coin, handleCoinChange}) => (

  <div className={coin.symbol}>
    <label>
      {coin.amt} - {coin.name}
      <input
        type='checkbox'
        value={coin.name}
        onChange={handleCoinChange.bind(this, coin.symbol)}
      />
    </label>
  </div>
)

Coin.propTypes = {
  coin: PropTypes.object.isRequired,
  handleCoinChange: PropTypes.func.isRequired
}


export default Coin