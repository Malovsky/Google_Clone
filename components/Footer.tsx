import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col absolute bottom-0 left-[50%] translate-x-[-50%] whitespace-nowrap p-4 text-sm text-gray-600">
      <p>Copyright &copy; {new Date().getFullYear()} Kevin MASLOWSKI</p>
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
