const express = require('express')
const app = express()

const cors = require('cors')

const mongoose = require('./db/conn')

//import routes
const userRoutes = require('./routes/user')

const bodyparser = require('body-parser')

const dotenv = require('dotenv')
dotenv.config()

let port = process.env.PORT || 8080

app.use(bodyparser.json())

app.use(express.static('public'))
app.use(cors())
app.use('/user', userRoutes)

app.listen(port, ()=>{
    console.log(`server is running at ${port}`)
})