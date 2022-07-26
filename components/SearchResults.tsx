import Parser from "html-react-parser";

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
      {results.results.items.map((result: any) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a className="text-sm truncate" href={result.link}>
              {result.formattedUrl}
            </a>
            <a
              className="group-hover:underline decoration-blue-800"
              href={result.link}
            >
              <h2 className="truncate text-xl font-medium text-blue-800">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
