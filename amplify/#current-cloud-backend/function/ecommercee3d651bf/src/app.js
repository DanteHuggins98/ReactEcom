const mysql = require('mysql')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())
app.use(cors())
// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'React_Ecommerce',
});
db.connect((error) => {
  if(error){
      throw error
  }
  console.log('Database Connected')
})

app.get('/productsdb', (req,res) =>{
  db.query('SELECT * FROM Products ', (err,response) =>{
      if(err){
          throw error
      } else{
          res.send(response)
      }
  })
} )

// app.get('/productsdb')
// app.listen(3001, () => {
//   console.log("Running on Port 3001")
// });

app.get('/productsdb1', (req,res) =>{
  db.query('SELECT * FROM Products ORDER BY price ASC', (err,response) =>{
      if(err){
          throw error
      } else{
          res.send(response)
      }
  })
} )

app.get('/productsdb2', (req,res) =>{
  db.query('SELECT * FROM Products ORDER BY price DESC', (err,response) =>{
      if(err){
          throw error
      } else{
          res.send(response)
      }
  })
} )
const port = process.env.PORT || 5000
app.listen(port, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
