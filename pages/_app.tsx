import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/Container";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Container />
      <Component {...pageProps} />
      {/* Have to investigate why i can't wrap */}
      {/* </Container> */}
    </>
  );
}

export default MyApp;
