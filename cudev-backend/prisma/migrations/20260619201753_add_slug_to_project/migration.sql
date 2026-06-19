-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "slug" TEXT,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "fullDesc" TEXT,
    "view" INTEGER NOT NULL DEFAULT 0,
    "stack" TEXT[],
    "site" TEXT,
    "gitHub" TEXT,
    "imagePath" TEXT,
    "dateCreate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
