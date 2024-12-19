-- DropForeignKey
ALTER TABLE "prestamos" DROP CONSTRAINT "prestamos_libro_id_fkey";

-- AddForeignKey
ALTER TABLE "prestamos" ADD CONSTRAINT "prestamos_libro_id_fkey" FOREIGN KEY ("libro_id") REFERENCES "libros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
