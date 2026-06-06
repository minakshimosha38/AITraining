import express from 'express'
import mongoose from 'mongoose'
import path from 'path'

const app = express()
app.use(express.json())

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/octofit'
const PORT = Number(process.env.PORT) || 8000

mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err))

app.get('/health', (req, res) => res.json({status: 'ok'}))

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`)
})
