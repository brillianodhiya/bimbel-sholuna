/* eslint-disable prettier/prettier */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
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

const ComponentMaping = ({
  data,
}: {
  data: { id: string; title: string }[];
}) => {
  const maxItemsPerList = 5; // Set the maximum number of items per list
  const lists = []; // Array to store lists

  // Iterate through the data and create lists
  for (let i = 0; i < data.length; i += maxItemsPerList) {
    const sublist = data.slice(i, i + maxItemsPerList); // Get a sublist of items
    const listItems = sublist.map((item, index) => (
      <li key={item.id} className="flex space-x-3">
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

        <span className="text-sm sm:text-base text-gray-500">{item.title}</span>
      </li>
    ));

    lists.push(
      <ul key={`list-${i}`} className="space-y-2 sm:space-y-4">
        {listItems}
      </ul>
    );
  }

  return <div className="flex flex-wrap flex-row gap-10">{lists}</div>;
};

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
            alt={props.layanan[0].title}
            className="rounded-xl"
            fetchPriority="auto"
            height={800}
            src="/ed-us-_y4FqRhxkR8-unsplash.jpg"
            width={800}
          />
        </div>

        <div className="order-2 mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                {props.layanan[0].title}
              </h2>
              <p className="text-gray-500">
                {props.layanan[0].deksripsi_panjang}
              </p>
            </div>

            <ComponentMaping data={props.layanan[0].layananDetails} />
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
            alt={props.layanan[1].title}
            className="rounded-xl"
            fetchPriority="auto"
            height={800}
            src="/ed-us-uHPfTGy-Lto-unsplash.jpg"
            width={800}
          />
        </div>
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                {props.layanan[1].title}
              </h2>
              <p className="text-gray-500">
                {props.layanan[1].deksripsi_panjang}
              </p>
            </div>

            <ComponentMaping data={props.layanan[1].layananDetails} />
          </div>
        </div>
        <div className="sm:block hidden">
          <Image
            alt={props.layanan[1].title}
            className="rounded-xl"
            fetchPriority="auto"
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
            alt={props.layanan[2].title}
            className="rounded-xl"
            fetchPriority="auto"
            height={800}
            src="/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg"
            width={800}
          />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                {props.layanan[2].title}
              </h2>
              <p className="text-gray-500">
                {props.layanan[2].deksripsi_panjang}
              </p>
            </div>

            <ComponentMaping data={props.layanan[2].layananDetails} />
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
            alt={props.layanan[4].title}
            className="rounded-xl"
            fetchPriority="auto"
            height={800}
            src="/anoushka-puri-f1YfrZ1o2r8-unsplash.jpg"
            width={800}
          />
        </div>
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                {props.layanan[4].title}
              </h2>
              <p className="text-gray-500">
                {props.layanan[4].deksripsi_panjang}
              </p>
            </div>

            <ComponentMaping data={props.layanan[4].layananDetails} />
          </div>
        </div>
        <div className="sm:block hidden">
          <Image
            alt={props.layanan[4].title}
            className="rounded-xl"
            fetchPriority="auto"
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
            alt={props.layanan[3].title}
            className="rounded-xl"
            fetchPriority="auto"
            height={800}
            src="/jeswin-thomas--hgJu2ykh4E-unsplash.jpg"
            width={800}
          />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                {props.layanan[3].title}
              </h2>
              <p className="text-gray-500">
                {props.layanan[3].deksripsi_panjang}
              </p>
            </div>
            <ComponentMaping data={props.layanan[3].layananDetails} />
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
            alt={props.layanan[5].title}
            className="rounded-xl"
            fetchPriority="auto"
            height={800}
            src="/kenny-eliason-zFSo6bnZJTw-unsplash.jpg"
            width={800}
          />
        </div>
        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                {props.layanan[5].title}
              </h2>
              <p className="text-gray-500">
                {props.layanan[5].deksripsi_panjang}
              </p>
            </div>

            <ComponentMaping data={props.layanan[5].layananDetails} />
          </div>
        </div>
        <div className="sm:block hidden">
          <Image
            alt={props.layanan[5].title}
            className="rounded-xl"
            fetchPriority="auto"
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
            alt={props.layanan[6].title}
            className="rounded-xl"
            fetchPriority="auto"
            height={800}
            src="/ed-us-iXUXMn_-nh8-unsplash.jpg"
            width={800}
          />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                {props.layanan[6].title}
              </h2>
              <p className="text-gray-500">
                {props.layanan[6].deksripsi_panjang}
              </p>
            </div>

            <ComponentMaping data={props.layanan[6].layananDetails} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Kurikulum;
