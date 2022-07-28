import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import { GetServerSideProps } from "next";
// Ici je peux mock les datas pour la recherche all
import Response from "../Response";
// Ici je peux mock les datas pour la recherche image
import ResponseImages from "../ResponseImages";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import ImageResults from "../components/ImageResults";

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
      {route.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </>
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const startIndex = context.query.start || "1";
  // On mock des datas ici pour éviter d'utilisre mon crédit gratuit de l'API Google
  const mockData = false;
  const data = mockData
    ? ResponseImages
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
