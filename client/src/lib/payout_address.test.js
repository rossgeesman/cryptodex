import payoutAddress from './payout_address'

describe('payoutAddress', () => {

  describe('.generate()', () => {
  	
  	const address = payoutAddress.generate('ETH')
    it('should return address info as string', () => {
      expect(typeof address.address).toBe('string')
    })
    it('should return publicKey string', () => {
      expect(typeof address.publicKey).toBe('string')
    })
    it('should return privateKey string', () => {
      expect(typeof address.privateKey).toBe('string')
    })
  })

})