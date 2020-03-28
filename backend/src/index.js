const express = require('express')
const { errors } = require('celebrate')
const cors = require('cors')
const app = express()

const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

app.listen(3333, console.log('API Be the Hero 1.0.0: PORT 3333'))
