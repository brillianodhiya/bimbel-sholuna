/*
  Warnings:

  - Added the required column `deskripsi` to the `Layanan` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Layanan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL
);
INSERT INTO "new_Layanan" ("id", "title") SELECT "id", "title" FROM "Layanan";
DROP TABLE "Layanan";
ALTER TABLE "new_Layanan" RENAME TO "Layanan";
CREATE UNIQUE INDEX "Layanan_title_key" ON "Layanan"("title");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
