import express from 'express'
import cors from 'cors'
import routes from './routes.js'
import env from './config/env.js'

const app = express()

app.use(cors({ origin: env.clientUrl, credentials: true }))
app.use(express.json())
app.use('/api', routes)

export default app
