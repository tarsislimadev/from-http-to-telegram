const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const access = (_, res) =>
  res
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Headers', '*')
    .setHeader('Access-Control-Allow-Methods', '*')
    .setHeader('Access-Control-Allow-Credentials', true)
    .send()

app.head('/', access)

app.options('/', access)

app.post('/', (req, res) => {
  const token = process.env.TELEGRAM_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  const message = Object.keys(req.body).map((k) => `${k}: ${req.body[k]}`).join('\n\n')
  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const method = 'POST'
  const headers = { 'Content-Type': 'application/json' }
  const body = { chat_id: chatId, text: message }
  fetch(url, { method, headers, body: JSON.stringify({ ...body }) })
    .then((res) => res.json())
    .then(console.log)
    .finally(() => res.json({ status: 'ok', data: { ...req.body } }))
})

module.exports = app
