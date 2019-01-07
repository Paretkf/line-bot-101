
const express = require('express')
const bodyParser = require('body-parser')
const CORS = require('cors')({origin: true})
const app = express()
const port = 5000

app.use(CORS)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send({
  current_date: new Date()
}))

app.listen(PORT, () => console.log('application is listening on:', PORT))
