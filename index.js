const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Add this to break out the routes by path
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

// Endpoints
app.use('/users', userRouter)
app.use('/products', productRouter)

app.listen(port, () => {console.log(`Listening`)})

