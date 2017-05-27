

function price(sym) {
  return new Promise((resolve, reject) => {
    let response = {"pair": "btc_" + sym.toLowerCase(), "rate": 130.12345678, "limit": 1.2345, "min": 0.02621232, "minerFee": 0.0001}
    process.nextTick(() => {
      resolve(response)
    })
  })
}

const Transaction = {
  price: jest.fn((sym) => (price(sym)))
}

export default Transaction