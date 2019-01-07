
const express = require('express')
const bodyParser = require('body-parser')
const CORS = require('cors')({origin: true})
const app = express()
const port = 7777

app.use(CORS)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('', (req, res) => res.send({
  current_date: new Date()
}))
app.listen(port)
console.log('Server is running on port: ' + port)

module.exports = app
