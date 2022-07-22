import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  console.log("search input value ", searchInputRef);

  const search = (event: any) => {
    event.preventDefault();
    if (searchInputRef.current) {
      const term: string = searchInputRef.current.value;
      // console.log("term : ", typeof term);
      if (!term.trim()) return;
      router.push(`/search?term=${term.trim()}&searchType=`);
    }
  };

  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className="flex flex-col items-center my-16 mx-8">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/langfr-2880px-Google_2015_logo.svg.png"
          alt="Google logo"
          height="200"
          objectFit="cover"
          width="600"
        />
        <div className="flex w-full justify-center my-8 max-w-[90%] sm:max-w-xl lg:max-w-2xl border border-gray-200 hover:shadow-lg focus-within:shadow-lg rounded-full px-4 py-2 items-center">
          <SearchIcon className="h-5 text-gray-500 mr-2" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 ml-2" />
        </div>
        <div className="flex flex-col justify-center w-1/2 space-y-2 mt-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button onClick={search} className="btn-home-search">
            Google Search
          </button>
          <button className="btn-home-search">I&rsquo;m feeling luky</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
