import Coins from './coins'
import Transaction from './transaction'
jest.mock('./transaction')

describe('Coins', () => {
  it('has a symbol', () => {
    expect(Coins.all['BTC']).toBeDefined()
  })
  
  it('indicates a subjset of coins that are available', () => {
    let available = Coins.available()
    let all = Coins.all
    expect(Object.keys(all).length).toBeGreaterThan(Object.keys(available).length)
  })

  describe('.currentlyAvailable', () => {
    it('it checks availability for each coin with the Transactions module', () => {
      let available = Coins.available()
      Coins.currentlyAvailable()
      expect(Transaction.price.mock.calls.length).toEqual(Object.keys(available).length)
    })

    it('should not return responses with errors', () => {
      Transaction.price.mockReturnValue({error: 'This pair not available'})
      expect(Coins.currentlyAvailable()).resolves.toEqual([])
    })

    it('should return responses that have a rate', () => {
      let response = {"pair": "btc_eth", "rate": 130.12345678, "limit": 1.2345, "min": 0.02621232, "minerFee": 0.0001}
      Transaction.price.mockReturnValue(response)
      Coins.currentlyAvailable()
      .then((available) => {
        expect(available).toContain(response)
      })
    })
  })
  
})
