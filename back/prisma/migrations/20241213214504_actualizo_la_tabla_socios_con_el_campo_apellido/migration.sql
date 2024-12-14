/*
  Warnings:

  - You are about to drop the `prestamos` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `telefono` on table `socios` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "prestamos" DROP CONSTRAINT "prestamos_libro_id_fkey";

-- DropForeignKey
ALTER TABLE "prestamos" DROP CONSTRAINT "prestamos_socio_id_fkey";

-- AlterTable
ALTER TABLE "socios" ADD COLUMN     "apellido" TEXT,
ALTER COLUMN "telefono" SET NOT NULL;

-- DropTable
DROP TABLE "prestamos";

-- CreateTable
CREATE TABLE "prestamo" (
    "id" SERIAL NOT NULL,
    "socio_id" INTEGER NOT NULL,
    "libro_id" INTEGER NOT NULL,
    "fecha_prestamo" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fecha_devolucion" DATE NOT NULL,

    CONSTRAINT "prestamo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "prestamo_id_key" ON "prestamo"("id");

-- AddForeignKey
ALTER TABLE "prestamo" ADD CONSTRAINT "prestamo_socio_id_fkey" FOREIGN KEY ("socio_id") REFERENCES "socios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prestamo" ADD CONSTRAINT "prestamo_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "libros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
