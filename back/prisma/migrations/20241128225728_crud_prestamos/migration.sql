-- DropForeignKey
ALTER TABLE "prestamos" DROP CONSTRAINT "prestamos_socio_id_fkey";

-- AlterTable
ALTER TABLE "prestamos" ALTER COLUMN "socio_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "prestamos" ADD CONSTRAINT "prestamos_socio_id_fkey" FOREIGN KEY ("socio_id") REFERENCES "socios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
