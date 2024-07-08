/* eslint-disable prettier/prettier */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  error: boolean;
  message: string;
  data?: any;
};

const listId = [
  "668ab059e2905ee6a2e47a07",
  "668ab134e2905ee6a2e47a0a",
  "668ab1f0e2905ee6a2e47a0d",
  "668ab2bce2905ee6a2e47a10",
  "668ab364e2905ee6a2e47a13",
  "668ab3c5e2905ee6a2e47a17",
  "668ab44ee2905ee6a2e47a1b",
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    // Handle any other HTTP method
    // console.log(req.body);
    const overviews = await prisma.overview.findFirst();
    const sistem = await prisma.sistem.findMany();
    const layanans = await prisma.layanan.findMany({
      include: {
        layananDetails: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    // rubah id ke angka 1, 2, 3, 4, 5, 6, 7
    layanans.forEach((layanan) => {
      layanan.id = (listId.indexOf(layanan.id) + 1).toString();
    });

    await prisma.$disconnect();
    // why prisma disconect ?
    res.status(200).json({
      error: false,
      message: "List All Data berhasil diambil",
      data: {
        overview: overviews,
        sistem: sistem,
        layanan: layanans,
      },
    });
  } else {
    res.status(200).json({ error: true, message: "Halaman tidak ditemukan!" });
  }
}
