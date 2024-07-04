/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
type Props = {};

const data = [
  {
    id: 1,
    nama: "Albert William Wibisono",
    pekerjaan: "Kuliah 2 kampus sekaligus Atmajaya dan London School",
    testimoni:
      "Belajar di Sholuna sangat asyik, selalu ada saat saya butuh bantuan, metode mengajarnya benar benar asyik dan memahamkan, 3 tahun SMA saya bersama Sholuna hingga akhirnya di 2024 saya diterima kuliah di Kampus Atmajaya dan London School sekaligus serta full beasiswa",
    foto: "/testimoni_1.jpeg",
  },
  {
    id: 2,
    nama: "Siti Khairunnisa",
    pekerjaan: "Administrasi Public UB",
    testimoni:
      "Guru guru di Sholuna bisa menjadi pengajar sekaligus sahabat dalam belajar saya yang penuh kekeluargaan, 6 tahun mendampingi belajar mulai SMP kelas 7 hingga akhirnya bisa diterima SNBP Univ.Brawijaya",
    foto: "/testimoni_22.jpeg",
  },
  {
    id: 3,
    nama: "M.Hanif Dzakwan",
    pekerjaan: "Teknik mesin UB",
    testimoni:
      "Pengajar di Sholuna benar benar Sabar dan Solutif. Mampu memahamkan konsep dengan baik dan menghadirkan cara cara mudah dan cepat dalam belajar",
    foto: "/testimoni_3.jpeg",
  },
  {
    id: 4,
    nama: "Ashila Kisan",
    pekerjaan: "UTBK FTTM ITB",
    testimoni:
      "Terima kasih yang sangat besar kepada para pengajar Sholuna, pendampingan belajar dan soal soal latihan  yang diberikan benar benar berkualitas, sangat membantu saya sampai diterima di FTTM ITB dengan score UTBK di atas ekspektasi saya",
    foto: "/testimoni_4.jpeg",
  },
  {
    id: 5,
    nama: "Kika",
    pekerjaan: "Man IC Serpong",
    testimoni:
      "Alhamdulillah masyaAllah belajar di Sholuna sangat bermanfaat, hanya dengan persiapan intensif 2 bulan saya berhasil di terima di MAN Unggulan IC Serpong. Terima kasih para Guru semuanya",
    foto: "/testimoni_5.jpeg",
  },
  {
    id: 6,
    nama: "Alifia",
    pekerjaan: "SNBP Kriminologi UI",
    testimoni:
      "Bimbel Sholuna its the best solution for my study. Sejak kelas 3 SMP hingga mengantarkan saya ke sekolah SMA favorit di Bekasi. SMA lanjut bimbingan sampai akhirnya diterima SNBP kriminologi Univ.Indonesia, semoga tambah maju ya kak Sholuna nya. Aamiin",
    foto: "/testimoni_6.jpeg",
  },
];

const Testimonials = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => (prevIndex + 3) % data.length);
      }
    }, 3000); // Ganti dengan durasi yang diinginkan (dalam milidetik)

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 3) % data.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 3 + data.length) % data.length);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
    >
      <div className="overflow-hidden bg-gray-800">
        <div className="relative flex flex-col max-w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="text-center z-20 mb-24">
            <h1 className="text-3xl font-bold text-[#34D399] sm:text-4xl">
              Apa Kata Mereka{" "}
            </h1>
            <p className="mt-1 text-[#F9F8FE]">
              Berbagai kisah sukses dan inspiratif bersama sobat sholuna{" "}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
            {data.slice(activeIndex, activeIndex + 3).map((val, idx) => {
              return (
                <motion.div
                  key={val.nama + idx}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex h-auto min-h-[280px]"
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col bg-white rounded-xl">
                    <div className="flex-auto p-4 md:p-6">
                      <p className="text-base italic md:text-lg text-gray-800">
                        {`" ${val.testimoni} "`}
                      </p>
                    </div>

                    <div className="p-4 bg-gray-100 rounded-b-xl md:px-7">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            alt={val.nama}
                            className="border-2 border-solid border-green-500 size-8 sm:h-[2.875rem] sm:w-[2.875rem] rounded-full object-cover object-top"
                            height={200}
                            src={val.foto}
                            width={200}
                          />
                        </div>

                        <div className="grow ms-3">
                          <p className="text-sm sm:text-base font-semibold text-gray-800">
                            {val.nama}
                          </p>
                          <p className="text-xs text-gray-500">
                            {val.pekerjaan}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 z-20 w-full text-center" id="dot-indicator">
            {data.slice(activeIndex, activeIndex - 4).map((_, idx) => {
              // active index adalah 3 item jadi saya buat dot menjadi 3 tetapi span nya masih belum
              // saya berikan fungsi onClick

              return (
                <span
                  key={idx}
                  className={`${
                    (activeIndex == 0 ? activeIndex : activeIndex - 2) === idx
                      ? "bg-[#34D399]"
                      : "bg-white"
                  } h-2 w-2 mx-1 rounded-full cursor-pointer z-20 inline-block`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
