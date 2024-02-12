'use strict'

import { PostModel } from '../models/Post.js'
import * as Response from '../utils/http_status_codes.js'

export async function index (req, res) {
  try {
    const { page = 1, limit = 10 } = req.query
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10)
    }

    const posts = await PostModel.paginate({}, options)
    return res.status(Response.HTTP_OK).json({ posts })
  } catch (error) {
    console.error('Error: ', error)
    return res
      .status(Response.HTTP_INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' })
  }
}

export async function show (req, res) {
  try {
    const { id } = req.params
    const post = await PostModel.findById(id)?.exec()

    if (!post) {
      return res
        .status(Response.HTTP_NOT_FOUND)
        .json({ message: 'Post not found' })
    }

    return res.status(Response.HTTP_OK).json({ post })
  } catch (error) {
    console.error('Error: ', error)
    return res
      .status(Response.HTTP_INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' })
  }
}

export async function store (req, res) {
  try {
    const { title, author, description } = req.body ?? {}

    if (!title || !author || !description) {
      return res
        .status(Response.HTTP_BAD_REQUEST)
        .json({ message: 'Bad request, all fields are required' })
    }

    const post = new PostModel({
      title,
      author,
      description
    })

    const save = await post.save()
    return res.status(Response.HTTP_CREATED).json({ post: save })
  } catch (error) {
    console.error('Error: ', error)
    return res
      .status(Response.HTTP_INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' })
  }
}

export async function update (req, res) {
  try {
    const { id } = req.params
    const { title, author, description } = req.body

    if (!title && !author && !description) {
      return res
        .status(Response.HTTP_BAD_REQUEST)
        .json({ message: 'At least one field must be provided for update' })
    }

    let post = await PostModel.findById(id)

    if (!post) {
      return res
        .status(Response.HTTP_NOT_FOUND)
        .json({ message: 'Post not found' })
    }

    if (title) {
      post.title = title
    }

    if (author) {
      post.author = author
    }

    if (description) {
      post.description = description
    }

    post = await post.save()

    return res.status(Response.HTTP_OK).json({ post })
  } catch (error) {
    console.error('Error: ', error)
    return res
      .status(Response.HTTP_INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' })
  }
}

export async function destroy (req, res) {
  const { id } = req.params

  const deletedPost = await PostModel.findByIdAndDelete(id)

  if (!deletedPost) {
    return res
      .status(Response.HTTP_NOT_FOUND)
      .json({ message: 'Post not found' })
  }
  return res
    .status(Response.HTTP_OK)
    .json({ message: 'Post deleted successfully' })
}

export async function search (req, res) {
  try {
    const query = {}
    const { page = 1, limit = 10 } = req.query
    const { title, author, description } = req.query ?? {}

    if (title) {
      query.title = { $regex: title, $options: 'i' }
    }

    if (author) {
      query.author = { $regex: author, $options: 'i' }
    }

    if (description) {
      query.description = { $regex: description, $options: 'i' }
    }

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10)
    }

    const posts = await PostModel.paginate(query, options)
    return res.status(Response.HTTP_OK).json({ posts })
  } catch (error) {
    console.error('Error: ', error)
    return res
      .status(Response.HTTP_INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' })
  }
}
