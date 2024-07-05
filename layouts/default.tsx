import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-full flex-grow pt-16 ">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://aitilokal.com"
          title="nextui.org homepage"
        >
          <span className="text-default-600">© 2024</span>
          <p className="text-black">
            AITI <span className="text-red-500">Indonesia</span>. All rights
            reserved.
          </p>
        </Link>
      </footer>
    </div>
  );
}
