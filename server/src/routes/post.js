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

router.get('/api/post/:id', show)

router.post('/api/post/store', store)

router.patch('/api/post/update/:id', update)

router.delete('/api/post/delete/:id', destroy)

router.get('/api/posts/search', search)

export { router }
