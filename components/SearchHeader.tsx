import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import User from "./User";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = (event: any) => {
    event.preventDefault();
    if (searchInputRef.current) {
      const term: string = searchInputRef.current.value;
      // console.log("term : ", typeof term);
      if (!term.trim()) return;
      router.push(`/search?term=${term.trim()}`);
    }
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-4 items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/langfr-2880px-Google_2015_logo.svg.png"
          alt="Google logo"
          height="40"
          width="120"
          objectFit="contain"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-4 py-2 ml-8 mr-4 flex-grow max-w-3xl items-center">
          <input
            className="w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer sm:mr-2"
            onClick={() => {
              if (searchInputRef.current) searchInputRef.current.value = "";
            }}
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex cursor-pointer text-blue-500 pl-4 border-l-2 border-gray-300 mr-2" />
          <SearchIcon className="h-6 hidden sm:inline-flex cursor-pointer text-blue-500" />
          <button onClick={search} type="submit" hidden></button>
        </form>
        <User classNameStyle="ml-auto" />
      </div>
    </header>
  );
};

export default SearchHeader;
