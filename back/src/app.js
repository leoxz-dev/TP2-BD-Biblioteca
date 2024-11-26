const { PrismaClient } = require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000

const prisma = new PrismaClient()

app.use(express.json())

//listen en la terminal tipica
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//TODOS LOS SOCIOS GET DEL CRUD
app.get('/socios', async (req,res) => {
  const socios = await prisma.socios.findMany()
  res.json(socios)
})

//SOCIO ESPECIFICO GET DEL CRUD
app.get('/socios/:id', async (req,res) => {
  const socio = await prisma.socios.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  })
  if (socio===null){
    res.sendStatus(404)
    return
  }
  res.json(socio)
})

//POST DEL CRUD
app.post('/socios', async (req,res) => {
  const socio = await prisma.socios.create({
    data: {
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      telefono:  req.body.telefono,
      email:   req.body.email
    }
})
  res.json(socio)
})

//DELETEAR UN SOCIO DEL CRUD
app.delete('/socios/:id', async (req,res) => {
  const socio = await prisma.socios.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  })
  if (socio===null){
    res.sendStatus(404)
    return
  }
  await prisma.socios.delete({
    where: {
      id: parseInt(req.params.id)
    }
  })
  res.send(socio)
})

//ACTUALIZAR SOCIO GET DEL CRUD
app.put('/socios/:id', async (req,res) => {
  const socio = await prisma.socios.findUnique({
    where: {
      id: parseInt(req.params.id)
    }
  })
  if (socio===null){
    res.sendStatus(404)
    return
  }
  await prisma.socios.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: {
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      telefono:  req.body.telefono,
      email:   req.body.email
    }
  })
  res.json(socio)
})
