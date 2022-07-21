import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

const search = () => {
  return (
    <>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* SEARCH HEADER */}
      <SearchHeader />

      {/* SEARCH RESULT */}
    </>
  );
};

export default search;
