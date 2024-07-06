/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Pengajar = (props: Props) => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto object-cover"
      initial={{ y: 20, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      whileInView={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Profil Pengajar Terbaik
        </h2>
        <p className="mt-1 text-gray-600">
          Berikut adalah profil pengajar terbaik kami.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        <div className="text-center">
          <Image
            alt="Kak Kris"
            className="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover"
            height={900}
            src="/Guru_1.jpeg"
            width={900}
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Kak Kris
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Alumni Univ.Negeri Malang (Guru fisika, matematika, IUP, UTBK, dan
              OSN)
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            alt="Kak Fillah"
            className="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover"
            height={900}
            src="/Guru_2.jpeg"
            width={900}
          />

          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Kak Fillah
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Alumni Univ.Airlangga (Guru Kimia)
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            alt="Kak Wulan"
            className="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover"
            height={900}
            src="/Guru_3.jpeg"
            width={900}
          />

          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Kak Wulan
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Alumni Univ.Negeri Surabaya (Guru Biologi)
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            alt="Kak Hasya"
            className="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover"
            height={900}
            src="/Guru_4.jpeg"
            width={900}
          />

          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Kak Hasya
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              ITS (Guru fisika dan matematika)
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            alt="Kak Nuris"
            className="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover"
            height={900}
            src="/Guru_5.jpeg"
            width={900}
          />

          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Kak Nuris
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              S2 dan Dosen bahasa Inggris
            </p>
          </div>
        </div>

        <div className="text-center">
          <Image
            alt="Kak Hasya"
            className="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover"
            height={900}
            src="/Guru_6.jpeg"
            width={900}
          />

          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
              Kak Irma{" "}
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
              ASN Guru IPS dan Sejarah{" "}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pengajar;
