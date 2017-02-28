const EXCHANGE_URL = "https://shapeshift.io"
const POST = 'POST'
const GET = 'GET'

const REQUEST_TYPE = {
  open: {
    path: () => { return "/shift/" },
    method: POST
  },
  fixed: {
    path: () => { return "/sendamount/" },
    method: POST
  },
  getAvailable: {
    path: () => ('/getcoins/'),
    method: GET
  }, 
  getPrice: {
    path: () => {return "/marketinfo/" + REQUEST_TYPE.getPrice.pair }, 
    method: GET,
    pair: null 
  }
}


function open(outputAddr, coin) {
  let params = {withdrawal: outputAddr, pair: makePair(coin)}
  return makeRequest(REQUEST_TYPE.open, params)
}

function getEstimate(coin, amt) {
  let params = {pair: makePair(coin), amount: amt}
  return makeRequest(REQUEST_TYPE.fixed, params)
}

function openFixed(outputAddr, coin, amt) {
  let params = {withdrawal: outputAddr, pair: makePair(coin), amount: amt}
  return makeRequest(REQUEST_TYPE.fixed, params)
}

function getPrice(coin) {
  REQUEST_TYPE.getPrice.pair = makePair(coin)
  return makeRequest(REQUEST_TYPE.getPrice)
}

function getAvailable() {
  return makeRequest(REQUEST_TYPE.getAvailable)
}

function makePair(symbol) {
  return 'btc_' + symbol.toLowerCase()
}

function makeRequest(type, params) {
  return fetch(EXCHANGE_URL + type.path(), {
    method: type.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: params ? JSON.stringify(params) : null
  })
  .then((response) => {
      if (!response.ok) { throw Error(response.statusText)}
      return response.json()
  })
  .then((response) => {
    return response
  }).catch((error) => {
    return error
  })
}


const Transaction = {
  open: open,
  openFixed: openFixed,
  getAvailable: getAvailable,
  getEstimate: getEstimate,
  price: getPrice
}

export default Transaction