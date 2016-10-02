const Promise = require("bluebird")
const request = require('request-promise')
const blockchainExplorer = require('blockchain.info/blockexplorer')
const accountAddress = "16q3iBZXmeofYcG9ECPvBPBacCuuDVEFDY"
import Datastore from 'nedb-promise'
const db = new Datastore({ filename: '../../cryptodex.db', autoload: true })

const lsttx = {
  hash: 'c14da3b2b61ac3599b99f51613b923583504b5cd344e1117c967cbf8f8754b78',
  amount: 10000,
  time: 1473188110
}

function account() {
  return blockchainExplorer.getAddress(accountAddress)
  	.then(acct => {return acct})
  	.catch((err) => {return err})
}

function totalUnspent(out) {
  return out.reduce((total, tx) => {
    if (tx.spent === false) 
      return total + tx.value
  }, 0)
}

function lastTx() {
  return blockchainExplorer.getAddress(accountAddress)
    .then(acct => {
      return acct.txs[0]
    })
    .catch(err => {
      console.log(err)
    })
}

function lastBlock() {
	return blockchainExplorer.getLatestBlock()
	  .then(block => { return block })
	  .catch(err => { return err })
}

const brokerageAccount = {
  getBalance() {
  	account()
  	  .then(acct => console.log(acct.final_balance))
  	  
  },
  confirmations() {
  	Promise.all([
  	  lastBlock(),
  	  account()])
  	.spread(function(lastBlck, acct) {
  	  var confirms = lastBlck.height - acct.txs[0].block_height
  	  console.log(confirms)
  	})
  	 
  },
  getAccountDetails() {
  	account()
  	  .then(acct => console.log(acct))
  },
  monitor() {
  	Promise.all([
  	  lastTx(),
  	  lastBlock(),
  	]).spread((tx, block) => {
  	  Promise.all([
        db.count({time: {$gte: tx.time }}),
        (block.height - tx.block_height) == 1 ? true : false
      ]).spread((priorTxs, confirmed) => {
      	if (priorTxs < 1 && confirmed === true ) {
          db.insert({
          	time: tx.time,
          	amount: totalUnspent(tx.out),
          	hash: tx.hash,
          	invested: false
          }).then(() => console.log('New tx registered'))
      	} else {
      	  console.log(tx)
      	}
      })
    })
  }
}

// check for transaction w/ (newer then most recent transaction, confirmed 6 times)
// persist the hash, amount, and timestamp in db
export default brokerageAccount