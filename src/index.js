import { app } from './app.js'
import { PORT } from './config.js'

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.get('/tasks', (req, res) => {
  res.json([{ title: 'task 1', description: 'this is the task 1' }])
})

app.listen(PORT, () => console.log(`server on port http://localhost:${PORT}`))
