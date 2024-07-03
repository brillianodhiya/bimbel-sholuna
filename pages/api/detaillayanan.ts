// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  error: boolean;
  message: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const layanan = await prisma.layananDetail.create({
        data: {
          title: req.body.title,
          layananId: parseInt(req.body.layananId),
        },
      });

      await prisma.$disconnect();
      res.status(200).json({
        error: false,
        message: "Sukses menambahkan data",
      });
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      // process.exit(1);
      res.status(200).json({
        error: true,
        message:
          "Gagal menambahkan data " +
          req.body.email +
          ". " +
          (error as Error).message,
      });
    }
  } else if (req.method === "GET") {
    // Handle any other HTTP method
    // console.log(req.body);
    const layanans = await prisma.layanan.findMany({
      where: {
        id: {
          in: [1, 2, 3, 4, 5, 6, 7],
        },
      },
      include: {
        layananDetails: {
          select: {
            id: true,
            title: true,
            layanan: true,
          },
        },
      },
    });

    await prisma.$disconnect();
    // why prisma disconect ?
    res.status(200).json({
      error: false,
      message: "List overview berhasil diambil",
      data: layanans,
    });
  } else {
    res.status(200).json({ error: true, message: "Halaman tidak ditemukan!" });
  }
}

// const id = parseInt(req.body.id);

// delete req.body.id;
// const layanan = await prisma.layanan.update({
//   where: { id: id },
//   data: {
//     ...req.body,
//   },
// });

// console.log(layanan);
// await prisma.$disconnect();
// res.status(200).json({
//   error: false,
//   message: "Sukses mengupdate data",
// });
