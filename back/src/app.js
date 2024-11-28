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

//home

app.get('/', (req,res) => {
  res.send('Hola mundo')
}
)

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
/*
model socios {
  id                Int         @id @unique @default(autoincrement())
  nombre            String
  direccion         String?
  telefono          String?     
  email             String?     @unique
  libro_prestado    libros?     @relation(fields: [libro_prestado_id], references: [id])
  libro_prestado_id Int? // Clave foránea opcional para permitir socios sin libros prestados
  prestamos         prestamos[] // Relación con la tabla de préstamos
}
*/
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


//prestamos
app.use('/prestamos', async (req,res) => {
  const prestamos = await prisma.prestamos.findMany()
  res.json(prestamos)
}
)
/*
model prestamos {
  id               Int       @id @unique @default(autoincrement())
  socio            socios    @relation(fields: [socio_id], references: [id])
  socio_id         Int // Clave foránea hacia la tabla socio
  libro            libros    @relation(fields: [libro_id], references: [id])
  libro_id         Int // Clave foránea hacia la tabla libros
  fecha_prestamo   DateTime  @default(now())
  fecha_devolucion DateTime?
}
*/
app.post('/prestamos',async (req,res) => {
  const prestamo = await prisma.prestamos.create({
    data: {
      socio_id: req.body.socio_id,
      libro_id: req.body.libro_id,
      fecha_devolucion: req.body.fecha_devolucion
    }
  })
  res.json(prestamo)
}
)




