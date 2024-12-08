-- DropForeignKey
ALTER TABLE "prestamos" DROP CONSTRAINT "prestamos_libro_id_fkey";

-- AlterTable
ALTER TABLE "prestamos" ALTER COLUMN "libro_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "prestamos" ADD CONSTRAINT "prestamos_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "libros"("id") ON DELETE SET NULL ON UPDATE CASCADE;
