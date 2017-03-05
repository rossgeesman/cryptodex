var PaymentProtocol = require('bitcore-payment-protocol')
var bitcore = require('bitcore-lib')

var now = Date.now() / 1000 | 0

// construct the payment details
var details = new PaymentProtocol().makePaymentDetails()
var address = bitcore.Address.fromString('mwkXG8NnB2snbqWTcpNiK6qqGHm1LebHDc')
details.set('network', 'test')
var output = new PaymentProtocol.Output({script: address.toBuffer(), amount: 10000})
details.set('outputs', output)
details.set('time', now)
details.set('expires', now + 60 * 60 * 24)
details.set('memo', 'A payment request from the merchant.')
details.set('payment_url', 'https://localhost/-/pay')

var request = new PaymentProtocol().makePaymentRequest()
request.set('payment_details_version', 1)
request.set('serialized_payment_details', details.serialize())
var rawbody = request.serialize()