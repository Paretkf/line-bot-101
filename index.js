const express = require('express')
const request = require('request')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/', async (req, res) => {
  res.json({
    status: 200,
    message: 'Line Bot 101 webhook',
    date: new Date()
  })
})
app.post('/webhook', (req, res) => {
  let reply_token = req.body.events[0].replyToken
  console.log(reply_token)
  reply(reply_token)
  res.sendStatus(200)
})
function reply(reply_token) {
  let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {W4ZJWdiC3hyFmIBZ6mhb4UuPh0kPPQi15oIqiIsm0qgrOaFDB5K/AIdfRnVJlwS7ldODq4IKNQf/MQ4vIQtKm2eBxoAfRJDsGZxHIMXLgyEgimuHSB2TINohTr/BU+wdmDQh784uu6bMdCD57Uh74wdB04t89/1O/w1cDnyilFU=}'
  }
  let body = JSON.stringify({
      replyToken: reply_token,
      messages: [{
          type: 'text',
          text: 'กินข้าวแล้ว'
      },
      {
          type: 'text',
          text: 'อย่ามายุ่ง!'
      }]
  })
  request.post({
      url: 'https://api.line.me/v2/bot/message/reply',
      headers: headers,
      body: body
  }, (err, res, body) => {
      console.log('status = ' + res.statusCode);
  });
}
app.listen(PORT, () => console.log('application is listening on:', PORT))
