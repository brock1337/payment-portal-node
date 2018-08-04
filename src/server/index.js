const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.port || 5000

// Middlewares
app.use(helmet())
app.use(bodyParser.json())

// Routes
app.use('/', require('../routes/index'))

app.listen(port, () => {
  console.log(`Server listening on port --> ${port}`)
})
