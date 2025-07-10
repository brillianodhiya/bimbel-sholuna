/* eslint-disable prettier/prettier */
import type {
  // InferGetServerSidePropsType,
  // GetServerSideProps,
  InferGetStaticPropsType,
  GetStaticProps,
} from "next";

import Image from "next/image";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import DefaultLayout from "@/layouts/default";
import { WhatsappLogo } from "@/components/icons";
import Pengajar from "@/components/Pengajar";
import Galeri from "@/components/Galeri";
// import LayananSection from "@/components/LayananSection";
// import Testimonials from "@/components/Testimonials";
// import Kurikulum from "@/components/Kurikulum";
const LayananSection = dynamic(() => import("@/components/LayananSection"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Kurikulum = dynamic(() => import("@/components/Kurikulum"));

type Data = {
  data: {
    overview: {
      id: string;
      title: string;
      slogan: string;
      deskripsi: string;
      deskripsi2: string;
      nomor_wa: string;
      text_chat_wa: string;
      label_wa: string;
      text_dibawah_wa?: string;
      title_layanan?: string;
      subtitle_layanan?: string;
      title_testimoni?: string;
      subtitle_testimoni?: string;
    };
    sistem: {
      id: string;
      title: string;
      deskripsi: string;
      icon: string;
    }[];
    layanan: {
      id: string;
      title: string;
      deskripsi: string;
      deksripsi_panjang: string;
      layananDetails: {
        id: string;
        title: string;
      }[];
    }[];
  };
};

export const getStaticProps = (async (context) => {
  // Fetch data from external API
  // Add whatever `Cache-Control` value you want here
  // context.res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10000, stale-while-revalidate=59"
  // );
  const res = await fetch(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://bimbel-sholuna.vercel.app"
  );
  const data: Data = await res.json();
  // Pass data to the page via props

  return { props: { data }, revalidate: 10 };
}) satisfies GetStaticProps<{ data: Data }>;

export default function IndexPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(overview);
  return (
    <DefaultLayout>
      <Image
        alt="Ellipse"
        className="absolute left-0 top-0 z-10 opacity-20"
        fetchPriority="auto"
        height={2000}
        src={"/Ellipse 145.svg"}
        width={2000}
        // fetchPriority="auto"
      />
      <Image
        alt="Ellipse"
        className="absolute right-0 top-0 z-10 opacity-20"
        fetchPriority="auto"
        height={2000}
        src={"/Ellipse 144.svg"}
        width={2000}
        // fetchPriority="auto"
      />
      <section
        className="w-full z-20 flex flex-row flex-wrap justify-between gap-4 py-8 md:py-10"
        id="home"
      >
        <div className="mx-auto px-4 sm:px-6 z-20 w-full">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center w-full">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              whileInView={{
                scale: 1.05,
                transition: { duration: 0.5 },
              }}
            >
              <div className="ml-0 sm:ml-[8vw]">
                <h1 className="block text-3xl font-bold text-[#085C79] sm:text-4xl lg:text-6xl lg:leading-tight">
                  {data.data.overview.title} <br /> {data.data.overview.slogan}
                </h1>
                <p className="mt-10 text-lg text-[#085C79] ">
                  {data.data.overview.deskripsi}
                </p>
                <p className="mt-10 text-lg text-[#085C79] ">
                  {data.data.overview.deskripsi2}
                </p>
                <Button
                  // color="#059669"
                  className="bg-[#059669] mt-10 font-bold rounded-full"
                  color="primary"
                  size="lg"
                  startContent={<WhatsappLogo />}
                  variant="solid"
                  onClick={() => {
                    window.open(
                      `https://wa.me/${data.data.overview.nomor_wa}?text=${data.data.overview.text_chat_wa}`,
                      "_blank"
                    );
                  }}
                >
                  {data.data.overview.label_wa}
                </Button>
                <p className="pl-4 text-[#085C79] text-sm">
                  {data.data.overview.text_dibawah_wa}
                </p>
                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  {/* <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Get started
                  <svg
                    className="flex-shrink-0 size-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  href="#"
                >
                  Contact sales team
                </a> */}
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative ms-4">
                <div className="w-full text-center flex justify-center content-center items-center">
                  <div className="bg-[#34D399] w-2/3 h-[85%] absolute rounded-[30px] z-20 top-0" />
                  <Image
                    alt="Banner-Bimbel-Sholuna"
                    className="w-2/3 rounded-md z-30 relative"
                    fetchPriority="auto"
                    height={385}
                    loading="eager"
                    sizes="
                    (max-width: 640px) 180px,
                    (max-width: 768px) 260px,
                    (max-width: 1024px) 300px,
                    385px"
                    src="/banner-home.png"
                    width={385}
                    // fetchPriority="high"
                    rel="preload"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="w-full z-20 flex flex-row flex-wrap justify-between gap-4 py-8 md:py-10"
        id="layanan"
      >
        <LayananSection
          layanan={data.data.layanan}
          overview={data.data.overview}
          sistem={data.data.sistem}
        />
      </section>

      <section
        className="w-full z-20 flex flex-row flex-wrap py-8 md:py-10"
        id="testimoni"
      >
        <Testimonials overview={data.data.overview} />
      </section>

      <section
        className="w-full z-20 flex flex-row flex-wrap py-8 md:py-10"
        id="kurikulum"
      >
        <Kurikulum layanan={data.data.layanan} />
      </section>
      <section
        className="w-full z-20 flex flex-row flex-wrap py-8 md:py-10"
        id="pengajar"
      >
        <Pengajar />
      </section>
      <section
        className="w-full z-20 flex flex-row flex-wrap py-8 md:py-10"
        id="galeri"
      >
        <Galeri />
      </section>
      <a
        className="fixed z-50 bottom-10 right-8 bg-green-600 w-fit rounded-full drop-shadow-lg flex justify-center items-center text-white text-lg font-semibold p-4 hover:bg-[#e7ad08] hover:drop-shadow-2xl hover:animate-bounce duration-300"
        href={`https://wa.me/${data.data.overview.nomor_wa}?text=${data.data.overview.text_chat_wa}`}
        rel="noopener noreferrer"
        target="_blank"
        title={data.data.overview.label_wa}
      >
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
            fill="currentColor"
          />
          <path
            clipRule="evenodd"
            d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </a>
    </DefaultLayout>
  );
}
