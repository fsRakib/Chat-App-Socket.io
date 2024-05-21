const express = require('express')
const colors = require('colors')
const cors = require('cors')
<<<<<<< HEAD
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routes/index')
const cookiesParser = require('cookie-parser')
const app = express()
=======
const app = express()
require('dotenv').config()
const connectDB = require('./config/connectDB')
>>>>>>> c1bda7e5ff33514ad35d05b2cf0c5d0d892be520

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

<<<<<<< HEAD
app.use(express.json())
app.use(cookiesParser())

const PORT = process.env.PORT || 8080
=======
const PORT = process.env.PORT || 8080

>>>>>>> c1bda7e5ff33514ad35d05b2cf0c5d0d892be520
app.get('/', (req, res) => {
    res.json({
        message: "Hello World Rakib " + PORT
    })
})

<<<<<<< HEAD
//API endpoint
app.use('/api', router)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`.bgCyan.black)
=======
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`.bgCyan.gray)
>>>>>>> c1bda7e5ff33514ad35d05b2cf0c5d0d892be520
    })
})

