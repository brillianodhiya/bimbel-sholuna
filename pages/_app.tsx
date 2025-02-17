import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
// import PrelineScript from "@/components/PrelineScript";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      {/* <NextThemesProvider> */}
      {/* <PrelineScript /> */}
      <Component {...pageProps} />
      {/* </NextThemesProvider> */}
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};

export function reportWebVitals(metric: { label: string }) {
  metric.label === "web-vital" && console.log(metric);
}
