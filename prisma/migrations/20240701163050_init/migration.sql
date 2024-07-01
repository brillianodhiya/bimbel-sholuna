-- CreateTable
CREATE TABLE "Overview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slogan" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "nomor_wa" TEXT NOT NULL,
    "text_chat_wa" TEXT NOT NULL,
    "label_wa" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Overview_title_key" ON "Overview"("title");
