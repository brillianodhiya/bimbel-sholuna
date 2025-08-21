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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
              openZoomedImage(
                "/Nathan, Kelas Internasional IUP 2025 diterima di ITB, Binus, UWA Australia, dan UNSW Australia.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Nathan, Kelas Internasional IUP 2025 diterima di ITB, Binus, UWA Australia, dan UNSW Australia"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Nathan, Kelas Internasional IUP 2025 diterima di ITB, Binus, UWA Australia, dan UNSW Australia.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Nathan, Kelas Internasional IUP 2025 diterima di ITB, Binus, UWA
                Australia, dan UNSW Australia
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Pak Agung, ayah Daffa Kelas IUP ITB 2025, diterima di ITB.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Pak Agung, ayah Daffa Kelas IUP ITB 2025, diterima di ITB"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Pak Agung, ayah Daffa Kelas IUP ITB 2025, diterima di ITB.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Pak Agung, ayah Daffa Kelas IUP ITB 2025, diterima di ITB
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Fachri Maula Akhtar, Kelas UTBK 2025. Diterima di Polbatam dan Unair.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Fachri Maula Akhtar, Kelas UTBK 2025. Diterima di Polbatam dan Unair"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Fachri Maula Akhtar, Kelas UTBK 2025. Diterima di Polbatam dan Unair.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Fachri Maula Akhtar, Kelas UTBK 2025. Diterima di Polbatam dan
                Unair
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage("/Fachri Maula Akhtar, Unair 2025.jpeg");
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Fachri Maula Akhtar, Unair 2025"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Fachri Maula Akhtar, Unair 2025.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Fachri Maula Akhtar, Unair 2025
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Izaz Jati Naila Afkar, Kelas UTBK 2025, diterima Sastra Inggris UM.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Izaz Jati Naila Afkar, Kelas UTBK 2025, diterima Sastra Inggris UM"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Izaz Jati Naila Afkar, Kelas UTBK 2025, diterima Sastra Inggris UM.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Izaz Jati Naila Afkar, Kelas UTBK 2025, diterima Sastra Inggris
                UM
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Valerie, Kelas IUP 2025, diterima FKG Unpad.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Valerie, Kelas IUP 2025, diterima FKG Unpad"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Valerie, Kelas IUP 2025, diterima FKG Unpad.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Valerie, Kelas IUP 2025, diterima FKG Unpad
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Ival, Kelas UTBK 2025, Sistem Informasi Univeristas Mulawarman.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Ival, Kelas UTBK 2025, Sistem Informasi Univeristas Mulawarman"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Ival, Kelas UTBK 2025, Sistem Informasi Univeristas Mulawarman.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Ival, Kelas UTBK 2025, Sistem Informasi Univeristas Mulawarman
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage("/Helva, Kelas UTBK 2025, STEI-R ITB.jpeg");
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Helva, Kelas UTBK 2025, STEI-R ITB"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Helva, Kelas UTBK 2025, STEI-R ITB.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Helva, Kelas UTBK 2025, STEI-R ITB
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Naila SMA Pradita Dirgantara, Kelas UTBK 2025, Akuntasi UGM.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Naila SMA Pradita Dirgantara, Kelas UTBK 2025, Akuntasi UGM"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Naila SMA Pradita Dirgantara, Kelas UTBK 2025, Akuntasi UGM.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Naila SMA Pradita Dirgantara, Kelas UTBK 2025, Akuntasi UGM
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Hanif, Privat Mulai 11 SMA, Kelas IUP 2025, Teknik Sipil ITS.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Hanif, Privat Mulai 11 SMA, Kelas IUP 2025, Teknik Sipil ITS"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Hanif, Privat Mulai 11 SMA, Kelas IUP 2025, Teknik Sipil ITS.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Hanif, Privat Mulai 11 SMA, Kelas IUP 2025, Teknik Sipil ITS
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Fakhry Dhiyaul Haq Mujahid, 3 tahun Privat, Teknik Kimia ITS 2025.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Fakhry Dhiyaul Haq Mujahid, 3 tahun Privat, Teknik Kimia ITS 2025"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Fakhry Dhiyaul Haq Mujahid, 3 tahun Privat, Teknik Kimia ITS 2025.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Fakhry Dhiyaul Haq Mujahid, 3 tahun Privat, Teknik Kimia ITS
                2025
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Fadlan, Mulai kelas 11 SMA, Teknik Elektro UB dan Teknik Elektro UI.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Fadlan, Mulai kelas 11 SMA, Teknik Elektro UB dan Teknik Elektro UI"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Fadlan, Mulai kelas 11 SMA, Teknik Elektro UB dan Teknik Elektro UI.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Fadlan, Mulai kelas 11 SMA, Teknik Elektro UB dan Teknik Elektro
                UI
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage("/Bianca Luna, SMA Al Mahira, FKG Unair.jpeg");
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Bianca Luna, SMA Al Mahira, FKG Unair"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Bianca Luna, SMA Al Mahira, FKG Unair.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Bianca Luna, SMA Al Mahira, FKG Unair
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Heslian, Privat sejak kelas 10 SMA, Kedokteran Universitas Palangkaraya.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Heslian, Privat sejak kelas 10 SMA, Kedokteran Universitas Palangkaraya"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Heslian, Privat sejak kelas 10 SMA, Kedokteran Universitas Palangkaraya.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Heslian, Privat sejak kelas 10 SMA, Kedokteran Universitas
                Palangkaraya
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage(
                "/Elvira, Kelas UTBK 2025, Satra Inggris Universitas Diponegoro.jpeg"
              );
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Elvira, Kelas UTBK 2025, Satra Inggris Universitas Diponegoro"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Elvira, Kelas UTBK 2025, Satra Inggris Universitas Diponegoro.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Elvira, Kelas UTBK 2025, Satra Inggris Universitas Diponegoro
              </div>
            </div>
          </button>
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage("/Bianca Luna, SMA Al Mahira, FKG Unair.jpeg");
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
                alt="Bianca Luna, SMA Al Mahira, FKG Unair"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                height={500}
                src="/Bianca Luna, SMA Al Mahira, FKG Unair.jpeg"
                width={500}
              />
            </div>
            <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
              <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
                Bianca Luna, SMA Al Mahira, FKG Unair
              </div>
            </div>
          </button>

          {/* old */}
          <button
            className="group relative block rounded-xl overflow-hidden md:w-1/4 sm:w-[40%] w-full"
            onClick={() => {
              openZoomedImage("/Beberapa Prestasi siswa 1.jpeg");
            }}
          >
            <div className="">
              <Image
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
                fetchPriority="auto"
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
            fetchPriority="auto"
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
