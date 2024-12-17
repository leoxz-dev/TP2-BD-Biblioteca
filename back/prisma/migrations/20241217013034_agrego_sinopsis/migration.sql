/*
  Warnings:

  - Added the required column `sinopsis` to the `libros` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "libros" ADD COLUMN     "sinopsis" TEXT NOT NULL;
