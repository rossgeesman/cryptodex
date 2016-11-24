import Coins from './coins'

describe('Coins', () => {
  for (let coin of Coins) {
    it('has a name', () => {
      expect(coin.name).not.toBeUndefined()
      expect(typeof coin.name).toBe('string')
    })  
    it('has a symbol', () => {
      expect(coin.symbol).not.toBeUndefined()
      expect(typeof coin.symbol).toBe('string')
    })
    it('has an availability', () => {
      expect(coin.available).not.toBeUndefined()
      expect(typeof coin.available).toBe('boolean')
    })
  }
})
