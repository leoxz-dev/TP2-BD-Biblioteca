/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `libros` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `prestamos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `socios` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "socios_telefono_key";

-- CreateIndex
CREATE UNIQUE INDEX "libros_id_key" ON "libros"("id");

-- CreateIndex
CREATE UNIQUE INDEX "prestamos_id_key" ON "prestamos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "socios_id_key" ON "socios"("id");
