'use strict'

import morgan from 'morgan'
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { connectDB } from './database.js'
import { router as postRoutes } from './routes/post.js'
import { router as authRoutes } from './routes/auth.js'

dotenv.config()
connectDB()

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

app.use(postRoutes)
app.use(authRoutes)

app.listen(app.get('port'), () => {
  console.log(`Server running at port ${app.get('port')}`)
})
