import Wallet from "ethereumjs-wallet"



function ethAddress() {
  const wallet = Wallet.generate()
  return { 
  	address: wallet.getAddressString(), 
  	publicKey: wallet.getPublicKeyString(), 
  	privateKey: wallet.getPrivateKeyString()
  }
}

function generate(symbol) {
  if (symbol === 'ETH')
  	return ethAddress()
}





const payoutAddress = {
  generate: generate

}

export default payoutAddress