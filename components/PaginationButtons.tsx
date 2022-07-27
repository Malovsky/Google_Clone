import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

type PaginationButtonsProps = {};

const PaginationButtons = ({}: PaginationButtonsProps) => {
  const route = useRouter();

  const startIndex: number = Number(route.query.start) || 1;

  return (
    <div className="text-blue-700 flex px-8 py-4 justify-between sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex > 10 && (
        <Link
          href={`/search?term=${route.query.term}&searchType=${
            route.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${route.query.term}&searchType=${
            route.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="cursor-pointer flex flex-col items-center hover:underline">
            <ChevronRightIcon className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButtons;
