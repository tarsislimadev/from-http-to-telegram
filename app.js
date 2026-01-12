const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res) => {
  res.json({ status: 'ok', data: req.body })
})

module.exports = app
