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
      const layanans = await prisma.layanan.findMany({
        where: {
          id: {
            in: [1, 2, 3],
          },
        },
      });

      if (layanans.length < 4) {
        const layanan = await prisma.layanan.create({
          data: req.body,
        });

        console.log(layanan);
        await prisma.$disconnect();
        res.status(200).json({
          error: false,
          message: "Sukses menambahkan data",
        });
      } else {
        const layanan = await prisma.layanan.update({
          where: { id: req.body.id },
          data: req.body,
        });

        console.log(layanan);
        await prisma.$disconnect();
        res.status(200).json({
          error: false,
          message: "Sukses mengupdate data",
        });
      }
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
          in: [1, 2, 3],
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
