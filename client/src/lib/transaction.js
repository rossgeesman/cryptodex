const EXCHANGE_URL = "https://shapeshift.io"
const TRANSACTION_TYPE = {open: "/shift/"}


function open(outputAddr, coin) {
  let data = {withdrawal: outputAddr, pair: makePair(coin)}
  return fetch(EXCHANGE_URL + TRANSACTION_TYPE.open, {
    method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
  	  if (!response.ok) { throw Error(response.statusText)}
  	  return response.json()
  	})
  	.then((transaction) => {
  	  console.log(transaction)
  	}).catch((error) => {
  	  console.log(error)
  	})
}

function makePair(symbol) {
  return 'btc_' + symbol.toLowerCase()
}


const Transaction = {
  open: open
}

export default Transaction