-- CreateTable
CREATE TABLE "Layanan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "LayananDetail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "layananId" INTEGER NOT NULL,
    CONSTRAINT "LayananDetail_layananId_fkey" FOREIGN KEY ("layananId") REFERENCES "Layanan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Testimoni" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL,
    "pekerjaan" TEXT NOT NULL,
    "testimoni" TEXT NOT NULL,
    "foto" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Layanan_title_key" ON "Layanan"("title");

-- CreateIndex
CREATE UNIQUE INDEX "LayananDetail_title_key" ON "LayananDetail"("title");
