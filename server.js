'use strict';
const express = require('express');
const app = express();
app.set('port', (process.env.API_PORT || 3001));

app.get('/api/test', (req, res) => {
  const param = req.query.q;

  if (param) {
    res.json({
      response: 'Your parameter was:' + param,
    });
    return;
  }
})
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

//import coin from './app/coin/base';
//import ltc from './app/coin/ltc';
//import brokerageAccount from './app/brokerage_account/brokerage_account';

//var data = brokerageAccount.data
//data.find({})
//.then(res => console.log(res))

//brokerageAccount.monitor()
//brokerageAccount.confirmations()
//brokerageAccount.getAccountDetails()