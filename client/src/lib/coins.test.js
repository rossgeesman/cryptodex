import Coins from './coins'

describe('Coins', () => {
  
  it('has a symbol', () => {
    expect(Coins.all['BTC']).toBeDefined()
  })
  
  it('indicates a subjset of coins that are available', () => {
    let available = Coins.available
    let all = Coins.all
    expect(Object.keys(all).length).toBeGreaterThan(Object.keys(available).length)
  })
  
})
