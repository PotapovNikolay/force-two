-- CreateTable
CREATE TABLE "Computer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "OS" TEXT,
    "light" TEXT,
    "guarantee" TEXT,
    "CPU" TEXT NOT NULL,
    "GPU" TEXT NOT NULL,
    "RAM" TEXT NOT NULL,
    "memory" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "motherboard" TEXT NOT NULL,
    "cooling" TEXT NOT NULL,
    "frame" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 10,
    "price" INTEGER NOT NULL DEFAULT 10000,

    CONSTRAINT "Computer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ComputerToImage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Computer_id_key" ON "Computer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Image_id_key" ON "Image"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ComputerToImage_AB_unique" ON "_ComputerToImage"("A", "B");

-- CreateIndex
CREATE INDEX "_ComputerToImage_B_index" ON "_ComputerToImage"("B");

-- AddForeignKey
ALTER TABLE "_ComputerToImage" ADD CONSTRAINT "_ComputerToImage_A_fkey" FOREIGN KEY ("A") REFERENCES "Computer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComputerToImage" ADD CONSTRAINT "_ComputerToImage_B_fkey" FOREIGN KEY ("B") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;
