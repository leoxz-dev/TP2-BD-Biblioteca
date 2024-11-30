/*
  Warnings:

  - A unique constraint covering the columns `[libro_id]` on the table `prestamos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "prestamos_libro_id_key" ON "prestamos"("libro_id");
