import User from "./User";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const route = useRouter();

  return (
    <header className="flex justify-between p-5 text-sm text-gray-700">
      <div className="flex space-x-4 items-center">
        <Link href={"https://about.google/"}>
          <a className="link">About</a>
        </Link>
        <Link href={"https://store.google.com"}>
          <a className="link">Store</a>
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com"}>
          <a className="link">Gmail</a>
        </Link>
        <a
          onClick={() => route.push(`/search?term=google&searchType=image`)}
          className="link"
        >
          Images
        </a>
        <User classNameStyle={""} />
      </div>
    </header>
  );
};

export default Header;
