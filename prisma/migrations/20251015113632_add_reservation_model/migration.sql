-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "notes" TEXT NOT NULL,
    "guests" INTEGER NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);
