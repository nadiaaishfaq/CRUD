const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

let url = process.env.DB_URL

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connected to Database")
    })

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, "Connection Failed"))

module.exports = mongoose