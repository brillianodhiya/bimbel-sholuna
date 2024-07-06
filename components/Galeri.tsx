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
      className="max-w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto items-center mt-20"
      initial={{ y: 20, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      whileInView={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 mt-10">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Galeri Belajar Asyik Dan Prestasi
        </h2>
        <p className="mt-1 text-gray-600">
          Berbagai kegiatan belajar yang asyik dan menyenangkan.
        </p>
      </div>
      <div className="max-w-[85vw] px-4 py-8 sm:px-6 lg:px-8 lg:py-8 mx-auto">
        <div className="flex flex-wrap gap-8 w-full justify-center">
          <button
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/1 Persiapan masuk MAN IC Serpong.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="1 Persiapan masuk MAN IC Serpong"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/1 Persiapan masuk MAN IC Serpong.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Persiapan masuk MAN IC Serpong
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/2 Persiapan masuk MAN IC Serpong 2.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="2 Persiapan masuk MAN IC Serpong 2"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/2 Persiapan masuk MAN IC Serpong 2.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Persiapan masuk MAN IC Serpong
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/3 Persiapan SM ITB.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="3 Persiapan SM ITB"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/3 Persiapan SM ITB.jpeg"
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
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/4 Persiapan CBT UGM.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="4 Persiapan CBT UGM"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/4 Persiapan CBT UGM.jpeg"
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
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/5 Persiapan UTBK TPS.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="5 Persiapan UTBK TPS"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/5 Persiapan UTBK TPS.jpeg"
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
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/6 Persiapan Simak KKI UI.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="6 Persiapan Simak KKI UI"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/6 Persiapan Simak KKI UI.jpeg"
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
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/7 Persiapan UTBK Penalaran MTK.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="7 Persiapan UTBK Penalaran MTK"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/7 Persiapan UTBK Penalaran MTK.jpeg"
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
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage(
                "/8 Persiapan mandiri kelas internasional (IUP) ITB.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                alt="8 Persiapan mandiri kelas internasional (IUP) ITB"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/8 Persiapan mandiri kelas internasional (IUP) ITB.jpeg"
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
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/9 Persiapan KSN MTK SD.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="9 Persiapan KSN MTK SD"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/9 Persiapan KSN MTK SD.jpeg"
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
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage("/1 Galeri belajar kimia SMA.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="1 Galeri belajar kimia SMA"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/1 Galeri belajar kimia SMA.jpeg"
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
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/2 Galeri  Belajar biologi SMA.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="2 Galeri  Belajar biologi SMA"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/2 Galeri  Belajar biologi SMA.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Galeri Belajar biologi SMA
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden sm:w-1/4 w-full"
            onClick={() => {
              openZoomedImage("/3 Galeri Belajar MTK SMP.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="3 Galeri Belajar MTK SMP"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/3 Galeri Belajar MTK SMP.jpeg"
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
      </div>
      <div className="max-w-2xl mx-auto text-center mb-4 mt-10">
        <h4 className="text-2xl font-bold md:text-2xl md:leading-tight">
          Beberapa Prestasi Siswa
        </h4>
      </div>
      <div className="max-w-[85vw] px-4 py-8 sm:px-6 lg:px-8 lg:py-8 mx-auto">
        <div className="flex flex-wrap gap-8 w-full justify-center items-start">
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
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
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
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
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
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
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
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
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
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
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
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
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage("/Beberapa Prestasi siswa 7.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="Beberapa Prestasi siswa 7"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Beberapa Prestasi siswa 7.jpeg"
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
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage("/Beberapa Prestasi siswa 8.jpeg");
            }}
          >
            <div className="">
              <Image
                alt="Beberapa Prestasi siswa 8"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Beberapa Prestasi siswa 8.jpeg"
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
