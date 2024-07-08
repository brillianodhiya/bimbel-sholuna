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
  if (req.method === "PATCH") {
    try {
      const layanans = await prisma.layanan.findMany({
        // where: {
        //   id: {
        //     in: ["1", "2", "3", "4", "5", "6", "7"],
        //   },
        // },
      });

      // console.log(layanans);

      if (layanans.length < 7) {
        const layanan = await prisma.layanan.create({
          data: req.body,
        });

        await prisma.$disconnect();
        res.status(200).json({
          error: false,
          message: "Sukses menambahkan data",
        });
      } else {
        let id = req.body.id; // expect 1, 2, 3, 4, 5, 6, 7

        id = listId[parseInt(id) - 1];

        delete req.body.id;
        const layanan = await prisma.layanan.update({
          where: { id: id },
          data: {
            ...req.body,
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
      include: {
        layananDetails: {
          select: {
            id: true,
            title: true,
            // layanan: true,
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
      message: "List overview berhasil diambil",
      data: layanans,
    });
  } else {
    res.status(200).json({ error: true, message: "Halaman tidak ditemukan!" });
  }
}
