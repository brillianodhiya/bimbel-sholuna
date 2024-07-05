/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

const Galeri = (props: Props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []);

  // State variable for managing zoomed image
  const [zoomedImage, setZoomedImage] = useState(null);
  // Function to open zoomed image
  const openZoomedImage = (imageUrl: any) => {
    setZoomedImage(imageUrl);
  };
  // Function to close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      className="max-w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto items-center"
      initial={{ y: 20, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      whileInView={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 mt-10">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Aaleri Belajar Asyik
        </h2>
        <p className="mt-1 text-gray-600">
          Berbagai kegiatan belajar yang asyik dan menyenangkan.
        </p>
      </div>
      <div className="max-w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="space-y-2">
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Persiapan CBT UGM.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Persiapan CBT UGM"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Persiapan CBT UGM.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Persiapan CBT UGM
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Persiapan KSN MTK SD.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Persiapan KSN MTK SD"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Persiapan KSN MTK SD.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Persiapan KSN MTK SD
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Persiapan KSN MTK SD2.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Persiapan KSN MTK SD"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Persiapan KSN MTK SD2.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Persiapan KSN MTK SD
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Persiapan UTBK Penalaran MTK.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Persiapan UTBK Penalaran MTK"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Persiapan UTBK Penalaran MTK.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Persiapan UTBK Penalaran MTK
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Persiapan UTBK TPS.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Persiapan UTBK TPS"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Persiapan UTBK TPS.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Persiapan UTBK TPS
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Galeri Belajar MTK SMP.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Galeri Belajar MTK SMP"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Galeri Belajar MTK SMP.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Galeri Belajar MTK SMP
                </div>
              </div>
            </button>
          </div>
          <div className="space-y-2">
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage(
                  "/Persiapan mandiri kelas internasional (IUP) ITB.jpeg"
                );
              }}
            >
              <div className="">
                <Image
                  alt="Persiapan mandiri kelas internasional (IUP) ITB"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Persiapan mandiri kelas internasional (IUP) ITB.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Persiapan mandiri kelas internasional (IUP) ITB
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Persiapan Simak KKI UI.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Persiapan Simak KKI UI"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Persiapan Simak KKI UI.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Persiapan Simak KKI UI
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Persiapan SM ITB.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Persiapan SM ITB"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Persiapan SM ITB.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Persiapan SM ITB
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Persiapan SM ITB 2.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Persiapan SM ITB 2"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Persiapan SM ITB 2.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Persiapan SM ITB
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Galeri belajar kimia SMA.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Galeri belajar kimia SMA"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Galeri belajar kimia SMA.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Galeri belajar kimia SMA
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Galeri  Belajar biologi SMA.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Galeri  Belajar biologi SMA"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Galeri  Belajar biologi SMA.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Galeri Belajar biologi SMA
                </div>
              </div>
            </button>
          </div>
          <div className="space-y-2">
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Beberapa Prestasi siswa 3.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Beberapa Prestasi siswa 3"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Beberapa Prestasi siswa 3.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Beberapa Prestasi siswa
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Beberapa Prestasi siswa 4.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Beberapa Prestasi siswa 4"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Beberapa Prestasi siswa 4.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Beberapa Prestasi siswa
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Beberapa Prestasi siswa 5.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Beberapa Prestasi siswa 5"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Beberapa Prestasi siswa 5.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Beberapa Prestasi siswa
                </div>
              </div>
            </button>
          </div>
          <div className="space-y-2">
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Beberapa Prestasi siswa 1.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Beberapa Prestasi siswa 1"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Beberapa Prestasi siswa 1.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Beberapa Prestasi siswa
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Beberapa Prestasi siswa 2.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Beberapa Prestasi siswa 2"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Beberapa Prestasi siswa 2.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Beberapa Prestasi siswa
                </div>
              </div>
            </button>
            <button
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/Beberapa Prestasi siswa 6.jpeg");
              }}
            >
              <div className="">
                <Image
                  alt="Beberapa Prestasi siswa 6"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  height={500}
                  src="/Beberapa Prestasi siswa 6.jpeg"
                  width={500}
                />
              </div>
              <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                  Beberapa Prestasi siswa
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {zoomedImage && (
        <div
          className="zoomed-image-container"
          role="button"
          onClick={closeZoomedImage}
        >
          <Image
            alt="zoomed-image"
            layout="fill"
            objectFit="contain"
            src={zoomedImage}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Galeri;
