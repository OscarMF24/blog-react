'use strict'

import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

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

postSchema.plugin(mongoosePaginate)

const PostModel = model('Post', postSchema)

export { PostModel }
