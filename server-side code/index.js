const express = require ('express')
const mongoose = require('mongoose')
require('dotenv').config();
const cors = require ('cors');
const userModel = require('./routes/user.Route')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/',userModel)

app.listen(process.env.PORT, async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('server successfully connected to mongoDB')
        console.log(`server successfully running to ${process.env.PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})
