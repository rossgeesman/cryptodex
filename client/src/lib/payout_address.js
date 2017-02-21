import Wallet from "ethereumjs-wallet"
import CoinKey from 'coinkey'
import ci from 'coininfo'

function setRipple() {
  if (process.env.NODE_ENV === 'test') {
    const { RippleAPI } = require('ripple-lib')
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
  let addr = api.generateAddress()
  return {
    privateKey: addr.secret,
    address: addr.address
  }
}

function coinkeyAddress(symbol) {
  let addr = CoinKey.createRandom(ci(symbol))
  return {
    privateKey: addr.privateKey.toString('hex'),
    publicKey: addr.publicKey.toString('hex'), 
    address: addr.publicAddress
  }
}

const supportedCoins = {
  'BLK': coinkeyAddress,
  'DASH': coinkeyAddress,
  'DOGE': coinkeyAddress,
  'LTC': coinkeyAddress,
  'NBT': coinkeyAddress,
  'NMC': coinkeyAddress,
  'PPC': coinkeyAddress,
  'RDD': coinkeyAddress,
  'ETH': ethAddress(),
  'XRP': xrpAddress()
}

function generate(symbol) {
  if (symbol in  supportedCoins) {
    let func = supportedCoins[symbol]
    if (func === coinkeyAddress) {
      return func(symbol)
    } else {
      return func
    }
  }
}

const payoutAddress = {
  generate: generate

}

export default payoutAddress