import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import { GetServerSideProps } from "next";
import Response from "../Response";

type searchProps = {
  results: JSON;
};

const search = ({ results }: searchProps) => {
  console.log({ results });

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  // On mock des datas ici pour éviter d'utilisre mon crédit gratuit de l'API Google
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};
