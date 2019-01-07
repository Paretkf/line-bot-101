const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.static('public'))

app.get('/', async (req, res) => {
  res.json({
    status: 200,
    message: 'Hello World v.2 test deploying'
  })
})

app.listen(PORT, () => console.log('application is listening on:', PORT))