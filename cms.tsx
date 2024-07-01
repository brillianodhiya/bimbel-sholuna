import { Config, Field } from "alinea";
import { createCMS } from "alinea/next";

const Page = Config.type("Page", {
  fields: {
    title: Field.text("Title"),
    path: Field.path("Path"),
  },
});
const WebsiteDetail = Config.type("Website Detail", {
  fields: {
    title: Field.text("Judul"),
    judul_website: Field.text("Judul Website"),
    deskripsi: Field.text("Deskripsi"),
    logo: Field.image("Logo"),
    favicon: Field.image("Favicon"),
    slogan: Field.text("Slogan"),
    nomor_wa: Field.text("Nomor WA"),
    text_chat_wa: Field.text("Text Chat WA"),
    label_wa: Field.text("Label WA"),
  },
});

export const cms = createCMS({
  schema: {
    // Page,
    WebsiteDetail,
  },
  workspaces: {
    main: Config.workspace("CMS Bimbel Sholuna", {
      source: "content",
      mediaDir: "public",
      roots: {
        pages: Config.root("Edit Halaman", {
          contains: ["WebsiteDetail"],
          entries: {
            // welcome: Config.page(
            // Page({
            //   title: "Welcome",
            // })
            // ),

            WebsiteDetail: Config.page(
              WebsiteDetail({
                title: "Overview",
                judul_website: "Bimbel Sholuna",
                deskripsi:
                  "Bimbel Sholuna adalah bimbingan belajar online yang menyediakan layanan bimbingan belajar online untuk siswa SD, SMP, SMA, dan SMK.",
                // logo: "/images/logo.png",
                // favicon: "/images/favicon.png",
                slogan: "Bimbel Sholuna, Bimbingan Belajar Online Terbaik",
                nomor_wa: "6281234567890",
                text_chat_wa:
                  "Halo, saya ingin bertanya tentang bimbel Sholuna.",
                label_wa: "Chat WA",
              })
            ),
          },
        }),
        media: Config.media(),
      },
    }),
  },
});
