import Transaction from './transaction'
var _ = require('lodash')


const coinList = {
  "BTC":{
    "name":"Bitcoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"BTC"
  },
  "BCY":{
    "name":"Bitcrystals",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"BCY"
  },
  "BLK":{
    "name":"Blackcoin",
    "available":true,
    "amt":0,
    "checked":true,
    "symbol":"BLK"
  },
  "BTS":{
    "name":"BitShares",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"BTS"
  },
  "CLAM":{
    "name":"Clams",
    "available":false,
    "amt":0,
    checked:true,
    "symbol":"CLAM"
  },
  "DASH":{
    "name":"Dash",
    "available":true,
    "amt":0,
    "checked":true,
    "symbol":"DASH"
  },
  "DGB":{
    "name":"Digibyte",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"DGB"
  },
  "DGD":{
    "name":"DigixDao",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"DGD"
  },
  "DOGE":{
    "name":"Dogecoin",
    "available":true,
    "amt":0,
    "checked":true,
    "symbol":"DOGE"
  },
  "EMC":{
    "name":"Emercoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"EMC"
  },
  "ETH":{
    "name":"Ether",
    "available":true,
    "amt":0,
    "checked":true,
    "symbol":"ETH"
  },
  "ETC":{
    "name":"Ether Classic",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"ETC"
  },
  "FCT":{
    "name":"Factoids",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"FCT"
  },
  "LBC":{
    "name":"LBRY Credits",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"LBC"
  },
  "LSK":{
    "name":"Lisk",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"LSK"
  },
  "LTC":{
    "name":"Litecoin",
    "available":true,
    "amt":0,
    "checked":true,
    "symbol":"LTC"
  },
  "MAID":{
    "name":"Maidsafe",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"MAID"
  },
  "MSC":{
    "name":"Mastercoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"MSC"
  },
  "MONA":{
    "name":"Monacoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"MONA"
  },
  "NMC":{
    "name":"Namecoin",
    "available":true,
    "amt":0,
    "checked":true,
    "symbol":"NMC"
  },
  "NVC":{
    "name":"Novacoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"NVC"
  },
  "NBT":{
    "name":"Nubits",
    "available":true,
    "amt":0,
    "checked":true,
    "symbol":"NBT"
  },
  "NXT":{
    "name":"Nxt",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"NXT"
  },
  "PPC":{
    "name":"Peercoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"PPC"
  },
  "RDD":{
    "name":"Reddcoin",
    "available":true,
    "amt":0,
    "checked":true,
    "symbol":"RDD"
  },
  "REP":{
    "name":"Augur",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"REP"
  },
  "SDC":{
    "name":"Shadowcash",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"SDC"
  },
  "SC":{
    "ame":"Siacoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"SC"
  },
  "SJCX":{
    "name":"StorjcoinX",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"SJCX"
  },
  "SNGL":{
    "name":"SingularDTV",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"SNGL"
  },
  "STAR":{
    "name":"Startcoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"STAR"
  },
  "STEE":{
    "name":"Steem",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"STEE"
  },
  "USDT":{
    "name":"TetherUSD",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"USDT"
  },
  "VRC":{
    "name":"Vericoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"VRC"
  },
  "VTC":{
    "name":"Vertcoin",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"VTC"
  },
  "VOX":{
    "name":"Voxels",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"VOX"
  },
  "XCP":{
    "name":"Counterparty",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"XCP"
  },
  "XMR":{
    "name":"Monero",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"XMR"
  },
  "XRP":{
    "name":"Ripple",
    "available":true,
    "amt":0,
    "checked":true,
    "symbol":"XRP"
  },
  "ZEC":{
    "name":"Zcash",
    "available":false,
    "amt":0,
    "checked":true,
    "symbol":"ZEC"
  }
}

function pairToSym(pair) {
  return pair.replace('btc_', '').toUpperCase()
}

function available() {
  return _.pickBy(coinList, function(value) {
    if (value.available === true)
      return value
  })
}

function availableNow() {
  return Transaction.getAvailable()
  .then((exchangeable) => {
    return _.pickBy(coinList, function(value, key) {
      if (value.available === true && exchangeable[key].status === 'available')
        return value
    })
  })
}

function currentlyAvailable() {
  return Promise.all( _.map(available(), (coin) => {
    return Transaction.price(coin.symbol)
  })).then((result) => {
    return _.reject(result, (res) => (res.hasOwnProperty('error')))
  })
}


function asSatoshis(amt) {
  return Math.floor(amt * 100000000)
}

function asBtc(amt) {
  return  amt * 0.00000001
}

const Coins = {
  available: available,
  all: coinList,
  availableNow: availableNow,
  currentlyAvailable: currentlyAvailable,
  pairToSym: pairToSym,
  asSatoshis: asSatoshis,
  asBtc: asBtc
}


export default Coins
