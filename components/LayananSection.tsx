/* eslint-disable prettier/prettier */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const LayananSection = (props: Props) => {
  return (
    <div className="max-w-[80vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto z-20">
      <div className="grid md:grid-cols-3 lg:grid-cols-3 items-center gap-40">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="text-center"
          // exit={{ opacity: 0, x: 20 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
            <svg
              fill="none"
              height="30"
              viewBox="0 0 43 43"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_140)" filter="url(#filter0_d_17_140)">
                <path
                  d="M39 17.5C39 7.85044 31.1492 0 21.5 0C19.8759 0 18.3102 0.239275 16.8169 0.655561L16.782 0.632416C16.7738 0.644152 16.768 0.656865 16.7598 0.669905C9.40977 2.74384 4 9.49439 4 17.5C4 27.1496 11.8504 35 21.5 35C23.125 35 24.6898 34.7607 26.1831 34.3444L26.218 34.3689C26.2262 34.3572 26.2333 34.3444 26.2402 34.3314C33.5899 32.2558 39 25.5043 39 17.5ZM5.74175 18.3505H12.0486C12.1116 20.2301 12.3215 22.0792 12.7019 23.8734H7.0532C6.29724 22.1678 5.84574 20.3058 5.74175 18.3505ZM37.2579 16.6505H30.9523C30.8881 14.7699 30.6795 12.9205 30.2978 11.1263H35.9468C36.7028 12.8322 37.1543 14.6942 37.2579 16.6505ZM29.2536 16.6505H22.3492V11.1263H28.5629C28.9641 12.9173 29.1871 14.7666 29.2536 16.6505ZM22.3505 9.42887V1.74175C23.1753 1.78609 23.985 1.87704 24.7726 2.04264C26.2402 4.31999 27.3707 6.80043 28.1267 9.42887H22.3505ZM20.6505 9.42887H14.7436C15.4402 6.84705 16.4889 4.39692 17.8633 2.13718C18.765 1.92365 19.696 1.79293 20.6505 1.74175V9.42887ZM20.6505 11.1266V16.6508H13.7275C13.7637 14.7712 13.9596 12.9209 14.3306 11.1266H20.6505ZM12.0301 16.6505H5.74077C5.84476 14.6939 6.29626 12.8309 7.05222 11.1263H12.609C12.2589 12.9267 12.0653 14.7734 12.0301 16.6505ZM13.7464 18.3505H20.6508V23.8734H14.4358C14.0355 22.0824 13.8129 20.2334 13.7464 18.3505ZM20.6505 25.5708V33.2579C19.8257 33.2136 19.0147 33.1226 18.2284 32.957C16.7608 30.6797 15.6303 28.1992 14.873 25.5708C14.8733 25.5708 20.6505 25.5708 20.6505 25.5708ZM22.3505 25.5708H28.2561C27.5585 28.1526 26.5108 30.6014 25.1364 32.8625C24.2347 33.0773 23.3037 33.2067 22.3492 33.2579V25.5708H22.3505ZM22.3505 23.8734V18.3505H29.2735C29.2373 20.2288 29.0414 22.0792 28.6691 23.8734H22.3505ZM30.9696 18.3505H37.2592C37.1552 20.3071 36.7037 22.1691 35.9478 23.8734H30.391C30.7411 22.0733 30.9347 20.2266 30.9696 18.3505ZM35.0601 9.42887H29.8811C29.2478 7.09904 28.3552 4.86732 27.1966 2.77774C30.5008 4.05985 33.2623 6.42 35.0601 9.42887ZM15.481 2.89575C14.4019 4.95599 13.5746 7.14696 12.9947 9.42789H7.93989C9.68034 6.51682 12.3173 4.20459 15.481 2.89575ZM7.93989 25.5708H13.1198C13.7522 27.9006 14.6448 30.1324 15.803 32.2219C12.4992 30.9398 9.73771 28.5797 7.93989 25.5708ZM27.5187 32.1043C28.5977 30.044 29.4251 27.853 30.005 25.5721H35.0601C33.3193 28.4829 30.6828 30.7951 27.5187 32.1043Z"
                  fill="#085C79"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="43"
                  id="filter0_d_17_140"
                  width="43"
                  x="0"
                  y="0"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_17_140"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_17_140"
                    mode="normal"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_17_140">
                  <rect
                    fill="white"
                    height="35"
                    transform="translate(4)"
                    width="35"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Sistem Belajar Online
            </h3>
            <p className="mt-1 text-gray-600">
              Pembelajaran dapat diakses dimanapun dan kapanpun
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
            <svg
              fill="none"
              height="26"
              viewBox="0 0 35 35"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.125 2.91666C9.30417 2.91666 6.19792 6.02291 6.19792 9.84374C6.19792 13.5917 9.12917 16.625 12.95 16.7562C13.0667 16.7417 13.1833 16.7417 13.2708 16.7562C13.3 16.7562 13.3146 16.7562 13.3437 16.7562C13.3583 16.7562 13.3583 16.7562 13.3729 16.7562C17.1063 16.625 20.0375 13.5917 20.0521 9.84374C20.0521 6.02291 16.9458 2.91666 13.125 2.91666Z"
                fill="#085C79"
                opacity="0.4"
              />
              <path
                d="M20.5333 20.6354C16.4646 17.9229 9.82917 17.9229 5.73125 20.6354C3.87917 21.875 2.85833 23.5521 2.85833 25.3458C2.85833 27.1396 3.87917 28.8021 5.71667 30.0271C7.75833 31.3979 10.4417 32.0833 13.125 32.0833C15.8083 32.0833 18.4917 31.3979 20.5333 30.0271C22.3708 28.7875 23.3917 27.125 23.3917 25.3167C23.3771 23.5229 22.3708 21.8604 20.5333 20.6354Z"
                fill="#085C79"
              />
              <path
                d="M29.1521 10.7042C29.3854 13.5333 27.3729 16.0125 24.5875 16.3479C24.5729 16.3479 24.5729 16.3479 24.5583 16.3479H24.5146C24.4271 16.3479 24.3396 16.3479 24.2667 16.3771C22.8521 16.45 21.5542 15.9979 20.5771 15.1667C22.0792 13.825 22.9396 11.8125 22.7646 9.62501C22.6625 8.44376 22.2542 7.3646 21.6417 6.44585C22.1958 6.16876 22.8375 5.99376 23.4938 5.93543C26.3521 5.68751 28.9042 7.81668 29.1521 10.7042Z"
                fill="#085C79"
                opacity="0.4"
              />
              <path
                d="M32.0688 24.1937C31.9521 25.6083 31.0479 26.8333 29.5312 27.6646C28.0729 28.4667 26.2354 28.8458 24.4125 28.8021C25.4625 27.8542 26.075 26.6729 26.1917 25.4187C26.3375 23.6104 25.4771 21.875 23.7563 20.4896C22.7792 19.7167 21.6417 19.1042 20.4021 18.6521C23.625 17.7187 27.6792 18.3458 30.1729 20.3583C31.5146 21.4375 32.2 22.7937 32.0688 24.1937Z"
                fill="#085C79"
              />
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Sistem Belajar Privat
            </h3>
            <p className="mt-1 text-gray-600">
              Pembelajaran dilakukan bersama satu murid dan satu guru{" "}
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="text-center"
          exit={{ opacity: 0, x: -20 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
            <svg
              fill="none"
              height="28"
              viewBox="0 0 35 35"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5646 11.3312C25.4625 11.3167 25.3604 11.3167 25.2584 11.3312C22.9979 11.2583 21.2042 9.40624 21.2042 7.13124C21.2042 4.81249 23.0854 2.91666 25.4188 2.91666C27.7375 2.91666 29.6334 4.79791 29.6334 7.13124C29.6188 9.40624 27.825 11.2583 25.5646 11.3312Z"
                fill="#085C79"
              />
              <path
                d="M30.3188 21.4375C28.6854 22.5313 26.3958 22.9396 24.2813 22.6625C24.8354 21.4667 25.1271 20.1396 25.1417 18.7396C25.1417 17.2813 24.8208 15.8959 24.2083 14.6855C26.3667 14.3938 28.6563 14.8021 30.3042 15.8959C32.6083 17.4125 32.6083 19.9063 30.3188 21.4375Z"
                fill="#085C79"
              />
              <path
                d="M9.39169 11.3312C9.49377 11.3167 9.59586 11.3167 9.69794 11.3312C11.9584 11.2583 13.7521 9.40624 13.7521 7.13124C13.7521 4.79791 11.8709 2.91666 9.53752 2.91666C7.21877 2.91666 5.33752 4.79791 5.33752 7.13124C5.33752 9.40624 7.13127 11.2583 9.39169 11.3312Z"
                fill="#085C79"
              />
              <path
                d="M9.55207 18.7396C9.55207 20.1542 9.85832 21.4958 10.4125 22.7063C8.35624 22.925 6.21249 22.4875 4.63749 21.4521C2.33332 19.9208 2.33332 17.4271 4.63749 15.8958C6.1979 14.8458 8.39999 14.4229 10.4708 14.6563C9.8729 15.8813 9.55207 17.2667 9.55207 18.7396Z"
                fill="#085C79"
              />
              <path
                d="M17.675 23.1437C17.5583 23.1292 17.4271 23.1292 17.2958 23.1437C14.6125 23.0562 12.4688 20.8542 12.4688 18.1417C12.4833 15.3708 14.7146 13.125 17.5 13.125C20.2708 13.125 22.5167 15.3708 22.5167 18.1417C22.5021 20.8542 20.3729 23.0562 17.675 23.1437Z"
                fill="#085C79"
              />
              <path
                d="M12.9354 26.1625C10.7333 27.6355 10.7333 30.0563 12.9354 31.5146C15.4437 33.1917 19.5562 33.1917 22.0646 31.5146C24.2667 30.0417 24.2667 27.6209 22.0646 26.1625C19.5708 24.4855 15.4583 24.4855 12.9354 26.1625Z"
                fill="#085C79"
              />
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Sistem Belajar Semiprivat
            </h3>
            <p className="mt-1 text-gray-600">
              Pembelajaran dilakukan dengan maksimal 3 murid{" "}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="text-center z-20 mt-40">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Layanan Bimble Kami
        </h1>
        <p className="mt-1 text-gray-600 ">
          Temukan Paket Belajar yang Sesuai dengan Tujuan dan Kebutuhanmu
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 items-center gap-40 mt-16">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="text-center"
          exit={{ opacity: 0, x: 20 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 20,
            transition: { duration: 0.5 },
          }}
        >
          <div className="flex justify-center items-center size-12 mx-auto">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_39_114)">
                <path
                  d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z"
                  fill="#C4B5FD"
                />
                <path
                  d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z"
                  fill="#7C3AED"
                />
                <path
                  d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z"
                  fill="#1DB5BE"
                />
              </g>
              <defs>
                <clipPath id="clip0_39_114">
                  <rect fill="white" height="32" width="32" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Kurikulum Nasional
            </h3>
            <p className="mt-1 text-gray-600">
              Membantu siswa dalam memahami materi pelajaran yang diajarkan di
              sekolah.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          whileInView={{
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <div className="flex justify-center items-center size-12 mx-auto">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33333 1.33331H30.6667L26.6667 9.33331H1.33333L5.33333 1.33331Z"
                fill="#7C3AED"
              />
              <path
                d="M5.33333 12H30.6667L26.6667 20H1.33333L5.33333 12Z"
                fill="#1DB5BE"
              />
              <path
                d="M5.33333 22.6666H30.6667L26.6667 30.6666H1.33333L5.33333 22.6666Z"
                fill="#C4B5FD"
              />
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Kurikulum Internasional{" "}
            </h3>
            <p className="mt-1 text-gray-600">
              Membantu siswa dalam memahami Cambridge O level, Cambridge IGCSE,
              Cambridge A/AS Level
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="text-center"
          exit={{ opacity: 0, x: -20 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{ x: -20, transition: { duration: 0.5 } }}
        >
          <div className="flex justify-center items-center size-12 mx-auto">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.6667 7.99998V2.66665C30.6667 2.31302 30.5262 1.97388 30.2762 1.72384C30.0261 1.47379 29.687 1.33331 29.3333 1.33331H2.66668C2.31305 1.33331 1.97392 1.47379 1.72387 1.72384C1.47382 1.97388 1.33334 2.31302 1.33334 2.66665V7.99998H30.6667Z"
                fill="#1DB5BE"
              />
              <path
                d="M1.33334 10.6666V29.3333C1.33334 29.6869 1.47382 30.0261 1.72387 30.2761C1.97392 30.5262 2.31305 30.6666 2.66668 30.6666H9.33334V10.6666H1.33334Z"
                fill="#C4B5FD"
              />
              <path
                d="M12 30.6666H29.3333C29.687 30.6666 30.0261 30.5262 30.2761 30.2761C30.5262 30.0261 30.6667 29.6869 30.6667 29.3333V10.6666H12V30.6666Z"
                fill="#7C3AED"
              />
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">UTBK</h3>
            <p className="mt-1 text-gray-600">
              Membantu siswa dalam memahami bagaimana mengikuti UTBK agar bisa
              lolos ke kampus impian.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="text-center"
          exit={{ opacity: 0, x: 20 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 20,
            transition: { duration: 0.5 },
          }}
        >
          <div className="flex justify-center items-center size-12 mx-auto">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 32H16C15.6464 32 15.3072 31.8595 15.0572 31.6094C14.8071 31.3594 14.6667 31.0202 14.6667 30.6666V28C14.6667 27.6463 14.8071 27.3072 15.0572 27.0571C15.3072 26.8071 15.6464 26.6666 16 26.6666H28C28.3536 26.6666 28.6928 26.8071 28.9428 27.0571C29.1928 27.3072 29.3333 27.6463 29.3333 28V30.6666C29.3333 31.0202 29.1928 31.3594 28.9428 31.6094C28.6928 31.8595 28.3536 32 28 32Z"
                fill="#C4B5FD"
              />
              <path
                d="M28 0H3.99999C3.64637 0 3.30723 0.140475 3.05718 0.390523C2.80713 0.640572 2.66666 0.979711 2.66666 1.33333V4C2.66666 4.35362 2.80713 4.69276 3.05718 4.94281C3.30723 5.19286 3.64637 5.33333 3.99999 5.33333H28C28.3536 5.33333 28.6928 5.19286 28.9428 4.94281C29.1929 4.69276 29.3333 4.35362 29.3333 4V1.33333C29.3333 0.979711 29.1929 0.640572 28.9428 0.390523C28.6928 0.140475 28.3536 0 28 0Z"
                fill="#1DB5BE"
              />
              <path
                d="M28 8H3.99999C3.64637 8 3.30723 8.14047 3.05718 8.39052C2.80713 8.64057 2.66666 8.97971 2.66666 9.33333V22.6667C2.66666 23.0203 2.80713 23.3594 3.05718 23.6095C3.30723 23.8595 3.64637 24 3.99999 24H28C28.3536 24 28.6928 23.8595 28.9428 23.6095C29.1929 23.3594 29.3333 23.0203 29.3333 22.6667V9.33333C29.3333 8.97971 29.1929 8.64057 28.9428 8.39052C28.6928 8.14047 28.3536 8 28 8Z"
                fill="#7C3AED"
              />
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Ujian Mandiri
            </h3>
            <p className="mt-1 text-gray-600">
              Membantu siswa dalam memahami bagaimana mengikuti ujian mandiri
              agar bisa lolos ke kampus impian.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          whileInView={{
            y: 0,
            transition: { duration: 0.5 },
          }}
        >
          <div className="flex justify-center items-center size-12 mx-auto">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66667 1.33337H2.66667C2.31304 1.33337 1.9739 1.47385 1.72386 1.7239C1.47381 1.97395 1.33333 2.31309 1.33333 2.66671V29.3334C1.33333 29.687 1.47381 30.0261 1.72386 30.2762C1.9739 30.5262 2.31304 30.6667 2.66667 30.6667H6.66667V1.33337Z"
                fill="#C4B5FD"
              />
              <path
                d="M9.33333 30.6667H22.6667V1.33337H9.33333V30.6667ZM16 25.3334C15.6464 25.3334 15.3072 25.1929 15.0572 24.9429C14.8071 24.6928 14.6667 24.3537 14.6667 24C14.6667 23.6464 14.8071 23.3073 15.0572 23.0572C15.3072 22.8072 15.6464 22.6667 16 22.6667C16.3536 22.6667 16.6928 22.8072 16.9428 23.0572C17.1929 23.3073 17.3333 23.6464 17.3333 24C17.3333 24.3537 17.1929 24.6928 16.9428 24.9429C16.6928 25.1929 16.3536 25.3334 16 25.3334ZM16 6.66671C16.3536 6.66671 16.6928 6.80718 16.9428 7.05723C17.1929 7.30728 17.3333 7.64642 17.3333 8.00004C17.3333 8.35366 17.1929 8.6928 16.9428 8.94285C16.6928 9.1929 16.3536 9.33337 16 9.33337C15.6464 9.33337 15.3072 9.1929 15.0572 8.94285C14.8071 8.6928 14.6667 8.35366 14.6667 8.00004C14.6667 7.64642 14.8071 7.30728 15.0572 7.05723C15.3072 6.80718 15.6464 6.66671 16 6.66671ZM16 14.6667C16.3536 14.6667 16.6928 14.8072 16.9428 15.0572C17.1929 15.3073 17.3333 15.6464 17.3333 16C17.3333 16.3537 17.1929 16.6928 16.9428 16.9429C16.6928 17.1929 16.3536 17.3334 16 17.3334C15.6464 17.3334 15.3072 17.1929 15.0572 16.9429C14.8071 16.6928 14.6667 16.3537 14.6667 16C14.6667 15.6464 14.8071 15.3073 15.0572 15.0572C15.3072 14.8072 15.6464 14.6667 16 14.6667Z"
                fill="#7C3AED"
              />
              <path
                d="M29.3333 1.33337H25.3333V30.6667H29.3333C29.687 30.6667 30.0261 30.5262 30.2761 30.2762C30.5262 30.0261 30.6667 29.687 30.6667 29.3334V2.66671C30.6667 2.31309 30.5262 1.97395 30.2761 1.7239C30.0261 1.47385 29.687 1.33337 29.3333 1.33337Z"
                fill="#1DB5BE"
              />
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">OSN</h3>
            <p className="mt-1 text-gray-600">
              Membantu siswa dalam memahami OSN Matematika SD/Madrasah, OSN IPA
              SD/Madrasah, OSN Matematika SMP, OSN Fisika SMP
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="text-center"
          exit={{ opacity: 0, x: -20 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: -20,
            transition: { duration: 0.5 },
          }}
        >
          <div className="flex justify-center items-center size-12 mx-auto">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_39_159)">
                <path
                  d="M15.2078 0.176053L0.781159 6.91605C0.683598 6.96079 0.60095 7.03263 0.543053 7.123C0.485156 7.21338 0.45445 7.31848 0.45459 7.42581C0.454731 7.53314 0.485711 7.63817 0.543844 7.7284C0.601977 7.81862 0.684814 7.89024 0.782492 7.93472L15.3225 14.6254C15.7518 14.8227 16.2478 14.8227 16.6772 14.6254L31.2172 7.93472C31.3149 7.89036 31.3978 7.81886 31.4561 7.72871C31.5143 7.63856 31.5454 7.53357 31.5457 7.42624C31.546 7.31891 31.5154 7.21376 31.4577 7.12331C31.3999 7.03286 31.3173 6.96092 31.2198 6.91605L16.7918 0.176053C16.5439 0.0601784 16.2735 0.00012207 15.9998 0.00012207C15.7261 0.00012207 15.4558 0.0601784 15.2078 0.176053Z"
                  fill="#7C3AED"
                />
                <path
                  d="M31.22 15.5681L28.24 14.1761C28.0266 14.0764 27.794 14.0244 27.5584 14.0237C27.3229 14.023 27.09 14.0736 26.876 14.1721L16.6773 18.8654C16.4649 18.9631 16.2338 19.0137 16 19.0137C15.7662 19.0137 15.5351 18.9631 15.3227 18.8654L5.12267 14.1721C4.90885 14.0738 4.67621 14.0233 4.4409 14.024C4.20559 14.0247 3.97324 14.0766 3.76001 14.1761L0.780006 15.5681C0.682503 15.613 0.599949 15.6849 0.54217 15.7754C0.48439 15.8658 0.453823 15.971 0.454103 16.0783C0.454384 16.1856 0.485502 16.2906 0.543754 16.3808C0.602006 16.4709 0.684937 16.5424 0.782674 16.5868L15.3227 23.2761C15.535 23.3743 15.7661 23.4252 16 23.4252C16.2339 23.4252 16.465 23.3743 16.6773 23.2761L31.2173 16.5868C31.3151 16.5424 31.398 16.4709 31.4563 16.3808C31.5145 16.2906 31.5456 16.1856 31.5459 16.0783C31.5462 15.971 31.5156 15.8658 31.4578 15.7754C31.4001 15.6849 31.3175 15.613 31.22 15.5681Z"
                  fill="#C4B5FD"
                  opacity="0.64"
                />
                <path
                  d="M31.22 24.1441L28.24 22.7521C28.0266 22.6524 27.794 22.6004 27.5585 22.5997C27.3229 22.599 27.09 22.6496 26.876 22.7481L16.6774 27.4401C16.4649 27.5378 16.2338 27.5883 16 27.5883C15.7662 27.5883 15.5351 27.5378 15.3227 27.4401L5.12269 22.7468C4.90887 22.6485 4.67623 22.5979 4.44091 22.5986C4.2056 22.5993 3.97326 22.6512 3.76002 22.7507L0.780019 24.1441C0.682891 24.1891 0.600708 24.261 0.543205 24.3513C0.485701 24.4416 0.455288 24.5465 0.455568 24.6536C0.455849 24.7607 0.486813 24.8654 0.544789 24.9554C0.602765 25.0454 0.685324 25.1169 0.782686 25.1614L15.3227 31.8521C15.752 32.0494 16.248 32.0494 16.6774 31.8521L31.2174 25.1614C31.3147 25.1169 31.3973 25.0454 31.4553 24.9554C31.5132 24.8654 31.5442 24.7607 31.5445 24.6536C31.5448 24.5465 31.5143 24.4416 31.4568 24.3513C31.3993 24.261 31.3172 24.1891 31.22 24.1441Z"
                  fill="#1DB5BE"
                />
              </g>
              <defs>
                <clipPath id="clip0_39_159">
                  <rect fill="white" height="32" width="32" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">Kedinasan </h3>
            <p className="mt-1 text-gray-600">
              Membantu siswa dalam memahami bagaimana mengikuti ujian kedinasan
              agar dapat lolos dengan nilai baik.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="text-center"
          exit={{ opacity: 0, x: -20 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          whileInView={{
            x: 20,
            transition: { duration: 0.5 },
          }}
        >
          <div className="flex justify-center items-center size-12 mx-auto">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.6667 7.99998V2.66665C30.6667 2.31302 30.5262 1.97388 30.2762 1.72384C30.0261 1.47379 29.687 1.33331 29.3333 1.33331H2.66668C2.31305 1.33331 1.97392 1.47379 1.72387 1.72384C1.47382 1.97388 1.33334 2.31302 1.33334 2.66665V7.99998H30.6667Z"
                fill="#1DB5BE"
              />
              <path
                d="M1.33334 10.6666V29.3333C1.33334 29.6869 1.47382 30.0261 1.72387 30.2761C1.97392 30.5262 2.31305 30.6666 2.66668 30.6666H9.33334V10.6666H1.33334Z"
                fill="#C4B5FD"
              />
              <path
                d="M12 30.6666H29.3333C29.687 30.6666 30.0261 30.5262 30.2761 30.2761C30.5262 30.0261 30.6667 29.6869 30.6667 29.3333V10.6666H12V30.6666Z"
                fill="#7C3AED"
              />
            </svg>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Mengaji {"Qur'an"} Bersyahadah
            </h3>
            <p className="mt-1 text-gray-600">
              Membantu siswa dalam memahami bagaimana mengaji dengan baik dan
              benar.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LayananSection;
