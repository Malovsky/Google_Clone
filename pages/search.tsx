import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import { GetServerSideProps } from "next";
import Response from "../Response";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";

type searchProps = {
  // TYPE JSON ?
  results: any;
};

const Search = ({ results }: searchProps) => {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>{route.query.term} - Search page</title>
      </Head>
      <SearchHeader />
      <SearchResults results={results} />
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const startIndex = context.query.start || "1";
  // On mock des datas ici pour éviter d'utilisre mon crédit gratuit de l'API Google
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
};
