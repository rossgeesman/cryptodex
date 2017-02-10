export const toggleCoin = (coin) => ({
  type: 'TOGGLE_COIN',
  coin
})

export const updateTotal = (total) => ({
  type: 'UPDATE_TOTAL',
  total
})

export const validateOrder = () => ({
  type: 'VALIDATE_ORDER'
})

export const dismissFlash = (index) => ({
  type: 'DISMISS_FLASH',
  index
})

export const fetchPrice = (price, symbol) => ({
  type: 'ADD_PRICE',
  price,
  symbol
})

export const initiateOrder = () => ({
  type: 'INITIATE_ORDER'
})