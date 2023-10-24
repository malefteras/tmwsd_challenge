import express from 'express';
import { router } from  './routes/messages.js';
const app = express()
const port = 3000

app.use('/', router )
app.set('view engine', 'pug')

app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`)
})
