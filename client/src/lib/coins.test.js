import Coins from './coins'

it('has 37 coins symbols', () => {
  expect(Coins.symbols.length).toEqual(37)
})

it('has Bitcoin', () => {
  expect(Coins.symbols).toContain("BTC")
})