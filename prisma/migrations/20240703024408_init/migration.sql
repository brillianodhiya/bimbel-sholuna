-- CreateTable
CREATE TABLE "Sistem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Sistem_title_key" ON "Sistem"("title");
