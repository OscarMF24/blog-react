import express from 'express'
import morgan from 'morgan'

import postRoutes from './routes/post.js'
import authRoutes from './routes/auth.js'

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'))

app.use(postRoutes)
app.use(authRoutes)

app.listen(app.get('port'), () => {
  console.log(`Server running at port ${app.get('port')}`)
})
