
const coinList = [
  { symbol: "BTC", name: "Bitcoin", available: true },
  { symbol: "BCY", name: "Bitcrystals", available: false },
  { symbol: "BLK", name: "Blackcoin", available: false },
  { symbol: "BTS", name: "BitShares", available: false },
  { symbol: "CLAM", name: "Clams", available: false },
  { symbol: "DASH", name: "Dash", available: true },
  { symbol: "DGB", name: "Digibyte", available: false },
  { symbol: "DGD", name: "DigixDao", available: false },
  { symbol: "DOGE", name: "Dogecoin", available: false },
  { symbol: "EMC", name: "Emercoin", available: false },
  { symbol: "ETH", name: "Ether", available: true },
  { symbol: "ETC", name: "Ether Classic", available: false },
  { symbol: "FCT", name: "Factoids", available: false },
  { symbol: "LBC", name: "LBRY Credits", available: false },
  { symbol: "LSK", name: "Lisk", available: false },
  { symbol: "LTC", name: "Litecoin", available: false },
  { symbol: "MAID", name: "Maidsafe", available: false },
  { symbol: "MSC", name: "Mastercoin", available: false },
  { symbol: "MONA", name: "Monacoin", available: false },
  { symbol: "NMC", name: "Namecoin", available: false },
  { symbol: "NVC", name: "Novacoin", available: false },
  { symbol: "NBT", name: "Nubits", available: false },
  { symbol: "NXT", name: "Nxt", available: false },
  { symbol: "PPC", name: "Peercoin", available: false },
  { symbol: "RDD", name: "Reddcoin", available: false },
  { symbol: "REP", name: "Augur", available: false },
  { symbol: "SDC", name: "Shadowcash", available: false },
  { symbol: "SC", name: "Siacoin", available: false },
  { symbol: "SJCX", name: "StorjcoinX", available: false },
  { symbol: "SNGLS", name: "SingularDTV", available: false },
  { symbol: "START", name: "Startcoin", available: false },
  { symbol: "STEEM", name: "Steem", available: false },
  { symbol: "USDT", name: "TetherUSD", available: false },
  { symbol: "VRC", name: "Vericoin", available: false },
  { symbol: "VTC", name: "Vertcoin", available: false },
  { symbol: "VOX", name: "Voxels", available: false },
  { symbol: "XCP", name: "Counterparty", available: false },
  { symbol: "XMR", name: "Monero", available: false },
  { symbol: "XRP", name: "Ripple", available: false },
  { symbol: "ZEC", name: "Zcash", available: false }
]

function available(coin) {
  if (coin.available === true)
    return coin
}

const Coins = {
  available: coinList.filter(available),
  all: coinList 
}

export default Coins

