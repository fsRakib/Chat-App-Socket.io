const mongoose = require('mongoose')

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        const connection = mongoose.connection

        connection.once('connected', () => {
            console.log("MongoDB connected successfully")
        })

        connection.on('error', (error) => {
            console.log("Error in connecting to MongoDB", error)
        })

    } catch (error) {
        console.log("Something is wrong", error)
    }
}

module.exports=connectDB