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