'use strict'

import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connection mongoDB success')
  } catch (error) {
    console.error('Connection fail', error)
  }
}

export { connectDB }
