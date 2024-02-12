'use strict'

import jwt from 'jsonwebtoken'
import { Router } from 'express'
import { verifyToken } from '../middlewares/verify_token.js'
import * as Response from '../utils/http_status_codes.js'

const router = Router()
const SECRET_KEY = process.env.SECRET_KEY || 'pMveHDUxpRgH4MM664V9QMhZP3zq0n'

router.post('/api/login', (req, res) => {
  const { email, password } = req.body ?? {}

  const user = {
    id: 1,
    name: 'John',
    email: 'john@email.com',
    password: 'test'
  }

  if (email === user.email && password === user.password) {
    // eslint-disable-next-line n/handle-callback-err
    jwt.sign({ user }, SECRET_KEY, { expiresIn: '1h' }, (error, token) => {
      return res.json({ token })
    })
  }
  return res.json({ message: 'Email or password are invalid' })
})

router.post('/api/register', (req, res) => {
  //
})

router.get('/api/users', verifyToken, (req, res) => {
  jwt.verify(req.token, SECRET_KEY, (error, data) => {
    if (error) {
      return req.sendStatus(Response.HTTP_FORBIDDEN)
    }
    return res.status(Response.HTTP_OK).json({ message: 'All users', data })
  })
})

export { router }
