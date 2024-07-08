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
  if (req.method === "POST") {
    try {
      let id = req.body.layananId; // expect 1, 2, 3, 4, 5, 6, 7

      id = listId[parseInt(id) - 1];

      let data: { title: any; layananId: any }[] = [];

      if (req.body.title.length > 0) {
        req.body.title.map((item: any) => {
          data.push({
            title: item,
            layananId: id,
          });
        });
      }

      const layanan = await prisma.layananDetail.createMany({
        data: data,
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
  } else if (req.method === "DELETE") {
    // Handle any other HTTP method
    // console.log(req.body);
    try {
      let id = req.query.idDetailLayanan?.toString();
      const layanan = await prisma.layananDetail.delete({
        where: { id: id },
      });

      await prisma.$disconnect();
      res.status(200).json({
        error: false,
        message: "Sukses menghapus data",
        data: layanan,
      });
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      // process.exit(1);
      res.status(200).json({
        error: true,
        message:
          "Gagal menghapus data " +
          req.query.idDetailLayanan +
          ". " +
          (error as Error).message,
      });
    }
  } else if (req.method === "PATCH") {
    try {
      const id = req.body.idDetailLayanan
        ? req.body.idDetailLayanan.toString()
        : "";

      delete req.body.idDetailLayanan;
      const layanan = await prisma.layananDetail.update({
        where: { id: id },
        data: req.body,
      });

      await prisma.$disconnect();
      res.status(200).json({
        error: false,
        message: "Sukses mengupdate data",
        data: layanan,
      });
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      // process.exit(1);
      res.status(200).json({
        error: true,
        message:
          "Gagal mengupdate data " +
          req.body.id +
          ". " +
          (error as Error).message,
      });
    }
  } else {
    res.status(200).json({
      error: true,
      message: "Halaman tidak ditemukan!",
      data: req.method,
    });
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
