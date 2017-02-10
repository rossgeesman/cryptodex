import Wallet from "ethereumjs-wallet"
const ripple = window.ripple

function setRipple() {
  if (process.env.NODE_ENV === 'test') {
    const {RippleAPI} = require('ripple-lib')
    return RippleAPI
  
  } else {
    var ripple = window.ripple
    return ripple.RippleAPI
  }
}

const RippleAPI = setRipple()


function ethAddress() {
  const wallet = Wallet.generate()
  return { 
  	address: wallet.getAddressString(), 
  	publicKey: wallet.getPublicKeyString(), 
  	privateKey: wallet.getPrivateKeyString()
  }
}

function xrpAddress() {
  const api = new RippleAPI()
  return api.generateAddress()
}

function generate(symbol) {
  switch (symbol) {
  	case 'ETH':
  	  return ethAddress()
  	case 'XRP':
  	  return xrpAddress()
  	default:
  	  return null
  }
}

const payoutAddress = {
  generate: generate

}

export default payoutAddress