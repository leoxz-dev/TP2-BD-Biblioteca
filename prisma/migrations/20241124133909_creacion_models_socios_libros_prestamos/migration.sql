-- CreateTable
CREATE TABLE "socios" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "libro_prestado_id" INTEGER,

    CONSTRAINT "socios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "libros" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "anio_publicacion" INTEGER NOT NULL,
    "cant_paginas" INTEGER NOT NULL,
    "cant_ejemplares" INTEGER NOT NULL,
    "disponibilidad" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "libros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prestamos" (
    "id" SERIAL NOT NULL,
    "socio_id" INTEGER NOT NULL,
    "libro_id" INTEGER NOT NULL,
    "fecha_prestamo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_devolucion" TIMESTAMP(3),

    CONSTRAINT "prestamos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "socios_telefono_key" ON "socios"("telefono");

-- CreateIndex
CREATE UNIQUE INDEX "socios_email_key" ON "socios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "libros_titulo_key" ON "libros"("titulo");

-- AddForeignKey
ALTER TABLE "socios" ADD CONSTRAINT "socios_libro_prestado_id_fkey" FOREIGN KEY ("libro_prestado_id") REFERENCES "libros"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prestamos" ADD CONSTRAINT "prestamos_socio_id_fkey" FOREIGN KEY ("socio_id") REFERENCES "socios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prestamos" ADD CONSTRAINT "prestamos_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "libros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
