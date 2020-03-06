'use strict';

let http = require("https");

var express = require('express');
var app = express();







app.get('/api/price', function(req, res){
  var coindata = req.query.id;
  console.log(coindata)
  let from = coindata[0]
  let to   = coindata[1]


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
            res.send("1 " + from + " = " + final + ' ' + to + "\n")
          } catch(e) {
              console.error(e);
          }
      })
  })
  request.on("error", console.error);
  request.end()
});


//////////////////////////////////////////////////////////////////////////////


app.get('/api/converter', function(req, res){
  var coindata = req.query.id;
  console.log(coindata)
  let from = coindata[0]
  let to   = coindata[1]
  let num = coindata[2]


  let op = {
    host: "min-api.cryptocompare.com",
    port: 443,
    path: `/data/price?fsym=${from}&tsyms=${to}`
  }  

  let request = http.request(op, x=> {
      x.on("data", f => {
          try{
            let price = f + ''
            let changed = price.split(":").pop()
            let final = changed.slice(0, -1)
            let converted = num*final
            console.log(converted)
            res.send(num + ' ' + from + ' = ' + converted + ' ' + to + `\n`)
          } catch(e) {
              console.error(e);
          }
      })
  })
  request.on("error", console.error);
  request.end()
});


//////////////////////////////////////////////////////////////////////////////

app.get('/api/fullcoin', function(req, res){
  var coindata = req.query.id;
  let from = coindata[0]
  let to   = coindata[1]

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
