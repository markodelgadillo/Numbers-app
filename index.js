const unirest = require('unirest')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

app.get('/numbers/:number', function(req, res) {
  const url =
    'https://numbersapi.p.mashape.com/' +
    req.params.number +
    '/trivia?fragment=true&json=true&notfound=floor'
  // number = req.params.number
  console.log(req.params.number)
  unirest
    .get(url)
    .header(
      'X-Mashape-Key',
      'pQADvP9qGtmshRrWJzA0weyzmgz7p12AicejsnPFP9SvCZW2BQ'
    )
    .header('X-Mashape-Host', 'numbersapi.p.mashape.com')
    .end(function(response) {
      console.log(
        res.send({
          number: req.params.number,
          text: response.body.text
        })
      )
      // response in terminal
    })
})

app.listen(7000, function() {
  console.log('Listening on Port 7000')
})
