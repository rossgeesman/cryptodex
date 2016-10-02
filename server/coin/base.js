const shapeshift = require('shapeshift.io')


const coin = {
  buy(currency) {
  	var pair = 'btc_' + currency.sym
    shapeshift.shift(currency.address, pair, currency.options, function (err, returnData) {
      if (err) {
      	
      } 
   	   else { 
   	   	
   	  }
    })
  }
}


export default coin;