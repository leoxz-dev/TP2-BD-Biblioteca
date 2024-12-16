/*
  Warnings:

  - A unique constraint covering the columns `[codigo_isbn]` on the table `libros` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `codigo_isbn` to the `libros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "libros" ADD COLUMN     "codigo_isbn" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "libros_codigo_isbn_key" ON "libros"("codigo_isbn");
