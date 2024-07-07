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
      const sistems = await prisma.sistem.findMany({
        // where: {
        //   id: {
        //     in: ["1", "2", "3"],
        //   },
        // },
      });

      if (sistems.length < 3) {
        const sistem = await prisma.sistem.create({
          data: req.body,
        });

        console.log(sistem);
        await prisma.$disconnect();
        res.status(200).json({
          error: false,
          message: "Sukses menambahkan data",
        });
      } else {
        res.status(200).json({
          error: true,
          message: "Data sistem sudah mencapai batas maksimal",
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
    const sistem = await prisma.sistem.findMany({
      select: {
        id: true,
        title: true,
        deskripsi: true,
        icon: req.query.icon ? true : false,
      },
    });

    await prisma.$disconnect();
    // why prisma disconect ?
    res.status(200).json({
      error: false,
      message: "List sistem berhasil diambil",
      data: sistem,
    });
  } else if (req.method === "PATCH") {
    try {
      const id = req.body.id ? req.body.id.toString() : "";

      delete req.body.id;
      const sistem = await prisma.sistem.update({
        where: { id: id },
        data: req.body,
      });

      console.log(sistem);
      await prisma.$disconnect();
      res.status(200).json({
        error: false,
        message: "Sukses mengupdate data",
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
  } else {
    res.status(200).json({ error: true, message: "Halaman tidak ditemukan!" });
  }
}
