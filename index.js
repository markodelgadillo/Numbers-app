const { MongoClient } = require('mongodb')
const unirest = require('unirest')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))
const url = 'http://numbersapi.com'




MongoClient.connect('mongodb://localhost/library', function (err, db) {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const facts = db.collection('facts')

  app.use(bodyParser.json())

  app.get('/number', function(req, res) {
    console.log('getting numbers...')
    facts
      .find({})
      .toArray()
      .then(function(facts) {
        res.json(facts)
      })
      //get request for number random fact
      unirest.get("https://numbersapi.p.mashape.com/" + number + "/trivia?fragment=true&json=true&notfound=floor")
      .header("X-Mashape-Key", "pQADvP9qGtmshRrWJzA0weyzmgz7p12AicejsnPFP9SvCZW2BQ")
      .header("X-Mashape-Host", "numbersapi.p.mashape.com")
      .end(function (result) {
        console.log(result.status, result.headers, result.body);
      })
    })

    app.listen(5000, function() {
      console.log('Listening on port 5000')
    })
  })
