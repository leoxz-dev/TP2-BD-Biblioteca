const { PrismaClient }= require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000

const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
