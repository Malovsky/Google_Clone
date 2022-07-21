import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const route = useRouter();
  console.log("route in _app.tsx : ", route);

  return (
    <SessionProvider session={session}>
      {route.pathname != "/search" && <Header />}
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
