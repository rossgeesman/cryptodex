import Transaction from './transaction'

const mockResponse = {someData: 123}
fetch = jest.fn((url, options) => new Promise((resolve, reject) => {
    resolve( { status: 201, json: () => (mockResponse) })
}))

describe('Transaction', () => {
  describe('.open()', () => {
  	it("should format a pair correctly", () => {
  	  Transaction.open("XckAhAvGeWXtEfR8wFwxnK391jqPQeHR33", 'DASH')
  	  let parsed = JSON.parse(fetch.mock.calls[0][1].body)
  	  expect(parsed.pair).toBe('btc_dash')
  	})
  })
})
