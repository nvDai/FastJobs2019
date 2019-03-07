const express = require('express')

const app = express()
const port = process.env.port || 6969

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, err => {
  if (err) console.error(err)
  console.log('Server is running at ', port)
})
