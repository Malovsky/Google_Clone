type SearchResultsProps = {
  // TYPE JSON ?
  results: any;
};

const SearchResults = ({ results }: SearchResultsProps) => {
  console.log("results : ", results);

  return (
    <div className="w-full mx-auto px-4 sm:pl-[5%] md:pl-[14%] lg:pl-48">
      <p className="text-gray-600 text-sm my-4">
        About {results.results.searchInformation.formattedTotalResults} results
        ({results.results.searchInformation.formattedSearchTime} seconds)
      </p>
    </div>
  );
};

export default SearchResults;
