import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log("mongodb connected"))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('send')
})

const userSchema = new mongoose.Schema({
    name: String,
    password: String
})

const userModel = mongoose.model('ig-user', userSchema)

app.get('/ig-user', (req, res) => {
   res.send('hey') 
})

app.post('/ig-user', async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await userModel.create({
            name: username,
            password: password
        })

        res.json({
            message: "user saved",
            data: user
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }
})

app.listen(5000, (err) => {
    console.log("app is running on port 2000...")

    if (err){
        console.log(err)
    }
})