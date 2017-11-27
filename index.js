const express = require('express')
const app = express()
const unirest = require('unirest')
const path = require('path')
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

app.get('/number/:number', function(req, res) {
  console.log(req.params.number) // testing to check the number requested
  const url =
    'https://numbersapi.p.mashape.com/' +
    req.params.number +
    '/trivia?fragment=true&json=true&notfound=floor'

  unirest // NumbersAPI get request
    .get(url)
    .header(
      // required key code to access the api from the server
      'X-Mashape-Key',
      'pQADvP9qGtmshRrWJzA0weyzmgz7p12AicejsnPFP9SvCZW2BQ'
    )
    .end(function(response) {
      // function to end the connection
      console.log(response.body.text) // testing to check the text for the number requested
      res.send({
        // sending the res parameter with
        number: req.params.number, // the number key with the value of the requested number
        text: response.body.text // the text key with the value of the text of the response.body object
      })
    })
})

app.listen(7000, () => {
  console.log("Listening on good ol' port 7000.")
})
