/*
  Warnings:

  - Added the required column `content` to the `Example` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Example" ADD COLUMN     "content" TEXT NOT NULL;
