/*
  Warnings:

  - Added the required column `contrasenia` to the `socios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "socios" ADD COLUMN     "contrasenia" TEXT NOT NULL;
