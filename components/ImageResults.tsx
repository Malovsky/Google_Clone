/* eslint-disable @next/next/no-img-element */

import PaginationButtons from "./PaginationButtons";

type ImageResultsProps = {
  // TYPE JSON ?
  results: any;
};
const ImageResults = ({ results }: ImageResultsProps) => {
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 space-x-4">
        {results.items.map((result: any) => (
          <div key={result.link} className="my-4">
            <div className="group">
              <a href={result.image.contextLink}>
                <img
                  className="group-hover:shadow-xl w-full h-60 object-contain"
                  src={result.link}
                  alt={result.title}
                />
              </a>
              <a
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <h2 className="truncate text-xl">{result.title}</h2>
              </a>
              <a
                className="group-hover:underline"
                href={result.image.contextLink}
              >
                <p className="text-gray-600">{result.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
};
export default ImageResults;
