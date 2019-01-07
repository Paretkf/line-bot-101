const express = require('express')
const axios = require('axios')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', async (req, res) => {
  res.json({
    status: 200,
    message: 'Hello World v.2 test deploying'
  })
})

app.post('/webhook', (req, res) => {
  let reply_token = req.body.events[0].replyToken
  const data = reply(reply_token)
  res.sendStatus(200)
})

const reply = (token) => {
  const data = axios.post('https://api.line.me/v2/bot/message/reply', {
    replyToken: token,
      messages: [{
        type: 'text',
        text: 'Hello'
      },
      {
        type: 'text',
        text: 'How are you?'
    }]
  },
  {
    headers: {'Authorization': 'Bearer PAFvHNSUVjxIBYqFKku6anaUSHcKIM1QWIYbFIrVA4R0mgY+zrygvbfWjmSIbNGeldODq4IKNQf/MQ4vIQtKm2eBxoAfRJDsGZxHIMXLgyE38bYqVhgUKctU/KXXdqThKHzBjXmhwFNi2e1CzFoBvAdB04t89/1O/w1cDnyilFU='}
  })
  return data
}
app.listen(PORT, () => console.log('application is listening on:', PORT))
