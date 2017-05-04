'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({     
  extended: true
})); 

app.use(cors());


app.post('/yournewroute',function(req,res){
  request(`proxy_api_goes_here`,
  	(error,response,body) => {
    res.send(body);
  });
});


const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
