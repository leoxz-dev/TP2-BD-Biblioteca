/*
  Warnings:

  - Made the column `socio_id` on table `prestamos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `libro_id` on table `prestamos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fecha_devolucion` on table `prestamos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "prestamos" DROP CONSTRAINT "prestamos_libro_id_fkey";

-- DropForeignKey
ALTER TABLE "prestamos" DROP CONSTRAINT "prestamos_socio_id_fkey";

-- AlterTable
ALTER TABLE "prestamos" ALTER COLUMN "socio_id" SET NOT NULL,
ALTER COLUMN "libro_id" SET NOT NULL,
ALTER COLUMN "fecha_devolucion" SET NOT NULL,
ALTER COLUMN "fecha_devolucion" SET DATA TYPE TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE "prestamos" ADD CONSTRAINT "prestamos_socio_id_fkey" FOREIGN KEY ("socio_id") REFERENCES "socios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prestamos" ADD CONSTRAINT "prestamos_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "libros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
