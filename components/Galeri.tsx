/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type GalleryImageProps = {
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
};

const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  onClick,
  className,
}) => (
  <button
    className={`group relative block rounded-xl overflow-hidden ${className}`}
    onClick={onClick}
  >
    <Image
      fetchPriority="auto"
      alt={alt}
      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
      height={500}
      src={src}
      width={500}
    />
    <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
      <div className="text-xs font-bold text-white rounded-lg half-black backdrop-saturate-150 p-2 md:text-lg text-center">
        {alt}
      </div>
    </div>
  </button>
);

const galeriBelajarImages = [
  {
    src: "/1 Persiapan masuk MAN IC Serpong.jpeg",
    alt: "Persiapan masuk MAN IC Serpong",
  },
  {
    src: "/2 Persiapan masuk MAN IC Serpong 2.jpeg",
    alt: "Persiapan masuk MAN IC Serpong",
  },
  { src: "/3 Persiapan SM ITB.jpeg", alt: "Persiapan SM ITB" },
  { src: "/4 Persiapan CBT UGM.jpeg", alt: "Persiapan CBT UGM" },
  { src: "/5 Persiapan UTBK TPS.jpeg", alt: "Persiapan UTBK TPS" },
  { src: "/6 Persiapan Simak KKI UI.jpeg", alt: "Persiapan Simak KKI UI" },
  {
    src: "/7 Persiapan UTBK Penalaran MTK.jpeg",
    alt: "Persiapan UTBK Penalaran MTK",
  },
  {
    src: "/8 Persiapan mandiri kelas internasional (IUP) ITB.jpeg",
    alt: "Persiapan mandiri kelas internasional (IUP) ITB",
  },
  { src: "/9 Persiapan KSN MTK SD.jpeg", alt: "Persiapan KSN MTK SD" },
  { src: "/1 Galeri belajar kimia SMA.jpeg", alt: "Galeri belajar kimia SMA" },
  {
    src: "/2 Galeri  Belajar biologi SMA.jpeg",
    alt: "Galeri Belajar biologi SMA",
  },
  { src: "/3 Galeri Belajar MTK SMP.jpeg", alt: "Galeri Belajar MTK SMP" },
];

const prestasiSiswaImages = [
  {
    src: "/Nathan, Kelas Internasional IUP 2025 diterima di ITB, Binus, UWA Australia, dan UNSW Australia.jpeg",
    alt: "Nathan, Kelas Internasional IUP 2025 diterima di ITB, Binus, UWA Australia, dan UNSW Australia",
  },
  {
    src: "/Pak Agung, ayah Daffa Kelas IUP ITB 2025, diterima di ITB.jpeg",
    alt: "Pak Agung, ayah Daffa Kelas IUP ITB 2025, diterima di ITB",
  },
  {
    src: "/Fachri Maula Akhtar, Kelas UTBK 2025. Diterima di Polbatam dan Unair.jpeg",
    alt: "Fachri Maula Akhtar, Kelas UTBK 2025. Diterima di Polbatam dan Unair",
  },
  {
    src: "/Fachri Maula Akhtar, Unair 2025.jpeg",
    alt: "Fachri Maula Akhtar, Unair 2025",
  },
  {
    src: "/Izaz Jati Naila Afkar, Kelas UTBK 2025, diterima Sastra Inggris UM.jpeg",
    alt: "Izaz Jati Naila Afkar, Kelas UTBK 2025, diterima Sastra Inggris UM",
  },
  {
    src: "/Valerie, Kelas IUP 2025, diterima FKG Unpad.jpeg",
    alt: "Valerie, Kelas IUP 2025, diterima FKG Unpad",
  },
  {
    src: "/Ival, Kelas UTBK 2025, Sistem Informasi Univeristas Mulawarman.jpeg",
    alt: "Ival, Kelas UTBK 2025, Sistem Informasi Univeristas Mulawarman",
  },
  {
    src: "/Helva, Kelas UTBK 2025, STEI-R ITB.jpeg",
    alt: "Helva, Kelas UTBK 2025, STEI-R ITB",
  },
  {
    src: "/Naila SMA Pradita Dirgantara, Kelas UTBK 2025, Akuntasi UGM.jpeg",
    alt: "Naila SMA Pradita Dirgantara, Kelas UTBK 2025, Akuntasi UGM",
  },
  {
    src: "/Hanif, Privat Mulai 11 SMA, Kelas IUP 2025, Teknik Sipil ITS.jpeg",
    alt: "Hanif, Privat Mulai 11 SMA, Kelas IUP 2025, Teknik Sipil ITS",
  },
  {
    src: "/Fakhry Dhiyaul Haq Mujahid, 3 tahun Privat, Teknik Kimia ITS 2025.jpeg",
    alt: "Fakhry Dhiyaul Haq Mujahid, 3 tahun Privat, Teknik Kimia ITS 2025",
  },
  {
    src: "/Fadlan, Mulai kelas 11 SMA, Teknik Elektro UB dan Teknik Elektro UI.jpeg",
    alt: "Fadlan, Mulai kelas 11 SMA, Teknik Elektro UB dan Teknik Elektro UI",
  },
  {
    src: "/Bianca Luna, SMA Al Mahira, FKG Unair.jpeg",
    alt: "Bianca Luna, SMA Al Mahira, FKG Unair",
  },
  {
    src: "/Heslian, Privat sejak kelas 10 SMA, Kedokteran Universitas Palangkaraya.jpeg",
    alt: "Heslian, Privat sejak kelas 10 SMA, Kedokteran Universitas Palangkaraya",
  },
  {
    src: "/Elvira, Kelas UTBK 2025, Satra Inggris Universitas Diponegoro.jpeg",
    alt: "Elvira, Kelas UTBK 2025, Satra Inggris Universitas Diponegoro",
  },
  { src: "/Beberapa Prestasi siswa 1.jpeg", alt: "Beberapa Prestasi siswa" },
  { src: "/Beberapa Prestasi siswa 2.jpeg", alt: "Beberapa Prestasi siswa" },
  { src: "/Beberapa Prestasi siswa 3.jpeg", alt: "Beberapa Prestasi siswa" },
  { src: "/Beberapa Prestasi siswa 4.jpeg", alt: "Beberapa Prestasi siswa" },
  { src: "/Beberapa Prestasi siswa 5.jpeg", alt: "Beberapa Prestasi siswa" },
  { src: "/Beberapa Prestasi siswa 6.jpeg", alt: "Beberapa Prestasi siswa" },
  { src: "/Beberapa Prestasi siswa 7.jpeg", alt: "Beberapa Prestasi siswa" },
  { src: "/Beberapa Prestasi siswa 8.jpeg", alt: "Beberapa Prestasi siswa" },
];

const Galeri = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const openZoomedImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
  };

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
          {galeriBelajarImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => openZoomedImage(image.src)}
              className="sm:w-1/4 w-full"
            />
          ))}
        </div>
      </div>
      <div className="max-w-2xl mx-auto text-center mb-4 mt-10">
        <h4 className="text-2xl font-bold md:text-2xl md:leading-tight">
          Beberapa Prestasi Siswa
        </h4>
      </div>
      <div className="max-w-[85vw] px-4 py-8 sm:px-6 lg:px-8 lg:py-8 mx-auto">
        <div className="flex flex-wrap gap-8 w-full justify-center items-start">
          {prestasiSiswaImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={image.alt}
              onClick={() => openZoomedImage(image.src)}
              className="md:w-1/4 sm:w-[40%] w-full"
            />
          ))}
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
