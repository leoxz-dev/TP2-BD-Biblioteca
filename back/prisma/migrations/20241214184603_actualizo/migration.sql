/*
  Warnings:

  - You are about to drop the `prestamo` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `direccion` on table `socios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `socios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `apellido` on table `socios` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "prestamo" DROP CONSTRAINT "prestamo_libro_id_fkey";

-- DropForeignKey
ALTER TABLE "prestamo" DROP CONSTRAINT "prestamo_socio_id_fkey";

-- AlterTable
ALTER TABLE "socios" ALTER COLUMN "direccion" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "apellido" SET NOT NULL;

-- DropTable
DROP TABLE "prestamo";

-- CreateTable
CREATE TABLE "prestamos" (
    "id" SERIAL NOT NULL,
    "fecha_prestamo" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_devolucion" DATE NOT NULL,
    "estado" TEXT NOT NULL,
    "garantia" INTEGER NOT NULL DEFAULT 0,
    "tipo_prestamo" TEXT NOT NULL,
    "socio_id" INTEGER NOT NULL,
    "libro_id" INTEGER NOT NULL,

    CONSTRAINT "prestamos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "prestamos_id_key" ON "prestamos"("id");

-- AddForeignKey
ALTER TABLE "prestamos" ADD CONSTRAINT "prestamos_socio_id_fkey" FOREIGN KEY ("socio_id") REFERENCES "socios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prestamos" ADD CONSTRAINT "prestamos_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "libros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
