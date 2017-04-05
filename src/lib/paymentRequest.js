/*global TrezorConnect*/
var PaymentProtocol = require('bitcore-payment-protocol')
var bitcore = require('bitcore-lib')

function createOutputs(transactions, amount) {
  return transactions.map((tx) => {
    return new PaymentProtocol.Output({
      script: bitcore.Address.fromString(tx).toBuffer(),
      amount: amount
  	})
  })
}

function createTrezorOutputs(addresses, amount) {
  return addresses.map((address) => ({
    address: address,
    amount: amount
  }))
}

function generateTrezorRequest(outputs) {
  TrezorConnect.composeAndSignTx(outputs, (result) => {
    if (result.success) {
      TrezorConnect.pushTransaction(result.serialized_tx, (pushResult) => {
        if (pushResult.success) {
          console.log('Transaction pushed. Id:', pushResult.txid)
        } else {
          console.error('Error:', pushResult.error)
        }
      })
    } else {
    console.error('Error:', result.error)
    }
  })
}

function generateRequest(outputs) {
  var details = new PaymentProtocol().makePaymentDetails()
  details.set('network', 'test')
  details.set('outputs', outputs)
  details.set('time', Date.now() / 1000 | 0)
  details.set('expires', Date.now() + 60 * 15)
  details.set('memo', 'Payment for blockchain assets from AllTheCoins')
  details.set('payment_url', 'http://blog.prettymuchallofthetime.com/cryptodex/')
  var request = new PaymentProtocol().makePaymentRequest()
  request.set('payment_details_version', 1)
  request.set('serialized_payment_details', details.serialize())
  var rawbody = request.serialize()
  return rawbody
}

const paymentRequest = {
  outputs: createOutputs,
  trezorOutputs: createTrezorOutputs,
  generate: generateRequest,
  generateTrezorRequest: generateTrezorRequest
}

export default paymentRequest