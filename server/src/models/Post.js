'use strict'

import { Schema, model } from 'mongoose'

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const PostModel = model('Post', postSchema)

export { PostModel }
