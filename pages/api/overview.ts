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
      const overviews = await prisma.overview.findFirst();

      if (!overviews) {
        const overview = await prisma.overview.create({
          data: req.body,
        });

        // console.log(overview);
        await prisma.$disconnect();
        res.status(200).json({
          error: false,
          message: "Sukses menambahkan data",
        });
      } else {
        const overview = await prisma.overview.update({
          where: { id: overviews.id },
          data: req.body,
        });

        // console.log(overview);
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
    const overviews = await prisma.overview.findFirst();

    await prisma.$disconnect();
    // why prisma disconect ?
    res.status(200).json({
      error: false,
      message: "List overview berhasil diambil",
      data: overviews,
    });
  } else {
    res.status(200).json({ error: true, message: "Halaman tidak ditemukan!" });
  }
}
