import type { AppProps } from "next/app";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  console.log(router, "aqui estou eu mais um dia");

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="Europe/Vienna"
      messages={pageProps.messages}
    >
      <Layout>
        <Component {...pageProps} />
        <PrismicPreview repositoryName={repositoryName} />
      </Layout>
    </NextIntlClientProvider>
  );
}
