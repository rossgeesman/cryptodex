var _ = require('lodash')
const coinList = {
  BTC: { name: "Bitcoin", available: true, amt: 0 },
  BCY: { name: "Bitcrystals", available: false, amt: 0},
  BLK: { name: "Blackcoin", available: false, amt: 0 },
  BTS: { name: "BitShares", available: false, amt: 0 },
  CLAM: { name: "Clams", available: false, amt: 0 },
  DASH: { name: "Dash", available: true, amt: 0 },
  DGB: { name: "Digibyte", available: true, amt: 0 },
  DGD: { name: "DigixDao", available: true, amt: 0 },
  DOGE: { name: "Dogecoin", available: true, amt: 0 },
  EMC: { name: "Emercoin", available: false, amt: 0 },
  ETH: { name: "Ether", available: true, amt: 0 },
  ETC: { name: "Ether Classic", available: false, amt: 0 },
  FCT: { name: "Factoids", available: false, amt: 0 },
  LBC: { name: "LBRY Credits", available: false, amt: 0 },
  LSK: { name: "Lisk", available: false, amt: 0 },
  LTC: { name: "Litecoin", available: false, amt: 0 },
  MAID: { name: "Maidsafe", available: false, amt: 0 },
  MSC: { name: "Mastercoin", available: false, amt: 0 },
  MONA: { name: "Monacoin", available: false, amt: 0 },
  NMC: { name: "Namecoin", available: false, amt: 0 },
  NVC: { name: "Novacoin", available: false, amt: 0 },
  NBT: { name: "Nubits", available: false, amt: 0 },
  NXT: { name: "Nxt", available: false, amt: 0 },
  PPC: { name: "Peercoin", available: false, amt: 0 },
  RDD: { name: "Reddcoin", available: false, amt: 0 },
  REP: { name: "Augur", available: false, amt: 0 },
  SDC: { name: "Shadowcash", available: false, amt: 0 },
  SC: { ame: "Siacoin", available: false, amt: 0 },
  SJCX: { name: "StorjcoinX", available: false, amt: 0 },
  SNGL: { name: "SingularDTV", available: false, amt: 0 },
  STAR: { name: "Startcoin", available: false, amt: 0 },
  STEE: { name: "Steem", available: false, amt: 0 },
  USDT: { name: "TetherUSD", available: false, amt: 0 },
  VRC: { name: "Vericoin", available: false, amt: 0 },
  VTC: { name: "Vertcoin", available: false, amt: 0 },
  VOX: { name: "Voxels", available: false, amt: 0 },
  XCP: { name: "Counterparty", available: false, amt: 0 },
  XMR: { name: "Monero", available: false, amt: 0 },
  XRP: { name: "Ripple", available: false, amt: 0 },
  ZEC: { name: "Zcash", available: false, amt: 0 }
}



const Coins = {
  available: _.pickBy(coinList, function(value) {
    if (value.available === true)
      return value
  }),
  all: coinList 
}


export default Coins

