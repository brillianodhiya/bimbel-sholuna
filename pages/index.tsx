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

type Overview = {
  data: {
    id: string;
    title: string;
    slogan: string;
    deskripsi: string;
    deskripsi2: string;
    nomor_wa: string;
    text_chat_wa: string;
    label_wa: string;
  };
};

export const getStaticProps = (async (context) => {
  // Fetch data from external API
  // Add whatever `Cache-Control` value you want here
  // context.res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10000, stale-while-revalidate=59"
  // );
  const res = await fetch("https://bimbelsholuna.com/api/overview");
  const overview: Overview = await res.json();
  // Pass data to the page via props

  return { props: { overview }, revalidate: 10 };
}) satisfies GetStaticProps<{ overview: Overview }>;

export default function IndexPage({
  overview,
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
                  {overview.data.title} <br /> {overview.data.slogan}
                </h1>
                <p className="mt-10 text-lg text-[#085C79] ">
                  {overview.data.deskripsi}
                </p>
                <p className="mt-10 text-lg text-[#085C79] ">
                  {overview.data.deskripsi2}
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
                      `https://wa.me/${overview.data.nomor_wa}?text=${overview.data.text_chat_wa}`,
                      "_blank"
                    );
                  }}
                >
                  {overview.data.label_wa}
                </Button>
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
        <LayananSection />
      </section>

      <section
        className="w-full z-20 flex flex-row flex-wrap py-8 md:py-10"
        id="testimoni"
      >
        <Testimonials />
      </section>

      <section
        className="w-full z-20 flex flex-row flex-wrap py-8 md:py-10"
        id="kurikulum"
      >
        <Kurikulum />
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
    </DefaultLayout>
  );
}
