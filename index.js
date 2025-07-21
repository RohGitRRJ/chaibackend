require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/babu', (req, res) => {
  res.send('Hello World! fuk off')
})

app.get('/youtube', (req, res) => {
  res.send("<h2>this is you tube</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})