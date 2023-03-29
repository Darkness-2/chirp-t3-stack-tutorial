import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Chirp</title>
        <meta name="description" content="Emoji post feed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
        <Toaster position="bottom-center" />
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
