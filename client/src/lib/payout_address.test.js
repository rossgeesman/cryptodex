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

    describe('XRP', () => {
      let address = payoutAddress.generate('XRP')
      it('shoud return a secret', () => {
        expect(address.secret).not.toBe('undefined')
        
      })
      it('shoud return an address', () => {
        expect(address.address).not.toBe('undefined')
      })
    })
  })

})