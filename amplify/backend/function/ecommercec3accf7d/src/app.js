
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



const mysql = require('mysql')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(express.json())
app.use(cors())
// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});
const db = mysql.createConnection({
  user: 'admin',
  host: 'reactecom.cghuhuwevmha.us-east-1.rds.amazonaws.com',
  password: 'password',
  database: 'rdsreactecom',
});
db.connect((error) => {
  if(error){
      throw error
  }
  console.log('Database Connected')
})

app.get('/productsdb', (req,res) =>{
  db.query('SELECT * FROM rdsreactv2 ', (err,response) =>{
      if(err){
          throw error
      } else{
          res.send(response)
      }
  })
} )

app.get('/productsdb/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});
app.get('/productsdb1', (req,res) =>{
  db.query('SELECT * FROM rdsreactv2 ORDER BY price ASC', (err,response) =>{
      if(err){
          throw error
      } else{
          res.send(response)
      }
  })
} )

app.get('/productsdb2', (req,res) =>{
  db.query('SELECT * FROM rdsreactv2 ORDER BY price DESC', (err,response) =>{
      if(err){
          throw error
      } else{
          res.send(response)
      }
  })
} )

/****************************
* Example post method *
****************************/

app.post('/productsdb', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/productsdb/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/productsdb', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/productsdb/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/productsdb', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/productsdb/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
