import paymentRequest from './paymentRequest'

describe('paymentRequest', () => {
  var addresses = ['mwkXG8NnB2snbqWTcpNiK6qqGHm1LebHDc', 'mwkXG8NnB2snbqWTcpNiK6qqGHm1LebHDc']
  var amt = 100000
  describe('.outputs()', () => {
  	it('given addresses and an amt, it should return an output for each', () => {
  	  var outputs = paymentRequest.outputs(addresses, amt)
  	  expect(outputs.length).toBe(2)
  	})
  })
  describe('.generate()', () => {
    var outputs = paymentRequest.outputs(addresses, amt)
  	it('given outputs, it should return an a BIP70 payment request', () => {
  	 let request = paymentRequest.generate(outputs)
     expect(request instanceof Buffer).toBe(true)
  	})
  })
})