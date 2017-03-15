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

export const addTransactions = (txs) => ({
  type: 'ADD_TXS',
  txs
})

export const updateAvailableCoins = (coins) => ({
  type: 'ADD_AVAILABLE',
  coins
})

export const addEstimates = (estimates) => ({
  type: 'ADD_ESTIMATES',
  estimates
})

export const startOrder = () => ({
  type: 'START_ORDER'
})

export const updateProgress = (amt) => ({
  type: 'UPDATE_PROGRESS',
  amt
})

export const togglePopover = () => ({
  type: 'TOGGLE_POPOVER'  
})

export const switchTab = (tab) => ({
  type: 'SWITCH_TAB',
  tab
})

export const toggleModal = (modal, modalData) => ({
  type: 'TOGGLE_MODAL',
  modal,
  modalData
})

export const acknowledgeAddr = () => ({
  type: 'ADDRESS_RCVD'
})