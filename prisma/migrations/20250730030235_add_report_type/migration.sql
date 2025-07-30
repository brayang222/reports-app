-- CreateEnum
CREATE TYPE "ReportType" AS ENUM ('REVENUE', 'EXPENSE');

-- AlterTable
ALTER TABLE "report" ADD COLUMN     "type" "ReportType" NOT NULL DEFAULT 'EXPENSE';
