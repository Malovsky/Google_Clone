import SearchHeaderOption from "./SearchHeaderOption";
import { SearchIcon, PhotographIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const SearchHeaderOptions = () => {
  const route = useRouter();
  return (
    <div className="p-2 flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-48 lg:justify-start border-b">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        selected={route.query.searchType === "" || !route.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotographIcon}
        selected={route.query.searchType === "image"}
      />
    </div>
  );
};

export default SearchHeaderOptions;
