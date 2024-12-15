-- DropForeignKey
ALTER TABLE "socios" DROP CONSTRAINT "socios_libro_prestado_id_fkey";

-- AlterTable
ALTER TABLE "prestamos" ALTER COLUMN "estado" SET DEFAULT 'En préstamo';

-- AddForeignKey
ALTER TABLE "socios" ADD CONSTRAINT "socios_libro_prestado_id_fkey" FOREIGN KEY ("libro_prestado_id") REFERENCES "libros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
