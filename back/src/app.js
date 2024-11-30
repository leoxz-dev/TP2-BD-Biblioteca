const { PrismaClient } = require('@prisma/client')
const { PrismaClientRustPanicError } = require('@prisma/client/runtime/library')
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


//--------------------CRUD LIBROS--------------------

/*
Problema existePrestamo(id: Int) {
  requiere: id > 0
  asegura: res(true) si existe un prestamo con ese id
*/

async function existePrestamo(id){
  const prestamo = await prisma.prestamos.findUnique({
    where: {
      id: parseInt(id)
    }
  })
  return prestamo!==null
}

/*
problema getTodosLibros() {
  requiere: -
  asegura: res(todos los libros)
*/

app.get('/prestamos', async (req,res) => {
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
  fecha_devolucion DateTime
}
*/

/*

Problema postPrestamo(socio_id, libro_id, fecha_prestamo, fecha_devolucion) {
  requiere: socio_id, libro_id, fecha_prestamo, fecha_devolucion
  Obs:(formato fechas: 'YYYY-MM-DDTHH:MM:SS.MS',ej 2030-11-29T15:30:00.000Z)
  Asegura: res(prestamo)
  Asegura: crea un nuevo prestamo con los datos dados
}
*/

app.post('/prestamos', async (req, res) => {
  const prestamo = await prisma.prestamos.create({
    data: {
      socio_id: req.body.socio_id,
      libro_id: req.body.libro_id,
      fecha_prestamo: req.body.fecha_prestamo,
      fecha_devolucion: req.body.fecha_devolucion
    }
  })
  res.json(prestamo)
})

/*
Problema: getPrestamo(id: Int) {
  requiere: id>0
  asegura: res(prestamo)
  asegura: res(404) si no existe un prestamo con ese id
}
*/

app.get('/prestamos/:id', async (req,res) => {
  const prestamo = await prisma.prestamos.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
  })
  if (prestamo===null){
    return res.sendStatus(404)
  }
  res.json(prestamo)
    
})

/*
Problema: deletePrestamo(id: Int) {
  requiere: id>0
  asegura: res(prestamo)
  asegura: elimina el prestamo con el id dado
  asegura: res(404) si no existe un prestamo con ese id
}

*/

app.delete('/prestamos/:id', async (req,res) => {
  if (!await existePrestamo(parseInt(req.params.id))) {
    return res.sendStatus(404)
  }
  const deletePrestamo = await prisma.prestamos.delete({
    where:{
      id: parseInt(req.params.id)
    }
  })
  res.json(deletePrestamo)
})

/*
Problema: putPrestamo(id: Int, fecha_devolucion: DateTime) {
  requiere: id>0, fecha_devolucion: YYYY-MM-DDTHH:MM:SS.MS
  asegura: res(prestamo)
  asegura: actualiza la fecha de devolución del prestamo con el id dado
  asegura: res(404) si no existe un prestamo con ese id
}
*/
app.put('/prestamos/:id', async (req,res) => {
  if (!await existePrestamo(parseInt(req.params.id))) {
    return res.sendStatus(404)
  }
  const uptadeUser = await prisma.prestamos.update({
    where: {
      id: parseInt(req.params.id)
    },
    data: {
      fecha_devolucion: req.body.fecha_devolucion
    }
  })
  res.json(uptadeUser)
})