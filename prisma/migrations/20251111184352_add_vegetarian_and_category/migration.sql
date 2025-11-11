-- AlterTable
ALTER TABLE "Menu" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'uncategorised',
ADD COLUMN     "vegetarian" BOOLEAN NOT NULL DEFAULT false;
