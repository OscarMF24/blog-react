'use strict'

import { Router } from 'express'
import {
  index,
  show,
  store,
  search,
  update,
  destroy
} from '../controllers/PostController.js'

const router = Router()

router.get('/api/posts', index)

router.post('/api/posts', store)

router.get('/api/post/:id', show)

router.patch('/api/post/:id', update)

router.delete('/api/post/:id', destroy)

router.get('/api/posts/search', search)

export { router }
