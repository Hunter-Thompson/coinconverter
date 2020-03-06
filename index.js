'use strict';

let http = require("https");

var express = require('express');
var app = express();

















//////////////////////////////////////////////////////////////////////////////


app.get('/coin', function(req, res){
  var coindata = req.query.id;
  let from = coindata.replace(/\?.+/g,"$'")
  let to = coindata.split("?").pop();


  let op = {
    host: "min-api.cryptocompare.com",
    port: 443,
    path: `/data/price?fsym=${from}&tsyms=${to}`
  }  

  let request = http.request(op, x=> {
      x.on("data", f => {
          try{
            let converted = f + ''
            let changed = converted.split(":").pop()
            let final = changed.slice(0, -1)
            console.log(2.3*final)
            res.send("1 " + from + " = " + to + ' ' + final + "\n")
          } catch(e) {
              console.error(e);
          }
      })
  })
  request.on("error", console.error);
  request.end()
});


//////////////////////////////////////////////////////////////////////////////

app.get('/fullcoin', function(req, res){
  var coindata = req.query.id;
  let from = coindata.replace(/\?.+/g,"$'")
  let to = coindata.split("?").pop();


  let op = {
    host: "min-api.cryptocompare.com",
    port: 443,
    path: `/data/pricemultifull?fsyms=${from}&tsyms=${to}`
  }  

  let request = http.request(op, x=> {
      x.on("data", f => {
          try{
            let converted = JSON.parse(f)
            res.type('json').send(JSON.stringify(converted, null, 2) + '\n');
          } catch(e) {
              console.error(e);
          }
      })
  })
  request.on("error", console.error);
  request.end()
});



//////////////////////////////////////////////////////////////////////////////



//https://rest.coinapi.io/v1/exchangerate/BTC/USD 

//////////////////////////////////////////////////////////////////////////////


app.listen(3000);


//////////////////////////////////////////////////////////////////////////////
