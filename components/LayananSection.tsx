/* eslint-disable prettier/prettier */
import React from "react";
import { motion } from "framer-motion";

type Props = {
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

const LayananSection = (props: Props) => {
  return (
    <div className="max-w-[80vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto z-20">
      <div className="grid md:grid-cols-3 lg:grid-cols-3 items-center gap-40">
        {props.sistem.map((val, idx) => {
          return (
            <motion.div
              key={val.id}
              animate={{ opacity: 1, x: 0 }}
              className="text-center"
              // exit={{ opacity: 0, x: 20 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center items-center size-12 bg-gray-50 border border-gray-200 rounded-full mx-auto">
                <span dangerouslySetInnerHTML={{ __html: val.icon }} />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {val.title}
                </h3>
                <p className="mt-1 text-gray-600">{val.deskripsi}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center z-20 mt-40">
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
          Layanan Bimbel Kami
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
              {props.layanan[0].title}
            </h3>
            <p className="mt-1 text-gray-600">{props.layanan[0].deskripsi}</p>
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
              {props.layanan[1].title}
            </h3>
            <p className="mt-1 text-gray-600">{props.layanan[1].deskripsi}</p>
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
            <h3 className="text-lg font-semibold text-gray-800">
              {props.layanan[2].title}
            </h3>
            <p className="mt-1 text-gray-600">{props.layanan[2].deskripsi}</p>
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
              {props.layanan[3].title}
            </h3>
            <p className="mt-1 text-gray-600">{props.layanan[3].deskripsi}</p>
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
            <h3 className="text-lg font-semibold text-gray-800">
              {props.layanan[4].title}
            </h3>
            <p className="mt-1 text-gray-600">{props.layanan[4].deskripsi}</p>
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
            <h3 className="text-lg font-semibold text-gray-800">
              {props.layanan[5].title}
            </h3>
            <p className="mt-1 text-gray-600">{props.layanan[5].deskripsi}</p>
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
              {props.layanan[6].title}
            </h3>
            <p className="mt-1 text-gray-600">{props.layanan[6].deskripsi}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LayananSection;
