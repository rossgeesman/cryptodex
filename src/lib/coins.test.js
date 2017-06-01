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
    it('it should call Transaction.price', () => {
      let available = Coins.available()
      Coins.currentlyAvailable()
      expect(Transaction.price.mock.calls.length).toEqual(Object.keys(available).length)
    })

    it('should return pricing info for each coin', () => {
      let expected = {name: 'Blackcoin', available: true, amt: 0, checked: true, symbol: 'BLK', "limit": 1.2345, "min": 0.02621232, "minerFee": 0.0001, "pair": "btc_blk", "rate": 130.12345678}
      return Coins.currentlyAvailable()
      .then((result) => {
        expect(result['BLK']).toEqual(expected)
      })
    })

    it('should not return responses with errors', () => {
      Transaction.price.mockImplementation(() => ( Promise.resolve({error: 'generic error message'})))
      return Coins.currentlyAvailable()
      .then((result) => {
        expect(result['BLK'].available).toEqual(false)
      })
    })

  })
  
})
