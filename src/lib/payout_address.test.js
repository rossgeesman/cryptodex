import payoutAddress from './payout_address'

describe('payoutAddress', () => {
  describe('.generate()', () => {
  	describe('ETH', () => {
      
    	let address = payoutAddress.generate('ETH')
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

    describe('BLK', () => {
      let blkAddress = payoutAddress.generate('BLK')
      it('should return address info as string', () => {
        expect(typeof blkAddress.address).toBe('string')
      })
      it('should return publicKey string', () => {
        expect(typeof blkAddress.publicKey).toBe('string')
      })
      it('should return privateKey string', () => {
        expect(typeof blkAddress.privateKey).toBe('number')
      })
    })
  })

})