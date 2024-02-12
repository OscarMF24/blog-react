'use strict'

import { HTTP_FORBIDDEN } from '../utils/http_status_codes.js'

function verifyToken (req, res, next) {
  const authorizationHeader = req.headers.authorization

  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1]
    req.token = token
    next()
  } else {
    res.status(HTTP_FORBIDDEN).send({ error: 'Missing authorization header' })
  }
}

export { verifyToken }
