import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const route = useRouter();

  console.log({ route });

  return (
    <footer className="flex flex-col items-center whitespace-nowrap px-4 py-24 text-sm text-gray-600">
      <p>
        Copyright &copy; {new Date().getFullYear()}
        <span> </span>
        <span className="text-blue-500">K</span>
        <span className="text-red-500">e</span>
        <span className="text-yellow-500">v</span>
        <span className="text-blue-500">i</span>
        <span className="text-green-600">n</span>
        <span> </span>
        <span className="text-red-500">M</span>
        <span className="text-blue-500">A</span>
        <span className="text-red-500">S</span>
        <span className="text-yellow-500">L</span>
        <span className="text-blue-500">O</span>
        <span className="text-green-600">W</span>
        <span className="text-red-500">S</span>
        <span className="text-blue-500">K</span>
        <span className="text-red-500">I</span>
      </p>
      <p>
        To see the source code, click{" "}
        <Link href="https://github.com/Malovsky/Google_Clone">
          <span className="text-blue-500 cursor-pointer">here</span>
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
