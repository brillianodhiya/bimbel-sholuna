/* eslint-disable prettier/prettier */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Kurikulum = (props: Props) => {
  return (
    <div className="max-w-[85vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* nasional */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <div className="order-1">
          <Image
            fetchPriority="auto"
            alt="Kurikulum Nasional"
            className="rounded-xl"
            height={800}
            src="/ed-us-_y4FqRhxkR8-unsplash.jpg"
            width={800}
          />
        </div>

        <div className="order-2 mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                Kurikulum Nasional{" "}
              </h2>
              <p className="text-gray-500">
                Kurikulum Nasional adalah kurikulum yang disusun oleh pemerintah
                dan diterapkan di seluruh Indonesia. Kurikulum ini berlaku untuk
                semua jenjang pendidikan, mulai dari pendidikan anak Sekolah
                Dasar (SD) hingga pendidikan tinggi.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  SD (Matematika, IPA, IPS, Bahasa Indonesia)
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  SMP (Matematika, IPA, Bahasa indonesia, Bahasa Inggris)
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  SMA (Matematika wajib dan lanjut, Fisika, Kimia, Biologi,
                  Literasi Bahasa Indonesia, Bahasa Inggris, Bahasa Arab)
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Kuliah (Fisika dasar, fisika matematika, kalkulus)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      {/* internasional */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mt-20"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <div className="block sm:hidden">
          <Image
            fetchPriority="auto"
            alt="Kurikulum Internasional"
            className="rounded-xl"
            height={800}
            src="/ed-us-uHPfTGy-Lto-unsplash.jpg"
            width={800}
          />
        </div>
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                Kurikulum Internasional
              </h2>
              <p className="text-gray-500">
                Kurikulum Internasional adalah kurikulum yang disusun oleh
                lembaga pendidikan internasional. Kurikulum ini biasanya berlaku
                untuk sekolah-sekolah internasional di Indonesia.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Cambridge O level
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Cambridge IGCSE
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Cambridge A/AS Level
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:block hidden">
          <Image
            fetchPriority="auto"
            alt="Kurikulum Internasional"
            className="rounded-xl"
            height={800}
            src="/ed-us-uHPfTGy-Lto-unsplash.jpg"
            width={800}
          />
        </div>
      </motion.div>
      {/* utbk */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mt-20"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <div>
          <Image
            fetchPriority="auto"
            alt="UTBK"
            className="rounded-xl"
            height={800}
            src="/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg"
            width={800}
          />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                UTBK{" "}
              </h2>
              <p className="text-gray-500">
                UTBK adalah ujian yang digunakan sebagai syarat masuk perguruan
                tinggi negeri. UTBK terdiri dari beberapa tes, yaitu TPS,
                Literasi, dan Penalaran Matematika.
              </p>
            </div>
            <div className="flex flex-wrap flex-row gap-10">
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    TPS: Penalaran Umum.{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    TPS: Pengetahuan dan pemahaman Umum.
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    TPS: Pengetahuan dan pemahaman bacaan.
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    TPS: pengetahuan kuantitatif.
                  </span>
                </li>
              </ul>
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Literasi bahasa indonesia
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Literasi Bahasa Inggris.
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Penalaran Matematika
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      {/* OSN */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mt-20"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <div className="block sm:hidden">
          <Image
            fetchPriority="auto"
            alt="Kurikulum Internasional"
            className="rounded-xl"
            height={800}
            src="/anoushka-puri-f1YfrZ1o2r8-unsplash.jpg"
            width={800}
          />
        </div>
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                OSN
              </h2>
              <p className="text-gray-500">
                OSN adalah singkatan dari Olimpiade Sains Nasional. OSN adalah
                ajang perlombaan yang diikuti oleh siswa-siswa dari seluruh
                Indonesia. OSN terdiri dari beberapa bidang, seperti Matematika,
                Fisika, Kimia, Biologi, Astronomi, dan Informatika.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  OSN Matematika SD/Madrasah{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  OSN IPA SD/Madrasah{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  OSN Matematika SMP{" "}
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  OSN Fisika SMP{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:block hidden">
          <Image
            fetchPriority="auto"
            alt="Kurikulum Internasional"
            className="rounded-xl"
            height={800}
            src="/anoushka-puri-f1YfrZ1o2r8-unsplash.jpg"
            width={800}
          />
        </div>
      </motion.div>
      {/* Ujian Mandiri */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mt-20"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <div>
          <Image
            fetchPriority="auto"
            alt="Ujian Mandiri"
            className="rounded-xl"
            height={800}
            src="/jeswin-thomas--hgJu2ykh4E-unsplash.jpg"
            width={800}
          />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                Ujian Mandiri{" "}
              </h2>
              <p className="text-gray-500">
                Ujian Mandiri adalah ujian yang diselenggarakan oleh perguruan
                tinggi. Ujian Mandiri biasanya digunakan untuk masuk ke
                perguruan tinggi yang tidak menggunakan UTBK sebagai syarat
                penerimaan mahasiswa baru.
              </p>
            </div>
            <div className="flex flex-wrap flex-row gap-10">
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    IUP ITB{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    SM ITB{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    SIMAK KKI UI{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    UM UGM{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    TMBK UM{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    IUP Unair{" "}
                  </span>
                </li>
              </ul>
              <ul className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    IUP ITS{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    SM Undip{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    SM Unpad{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    SM IPB{" "}
                  </span>
                </li>

                <li className="flex space-x-3">
                  <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      fill="none"
                      height="32"
                      viewBox="0 0 32 32"
                      width="32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                        fill="#54BD95"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="text-sm sm:text-base text-gray-500">
                    Tes MAN IC Se Indonesia{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Kedinasan */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mt-20"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <div className="block sm:hidden">
          <Image
            fetchPriority="auto"
            alt="Kedinasan"
            className="rounded-xl"
            height={800}
            src="/kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
            width={800}
          />
        </div>
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                Kedinasan
              </h2>
              <p className="text-gray-500">
                Kedinasan adalah singkatan dari Kedinasan. Kedinasan adalah
                ajang perlombaan yang diikuti oleh siswa-siswa dari seluruh
                Indonesia. Kedinasan terdiri dari beberapa bidang, seperti
                Matematika, Fisika, Kimia, Biologi, Astronomi, dan Informatika.
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  PKN STAN{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  AKMIL{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  AKPOL{" "}
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  STIS{" "}
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  TES AL{" "}
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  TES AU{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:block hidden">
          <Image
            fetchPriority="auto"
            alt="Kedinasan"
            className="rounded-xl"
            height={800}
            src="/kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
            width={800}
          />
        </div>
      </motion.div>
      {/* Mengaji Qur'an Bersyahadah: */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32 mt-20"
        exit={{ opacity: 0, y: -20 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{
          scale: 1.05,
          transition: { duration: 0.5 },
        }}
      >
        <div>
          <Image
            fetchPriority="auto"
            alt="Mengaji Qur'an Bersyahadah"
            className="rounded-xl"
            height={800}
            src="/ed-us-iXUXMn_-nh8-unsplash.jpg"
            width={800}
          />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                {"Mengaji Qur'an Bersyahadah"}{" "}
              </h2>
              <p className="text-gray-500">
                {
                  "Mengaji Qur'an Bersyahadah adalah program belajar mengaji Al-Qur'an yang dilakukan secara online. Program ini dilakukan oleh pengajar Qur'an bersyahadah (tersertifikasi)"
                }
              </p>
            </div>

            <ul className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Metode Ummi{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Metode Tilawati{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  Metode Bil Qolam{" "}
                </span>
              </li>

              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  {" Metode Iqra'"}
                </span>
              </li>
              <li className="flex space-x-3">
                <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                  <svg
                    fill="none"
                    height="32"
                    viewBox="0 0 32 32"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.6318 19.8961L21.8379 13.4961L20.4021 12.1039L14.8858 17.7926L11.5695 14.6357L10.1905 16.0843L14.2245 19.9243L14.9421 20.6074L15.6318 19.8961Z"
                      fill="#54BD95"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>

                <span className="text-sm sm:text-base text-gray-500">
                  {" Metode As-Syafii"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Kurikulum;
